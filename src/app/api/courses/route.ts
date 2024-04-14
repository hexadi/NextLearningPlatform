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
            const options = req.nextUrl.searchParams.get("admin") !== null && ((token.role as Array<String>).includes("Teacher") || (token.role as Array<String>).includes("Admin")) ? {} : { published: true };
            const courses = await col.find(options).toArray();
            console.log(courses)
            //res.json(courses)
            return NextResponse.json(courses)
        } catch {

        }
    }
}

export { handler as GET };