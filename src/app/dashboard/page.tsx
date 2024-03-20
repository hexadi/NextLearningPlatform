import type { Metadata } from "next";
import Image from "next/image";
import { Inder } from 'next/font/google'
import { GlacialIndifference } from "@/font"
import Card from "@/components/card";

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export const metadata: Metadata = {
    title: "Dashboard | Learning Platform",
    description: "Track your progress, access courses, and stay motivated on your learning dashboard.",
};

export default function DashboardPage() {
    return (
        <>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/banner.jpeg" alt="Banner 1" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-left text-3xl text-carrot-orange-600 ">
                        Recommend for you
                    </span>
                    <span className="text-right underline">
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20">
                <Card id={"1"} imageUrl={"/sample.png"} courseName={"Sample Course"} route={null} />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-left text-3xl text-carrot-orange-600">
                        My Course
                    </span>
                    <span className="text-right underline">
                        See more
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-10 w-full z-10 px-20 mb-10">
                <Card id={"1"} imageUrl={"/sample.png"} courseName={"Sample Course"} route={null} />
            </div>
        </>
    );
}
