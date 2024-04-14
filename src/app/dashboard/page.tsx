"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "@/components/courseCard";

export default function DashboardPage() {
    const router = useRouter()
    const [data, setData] = useState({
        courses: [],
        loading: true
    })
    useEffect(() => {
        document.title = "Dashboard | Learning Platform"
        fetch("/api/courses", { method: "GET" })
            .then((res) => res.json())
            .then((res) => {
                setData({...data, courses: res, loading: false })
            })
    }, [])
    return (
        <div className={data.loading ? "blur-sm" : ""}>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/banner.jpeg" alt="Banner 1" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-left text-3xl text-carrot-orange-600 ">
                        Recommend for you
                    </span>
                    <span className="text-right underline" onClick={() => router.push("/dashboard/courses")}>
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20">
                {data.courses.map((card: { _id: string, name: string, image: string }) => <Card key={card._id} id={card._id} imageUrl={card.image || "/sample.png"} courseName={card.name} route={router} role="Student" />)}
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-left text-3xl text-carrot-orange-600">
                        My Course
                    </span>
                    <span className="text-right underline" onClick={() => router.push("/dashboard/courses/my")}>
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20 mb-10">
                <Card id={"1"} imageUrl={"/sample.png"} courseName={"Sample Course"} route={router} role="Student" />
            </div>
        </div>
    );
}
