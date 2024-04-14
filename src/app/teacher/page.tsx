"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CourseCard from "@/components/courseCard";
import UserCard from "@/components/userCard";

export default function TeacherDashboardPage() {
    const router = useRouter()
    useEffect(() => {
        document.title = "Dashboard | Learning Platform"
    }, [])
    return (
        <>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/banner.jpeg" alt="Banner 1" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex">
                        <span className="text-left text-3xl text-carrot-orange-500 mr-2">
                            Students
                        </span>
                        <Image src="/icons/orange_add.svg" alt="Add" width={25} height={25} />
                    </div>
                    <span className="text-right underline" onClick={() => router.push("/teacher/students")}>
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20">
                <UserCard id={"1"} imageUrl={"/sample.png"} name={"Name S."} route={router} />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex">
                        <span className="text-left text-3xl text-carrot-orange-500 mr-2">
                            Courses
                        </span>
                        <Image src="/icons/orange_add.svg" alt="Add" width={25} height={25} />
                    </div>
                    <span className="text-right underline" onClick={() => router.push("/teacher/courses")}>
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20 mb-10">
                <CourseCard id={"1"} role="Teacher" imageUrl={"/sample.png"} courseName={"Sample Course"} route={router} />
            </div>
        </>
    );
}
