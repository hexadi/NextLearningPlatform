"use client"
import Image from "next/image";
import { Inder } from 'next/font/google'
import { useEffect } from "react";
import { GlacialIndifference } from "@/font"

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function SignUpPage() {
    useEffect(() => {
        document.title = "Sign-Up | Learning Platform"
    }, [])
    return (
        <div className="h-screen bg-seagull-300 flex flex-col items-center justify-center">
            <div className="fixed w-full">
                <Image src="/background/user.svg" alt="Background" width={681} height={681} priority className="fixed aspect-[1/1] none-drag" style={{ bottom: "-67px", width: "47.291666666667%" }} />
            </div>
            <nav className="fixed top-0 w-full z-50 mt-2.5">
                <div className="flex items-center">
                    <Image src="/icons/education.svg" alt="Learning Platform" width={85} height={85} priority className="ml-6 mr-1.5 none-drag" />
                    <div className="whitespace-nowrap">
                        <p className={"text-3xl font-bold " + GlacialIndifference.className}>
                            Learning
                        </p>
                        <p className={"text-3xl font-bold " + GlacialIndifference.className}>
                            Platform
                        </p>
                    </div>
                </div>
            </nav>
            <div className="grid grid-cols-2 gap-4 w-full z-10">
                <div></div>
                <div className="flex justify-center items-start">
                    <Image src="/icons/doubleBack.svg" alt="Back To Login" width={40} height={40} priority className="aspect-[1/1] none-drag mt-5 mr-3" />
                    <form className={"rounded-2xl bg-big-stone-950 p-5 " + inder.className} style={{ width: "15rem" }}>
                        <label className="block my-2 text-sm font-medium text-white">
                            Name
                        </label>
                        <input type="text" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Email
                        </label>
                        <input type="email" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Username
                        </label>
                        <input type="text" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Password
                        </label>
                        <input type="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Re-Type Password
                        </label>
                        <input type="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <button className={"text-carrot-orange-500 text-base w-full my-3 " + inder.className}>
                            Sign-Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
