"use client"
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";
import Module from "@/components/module";

export default function CoursePage() {
    const params = useParams();
    const router = useRouter()
    const [data, setData]: [{ name: string | undefined, description: string | undefined, isEnrolled: boolean | undefined, module: any[] }, any] = useState({ name: undefined, description: undefined, isEnrolled: undefined, module: [] });

    function enrollCourse() {
        fetch("/api/course/" + params.course_id + "/enroll", { method: "POST" })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData({ ...data, 'isEnrolled': true })
            })
    }

    useEffect(() => {
        document.title = "Course | Learning Platform"
        fetch("/api/course/" + params.course_id, { method: "GET" })
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
    }, [])
    return (
        <>
            <div className="absolute justify-between top-24 w-full py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} onClick={() => router.push("/dashboard")} />
                </div>
                <span></span>
                <span></span>
            </div>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/sample.png" alt="Banner 1" width={600} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-20 mb-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-left text-4xl text-green-vogue-950 ">
                        {data.name}
                    </h1>
                    {data.isEnrolled ? <Image src="/icons/green_bookmark.svg" alt="Enrolled" width={50} height={50} /> : <Image src="/icons/bookmark.svg" onClick={() => { enrollCourse() }} alt="Enroll" width={50} height={50} />}
                </div>
                <h2 className="text-left text-3xl text-green-vogue-950 ">
                    Course Description:
                </h2>
                <p className="text-left text-green-vogue-950 mb-10">
                    {data.description}
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
                {data.module.length != 0 && data.module.map((module: { _id: string; courseId: string; materials: any[]; name: string; }) => <Module 
                key={module._id}
                id={module._id} 
                courseId={module.courseId} 
                sections={module.material} 
                route={router} 
                moduleName={module.name} />)
            }
            </div>
        </>
    );
}
