"use client"
import Image from 'next/image'
import { Inder } from 'next/font/google'

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function Card(props: { id: string, name: string, imageUrl: string, route: any }) {
    const router = props.route
    return (
        <div className="relative rounded-lg overflow-hidden aspect-square bg-big-stone-950 text-white hover:text-carrot-orange-600" onClick={() => router != null && router.push(`/teacher/student/${props.id}`)}>
            <div className={"flex flex-col w-full h-full justify-center items-center p-4 text-2xl z-20 " + inder.className}>
                <Image src={"/icons/profile_white.svg"} alt="User Icon" width={30} height={30} className="w-1/2 aspect-square"/>
                <span>{props.name}</span>
            </div>
        </div>
    )
}