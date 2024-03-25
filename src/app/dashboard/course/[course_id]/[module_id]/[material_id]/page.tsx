"use client"
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function MaterialPage() {
    const router = useRouter()
    const param = useParams()
    useEffect(() => {
        document.title = "Material | Learning Platform"
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
            <div className="w-full mt-16 mb-10 px-20">
                <div className="flex justify-between items-center mb-2 ml-10">
                    <h1 className="text-left text-xl text-carrot-orange-500 ">
                        Introduction to Jetson Nano {"> " + (param.material_id == "1" ? "Section 1 : Lecture Note" : "Section 2 : Video")}
                    </h1>
                </div>
                <div className="w-full min-h-96 bg-gallery-100 p-10 rounded-3xl">
                    {param.material_id == "1" ?
                        <p className="text-green-vogue-950">
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            Phasellus vestibulum nisl nec placerat elementum.
                            Donec tempor ullamcorper ante, at elementum dui convallis ut.
                            Aliquam massa nibh, tincidunt sit amet maximus eget, convallis nec eros.
                            Nunc magna lorem, sagittis at feugiat vel, aliquam sit amet eros.
                            Integer faucibus, dui a porta vulputate, nisl sapien sodales velit, quis vehicula nunc leo quis odio.
                            Nulla vel tortor accumsan, maximus ex non, laoreet elit.
                            Donec lorem elit, pulvinar nec pharetra ut, euismod et ante.
                            Morbi elementum tortor sed blandit mattis.
                            Phasellus accumsan ex viverra maximus tincidunt.
                        </p> :
                        <iframe
                            width="560" height="315"
                            src="https://www.youtube.com/embed/A2qyCVGb_Js?&autoplay=1"
                            className="w-full h-full aspect-video"
                            title="Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div></div>
                    <div className="flex items-center" onClick={() => router.push("/dashboard/course/1/1/2")}>
                        <span className="text-carrot-orange-500 mr-1 underline">
                            Next
                        </span>
                        <Image src="/icons/right_arrow.svg" alt="Next" width={20} height={20} />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center" onClick={() => router.push("/dashboard/course/1/1/1")}>
                        <Image src="/icons/left_arrow.svg" alt="Previous" width={20} height={20} />
                        <span className="text-carrot-orange-500 ml-1 underline">
                            Previous
                        </span>
                    </div>
                    <div className="flex items-center" onClick={() => router.push("/dashboard/course/1/1/Quiz")}>
                        <span className="text-calypso-700 mr-1 underline">
                            Quiz
                        </span>
                        <Image src="/icons/calypso_right_arrow.svg" alt="Next" width={20} height={20} />
                    </div>
                </div>
            </div>
        </>
    );
}
