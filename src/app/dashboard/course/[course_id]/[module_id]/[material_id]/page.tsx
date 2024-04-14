"use client"
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MaterialPage() {
    const router = useRouter()
    const params = useParams()
    const [data, setData]: [any, any] = useState({})
    useEffect(() => {
        document.title = "Material | Learning Platform"
        fetch("/api/course/" + params.course_id + "/" + params.material_id, { method: "GET" })
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
            <div className="w-full mt-16 mb-10 px-20">
                <div className="flex justify-between items-center mb-2 ml-10">
                    <h1 className="text-left text-xl text-carrot-orange-500 ">
                        {data.courseName} {">"} {data.name}
                    </h1>
                </div>
                <div className="w-full min-h-96 bg-gallery-100 p-10 rounded-3xl">
                    {data.type != undefined && (data.type == 1 ?
                        <div dangerouslySetInnerHTML={{ __html: data.body }} className="text-green-vogue-950 overflow-hidden text-pretty" /> :
                        <iframe
                            width="560" height="315"
                            src={"https://www.youtube.com/embed/" + data.video + "?&autoplay=1"}
                            className="w-full h-full aspect-video"
                            title="Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />)}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div></div>
                    {data.next != null && <div className="flex items-center" onClick={() => router.push(`/dashboard/course/${params.course_id}/${params.module_id}/${data.next}`)}>
                        <span className="text-carrot-orange-500 mr-1 underline">
                            Next
                        </span>
                        <Image src="/icons/right_arrow.svg" alt="Next" width={20} height={20} />
                    </div>}
                </div>
                <div className="flex justify-between items-center mt-2">
                    {data.previous != null && <div className="flex items-center" onClick={() => router.push(`/dashboard/course/${params.course_id}/${params.module_id}/${data.previous}`)}>
                        <Image src="/icons/left_arrow.svg" alt="Previous" width={20} height={20} />
                        <span className="text-carrot-orange-500 ml-1 underline">
                            Previous
                        </span>
                    </div>}
                    <div className="flex items-center" onClick={() => router.push(`/dashboard/course/${params.course_id}/${params.module_id}/Quiz`)}>
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
