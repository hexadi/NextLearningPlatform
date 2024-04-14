import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile(profile) {
                return {
                    id: profile.sub,
                    role: profile.role ?? ["Student"],
                    email: profile.email,
                    name: profile.name,
                    image: profile.picture,
                };
            },
        }),
    ],
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    callbacks: {
        jwt({ token, user }) {
            if(user) token.role = (user as any).role
            return token
        },
        session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            //(session as any).user.id = user.id;
            (session as any).user.role = token.role
            console.log("session :",session)
            console.log("token :",token)
            console.log("user :",user);
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    pages: {
        signIn: '/'
    }
};