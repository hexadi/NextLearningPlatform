"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Card from "@/components/courseCard";

export default function MyCoursesPage() {
    const router = useRouter()
    useEffect(() => {
        document.title = "My Courses | Learning Platform"
    }, [])
    return (
        <>
            <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} onClick={() => router.push("/dashboard")} />
                </div>
                <span className="text-3xl text-white">
                    My Courses
                </span>
                <span>
                    <Image src="/icons/filter.svg" alt="Filter" width={40} height={40} />
                </span>
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-left text-xl text-carrot-orange-600 ">
                        {`1 Course`}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 w-full z-10 px-20 pb-10">
                <Card id={"1"} imageUrl={"/sample.png"} courseName={"Sample Course"} route={null} />
            </div>
        </>
    );
}
