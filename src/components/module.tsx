"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Module(props: { id: string | undefined, courseId: string, moduleName: string, sections: Array<any>, route: any }) {
    const router = props.route
    const [show, setShow] = useState(false)
    return (<>
        <div className="text-left rounded-full border-2 border-black px-5 py-3 mb-1">
            <div className="flex justify-between items-center" onClick={() => setShow(!show)}>
                <span>{props.moduleName}</span>
                <Image src={show ? "/icons/up.svg" : "/icons/down.svg"} alt="Click to Show/Hide Module" width={30} height={30} />
            </div>
        </div>
        {show &&
            <div>
                {props.sections.map(
                    (section) => <p
                        key={section.id}
                        className="pl-10 py-2.5 w-full text-carrot-orange-500"
                        onClick={() => router.push("/dashboard/course/" + props.courseId + "/" + props.id + "/" + section._id)}>
                        {section.name}
                    </p>
                )}
            </div>
        }
    </>)
}