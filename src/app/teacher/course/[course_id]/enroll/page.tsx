"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function StudentPage() {
    const router = useRouter()
    useEffect(() => {
        document.title = "Student | Learning Platform"
    }, [])
    return (
        <div className={"min-h-screen w-full"}>
            <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} onClick={() => router.push("/dashboard")} />
                </div>
                <span className="text-3xl text-white">
                    Student
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
                                <span>Name S.</span>
                            </div>
                            <div className="flex items-center mb-10">
                                <span className="mr-14 text-calypso-700">
                                    Email
                                </span>
                                <span>example@email.com</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-6 text-carrot-orange-500">
                                    Username
                                </span>
                                <span>username</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-6 text-carrot-orange-500">
                                    Password
                                </span>
                                <span>123456</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-5">
                            <Image src={"/icons/reset.svg"} alt="Check" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
