import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
export async function GET(request: NextRequest) {
    const client = new MongoClient(process.env.MONGODB_URI!, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    try {
        await client.connect();
        const pipeline = [
            {
                '$match': {
                    'sessionToken': request.cookies.get("next-auth.session-token")?.value
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'userId',
                    'foreignField': '_id',
                    'as': 'user'

                }
            },
            {
                '$unwind': {
                    'path': '$user'
                }
            },
            {
                '$project': {
                    '_id': '$user._id',
                    'name': '$user.name',
                    'email': '$user.email',
                    'image': '$user.image'
                }
            }
        ]
        const aggCursor = client.db("test").collection("sessions").aggregate(pipeline)
        const result = await aggCursor.toArray()
        if (result.length == 1) {
            return NextResponse.json(result[0])
        } else {
            return NextResponse.json({ error: "Session not found" })
        }
    } catch (error) {
        return NextResponse.json({ error: error })
    } finally {
        await client.close();
    }

}