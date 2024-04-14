"use client"
import Module from "@/components/module";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TeacherCoursePage() {
    const router = useRouter()
    useEffect(() => {
        document.title = "Course | Learning Platform"
    }, [])
    return (
        <>
            <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} onClick={() => router.push("/teacher")} />
                </div>
                <span className="text-3xl text-white">
                    Course
                </span>
                <span>
                    <Image src="/icons/filter.svg" alt="Filter" width={40} height={40} />
                </span>
            </div>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/banner.jpeg" alt="Banner 1" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-20 mb-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-left text-4xl text-green-vogue-950 ">
                        Sample Course
                    </h1>
                    <Image src="/icons/bookmark.svg" alt="Enroll" width={50} height={50} />
                </div>
                <h2 className="text-left text-3xl text-green-vogue-950 ">
                    Course Description:
                </h2>
                <p className="text-left text-green-vogue-950 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt purus in nibh pretium gravida. Praesent tristique et magna sit amet commodo. Cras iaculis pharetra nunc. Nam vulputate placerat ex.
                </p>
                {/* <div className="text-left rounded-full border-2 border-black px-5 py-3">
                    <div className="flex justify-between items-center">
                        <span>Module 1 : What is Jetson Nano?</span>
                        <Image src="/icons/down.svg" alt="Drop" width={30} height={30} />
                    </div>
                </div>
                <div>
                    <p className="pl-10 py-2.5 w-full text-carrot-orange-500" onClick={() => router.push("/dashboard/course/1/1/1")}>Section 1 : Lecture Notes</p>
                    <p className="pl-10 py-2.5 w-full text-carrot-orange-500">Section 2 : Video</p>
                </div> */}
                <Module id={"1"} courseId={"1"} sections={[{ id: "1", name: "Section 1 : Lecture Notes" }, { id: "2", name: "Section 2 : Video" }]} route={router} moduleName={"Module 1 : What is Jetson Nano?"}  />
                <Module id={"2"} courseId={"1"} sections={[{ id: "1", name: "Section 1 : Lecture Notes" }, { id: "2", name: "Section 2 : Video" }]} route={router} moduleName={"Module 2 : What is Jetson Nano?"}  />
            </div>
        </>
    );
}
