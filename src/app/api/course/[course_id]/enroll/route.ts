import { getToken } from "next-auth/jwt";
import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

async function handler(
    req: NextRequest,
    res: NextResponse
) {
    if (req.method === "POST") {
        try {
            const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
            console.log(token)
            if (token == null) {
                return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
            }
            const client = await MongoClient.connect(process.env.MONGODB_URI!);
            const db = client.db("data");
            const col = db.collection("enroll");
            const pathSplit: string[] = req.nextUrl.pathname.split("/").splice(1)
            const courseId: string = pathSplit[2]
            const result = await col.insertOne({
                courseId: new ObjectId(courseId),
                studentId: new ObjectId(token.sub)
            })
            if (result.insertedId != null) {
                return NextResponse.json({status: "Complete"})
            } else {
                return NextResponse.json({status: "Failed"}, {status: 400})
            }
            //res.json(courses)
        } catch {

        }
    }
}

export { handler as POST };