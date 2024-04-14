import { getToken } from "next-auth/jwt";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

async function handler(
    req: NextRequest,
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
            const courses = await col.aggregate(
                [
                    {
                      '$lookup': {
                        'from': 'courses', 
                        'localField': 'course_id', 
                        'foreignField': '_id', 
                        'as': 'course'
                      }
                    }, {
                      '$unwind': {
                        'path': '$course', 
                        'preserveNullAndEmptyArrays': true
                      }
                    }, {
                      '$match': {
                        'student_id': new ObjectId(token.sub), 
                        'course.enabled': true
                      }
                    }, {
                      '$project': {
                        '_id': '$course._id', 
                        'name': '$course.name', 
                        'description': '$course.description', 
                        'image': '$course.image', 
                        'teacher': '$course.teacher', 
                        'enabled': '$course.enabled'
                      }
                    }
                  ]
            ).toArray();
            //res.json(courses)
            return NextResponse.json(courses)
        } catch {

        }
    }
}

export { handler as GET };