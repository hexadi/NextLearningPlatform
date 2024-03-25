"use client"
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function QuizPage() {
    const router = useRouter()
    const param = useParams()
    useEffect(() => {
        document.title = "Quiz | Learning Platform"
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
            <div className="w-full pt-16 pb-10 px-20 bg-blue-zodiac-950">
                <div className="flex justify-between items-center mb-2 ml-10">
                    <h1 className="text-left text-xl text-carrot-orange-500 ">
                        Introduction to Jetson Nano {">"} Quiz
                    </h1>
                </div>
                <div className="w-full bg-gallery-100 p-10 mb-2 rounded-3xl">
                    <p className="text-blue-zodiac-950 text-xl">
                        Q 1 : What is Python commonly used for?
                    </p>
                    <div className="ml-12 mt-2">
                        <input type="radio" name="q1" value="HTML" />
                        <label htmlFor="html">
                            HTML
                        </label>
                    </div>
                    <div className="ml-12">
                        <input type="radio" name="q1" value="CSS" />
                        <label htmlFor="css">
                            CSS
                        </label>
                    </div>
                    <div className="ml-12">
                        <input type="radio" name="q1" value="JavaScript" />
                        <label htmlFor="javascript">
                            JavaScript
                        </label>
                    </div>
                </div>
                <div className="w-full bg-gallery-100 p-10 mb-2 rounded-3xl">
                    <p className="text-blue-zodiac-950 text-xl">
                        Q 2 : What is Python commonly used for?
                    </p>
                    <div className="mx-12 mt-2">
                        <textarea rows={3} className="w-full resize-none" name="q2" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center" onClick={() => router.push("/dashboard/course/1/1/2")}>
                        <Image src="/icons/left_arrow.svg" alt="Previous" width={20} height={20} />
                        <span className="text-carrot-orange-500 ml-1 underline">
                            Previous
                        </span>
                    </div>
                    <div className="flex items-center" onClick={() => router.push("/dashboard/course/1")}>
                        <span className="text-apple-500 mr-1 underline">
                            Finish
                        </span>
                        <Image src="/icons/apple_right_arrow.svg" alt="Next" width={20} height={20} />
                    </div>
                </div>
            </div>
        </>
    );
}
