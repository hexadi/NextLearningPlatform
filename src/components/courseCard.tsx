"use client"
import Image from 'next/image'
import { Inder } from 'next/font/google'

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function Card(props: { id: string, courseName: string, imageUrl: string, role: string, route: any }) {
    const router = props.route
    return (
        <div className="relative rounded-lg overflow-hidden aspect-square text-white hover:text-carrot-orange-600" onClick={() => router != null && router.push(`/${props.role == "Teacher" ? "teacher" : props.role == "Student" ? "dashboard": "admin"}/course/${props.id}`)}>
            <Image src={props.imageUrl} alt={props.courseName} width={1000} height={1000} className="w-full h-full object-cover absolute top-0 left-0 z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-big-stone-950 bg-opacity-50 z-10"></div>
            <div className={"relative p-4 text-2xl z-20 " + inder.className}>
                {props.courseName}
            </div>
        </div>
    )
}