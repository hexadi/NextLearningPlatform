import { getToken } from "next-auth/jwt";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

async function handler(
    req: NextRequest,
    { params }: { params: { course_id: string, material_id: string } },
    res: NextResponse
) {
    if (req.method === "GET") {
        try {
            const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
            console.log(token)
            if (token == null) {
                return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
            }
            const client = await MongoClient.connect(process.env.MONGODB_URI!);
            const db = client.db("data");
            const col = db.collection("material");
            const isAdmin = req.nextUrl.searchParams.get("admin") !== null && ((token.role as Array<String>).includes("Teacher") || (token.role as Array<String>).includes("Admin"));
            const material = await col.aggregate(
                [
                    {
                        '$match': {
                            '_id': new ObjectId(params.material_id)
                        }
                    }, {
                        '$lookup': {
                            'from': 'material', 
                            'localField': 'moduleId', 
                            'foreignField': 'moduleId', 
                            'as': 'materialsInModule', 
                            'pipeline': [
                                {
                                    '$match': {
                                        'published': true
                                    }
                                }, {
                                    '$sort': {
                                        'order': 1
                                    }
                                }
                            ]
                        }
                    }, {
                        '$lookup': {
                            'from': 'module', 
                            'localField': 'moduleId', 
                            'foreignField': '_id', 
                            'as': 'course', 
                            'pipeline': [
                                {
                                    '$match': {
                                        'published': true
                                    }
                                }
                            ]
                        }
                    }, {
                        '$unwind': {
                            'path': '$course', 
                            'includeArrayIndex': 'string', 
                            'preserveNullAndEmptyArrays': true
                        }
                    }, {
                        '$lookup': {
                            'from': 'courses', 
                            'localField': 'course.courseId', 
                            'foreignField': '_id', 
                            'as': 'course'
                        }
                    }, {
                        '$unwind': {
                            'path': '$course', 
                            'includeArrayIndex': 'string', 
                            'preserveNullAndEmptyArrays': true
                        }
                    }, {
                        '$addFields': {
                            'previous': {
                                '$subtract': [
                                    '$order', 1
                                ]
                            }, 
                            'next': {
                                '$add': [
                                    '$order', 1
                                ]
                            }
                        }
                    }, {
                        '$addFields': {
                            'previous': {
                                '$cond': {
                                    'if': {
                                        '$and': [
                                            {
                                                '$gte': [
                                                    '$previous', 0
                                                ]
                                            }, {
                                                '$ne': [
                                                    '$materialsInModule._id', null
                                                ]
                                            }
                                        ]
                                    }, 
                                    'then': {
                                        '$arrayElemAt': [
                                            '$materialsInModule._id', {
                                                '$indexOfArray': [
                                                    '$materialsInModule.order', '$previous'
                                                ]
                                            }
                                        ]
                                    }, 
                                    'else': null
                                }
                            }, 
                            'next': {
                                '$cond': {
                                    'if': {
                                        '$and': [
                                            {
                                                '$lt': [
                                                    '$next', {
                                                        '$size': '$materialsInModule'
                                                    }
                                                ]
                                            }, {
                                                '$ne': [
                                                    '$materialsInModule._id', null
                                                ]
                                            }
                                        ]
                                    }, 
                                    'then': {
                                        '$arrayElemAt': [
                                            '$materialsInModule._id', {
                                                '$indexOfArray': [
                                                    '$materialsInModule.order', '$next'
                                                ]
                                            }
                                        ]
                                    }, 
                                    'else': null
                                }
                            }
                        }
                    }, {
                        '$project': {
                            'name': 1, 
                            'courseName': '$course.name', 
                            'type': 1, 
                            'body': 1, 
                            'video': 1, 
                            'created_at': 1, 
                            'edited_at': 1, 
                            'moduleId': 1, 
                            'order': 1, 
                            'previous': 1, 
                            'next': 1, 
                            'published': 1
                        }
                    }
                ]
            ).toArray()
            //res.json(courses)
            return NextResponse.json(material[0])
        } catch (error) {
            console.log(error)
        }
    }
}

export { handler as GET };