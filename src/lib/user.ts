import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { MongoClient, ServerApiVersion } from "mongodb";


export async function getUser(cookie: RequestCookies) {
    const token = cookie.get("next-auth.session-token")
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
                    'sessionToken': token
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
            return result[0]
        } else {
            return null
        }
    } catch (error) {
        return null
    } finally {
        await client.close();
    }
}