import { getToken } from "next-auth/jwt";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

async function handler(
    req: NextRequest,
    { params }: { params: { course_id: string } },
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
            const col = db.collection("courses");
            const isAdmin = req.nextUrl.searchParams.get("admin") !== null && ((token.role as Array<String>).includes("Teacher") || (token.role as Array<String>).includes("Admin"));
            const courses = await col.aggregate(
                [
                    {
                        '$match': {
                            '_id': new ObjectId(params.course_id)
                        }
                    }, {
                        '$lookup': {
                            'from': 'module', 
                            'localField': '_id', 
                            'foreignField': 'courseId', 
                            'as': 'modules', 
                            'pipeline': isAdmin ? [
                                {
                                    '$sort': { 'order': 1 }
                                }
                            ] : [
                                {
                                    '$match': { 'published': true }
                                },
                                {
                                    '$sort': { 'order': 1 }
                                }
                            ]
                        }
                    }, {
                        '$unwind': {
                            'path': '$modules', 
                            'preserveNullAndEmptyArrays': true
                        }
                    }, {
                        '$lookup': {
                            'from': 'material', 
                            'localField': 'modules._id', 
                            'foreignField': 'moduleId', 
                            'as': 'modules.material', 
                            'pipeline': isAdmin ? [
                                {
                                    '$sort': { 'order': 1 }
                                }
                            ] : [
                                {
                                    '$match': { 'published': true }
                                },
                                {
                                    '$sort': { 'order': 1 }
                                }
                            ]
                        }
                    }, {
                        '$addFields': {
                            'modules.materialCount': {
                                '$size': '$modules.material'
                            }
                        }
                    }, {
                        '$group': {
                            '_id': '$_id', 
                            'name': {
                                '$first': '$name'
                            }, 
                            'description': {
                                '$first': '$description'
                            }, 
                            'image': {
                                '$first': '$image'
                            }, 
                            'published': {
                                '$first': '$published'
                            }, 
                            'modules': {
                                '$push': '$modules'
                            }
                        }
                    }, {
                        '$lookup': {
                            'from': 'enroll', 
                            'localField': '_id', 
                            'foreignField': 'courseId', 
                            'as': 'enrollmentDetails', 
                            'pipeline': [
                                {
                                    '$match': {
                                        'studentId': new ObjectId(token.sub)
                                    }
                                }
                            ]
                        }
                    }, {
                        '$addFields': {
                            'isEnrolled': {
                                '$eq': [
                                    {
                                        '$size': '$enrollmentDetails'
                                    }, 1
                                ]
                            }
                        }
                    }, {
                        '$project': {
                            '_id': 1, 
                            'name': 1, 
                            'description': 1, 
                            'image': 1, 
                            'published': 1, 
                            'module': {
                                '$slice': [
                                    '$modules', 100
                                ]
                            }, 
                            'isEnrolled': '$isEnrolled'
                        }
                    }
                ]
            ).toArray()
            //res.json(courses)
            return NextResponse.json(courses[0])
        } catch {

        }
    }
}

export { handler as GET };