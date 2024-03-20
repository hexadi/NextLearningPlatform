import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Profile | Learning Platform",
    description: "Personalize your learning experience and keep your profile up-to-date.",
};

export default function ProfilePage() {
    return (
        <div className={"min-h-screen w-full"}>
            <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} />
                </div>
                <span className="text-3xl text-white">
                    Profile
                </span>
                <span></span>
            </div>
            <div className="px-10 py-5">
                <h1 className="text-3xl">
                    Profile
                </h1>
            </div>
            <div className="px-10">
                <div className="flex">
                    <div>
                        <Image src={/* if the picture is not blank */ null || "/icons/profile_white.svg"} alt="Profile" width={200} height={200} className="bg-big-stone-950 aspect-square object-contain rounded-lg" />
                        <Image src={"/icons/upload.svg"} alt="Upload" width={28} height={28} className="relative bottom-10 left-40" />
                        <span>
                            Profile Picture
                        </span>
                    </div>
                    <div className="w-2/3 ml-10">
                        <div className="bg-mercury-100 p-5">
                            <div className="flex items-center mb-2">
                                <span className="mr-14 text-calypso-700">
                                    Name
                                </span>
                                <input type="text" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" />
                            </div>
                            <div className="flex items-center mb-10">
                                <span className="mr-14 text-calypso-700">
                                    Email
                                </span>
                                <input type="email" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" />
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-6 text-carrot-orange-500">
                                    Username
                                </span>
                                <input type="text" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" />
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-6 text-carrot-orange-500">
                                    Password
                                </span>
                                <input type="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <Image src={"/icons/check.svg"} alt="Check" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
