"use client"
import Image from "next/image";
import { Inder } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GlacialIndifference } from "@/font"

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const [state, setState] = useState({
        dropdown: false,
        switchShow: false
    })
    const handleDropdown = () => {
        setState({
            ...state,
            dropdown: !state.dropdown
        })
    }

    const handleShowSwitch = () => {
        setState({
            ...state,
            switchShow: true
        })
    }

    return (
        <div className={"flex flex-col items-center " + inder.className}>
            <header className="w-full py-2.5 bg-dawn-pink-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/icons/education.svg" alt="Background" width={85} height={85} priority className="ml-6 mr-1.5 none-drag" />
                        <div className="whitespace-nowrap">
                            <p className={"text-3xl font-bold " + GlacialIndifference.className}>
                                Learning
                            </p>
                            <p className={"text-3xl font-bold " + GlacialIndifference.className}>
                                Platform
                            </p>
                        </div>
                    </div>
                    {/* if user session is not null. */ true &&
                        <div className="flex items-center mr-6">
                            <p>
                                {/* if the given name is not null. */ null || "Name"}
                            </p>
                            <Image src={/* if the picture is not blank */ null || "/icons/profile.svg"} alt="User" width={40} height={40} priority className="ml-4 none-drag rounded-full object-cover" style={{ width: "40px", height: "40px" }} onClick={handleDropdown} />
                        </div>
                    }
                </div>
                {state.dropdown &&
                    <div className={"absolute right-6 bg-white rounded-lg py-1 top-20 divide-y divide-slate"}>
                        <div className="flex items-center" onClick={() => router.push("/dashboard/profile")}>
                            <Image src="/icons/profile.svg" alt="Profile" width={16} height={16} priority className="ml-4 mr-2 none-drag" />
                            <span className="pr-4 py-1">
                                Profile
                            </span>
                        </div>
                        <div className="flex items-center" onClick={() => router.push("/dashboard/playground")}>
                            <Image src="/icons/coding.svg" alt="Playground" width={16} height={16} priority className="ml-4 mr-2 none-drag" />
                            <span className="pr-4 py-1">
                                Playground
                            </span>
                        </div>
                        {state.switchShow &&
                            <div className="flex items-center" onClick={() => router.push("/switch")}>
                                <Image src="/icons/switch.svg" alt="Switch" width={16} height={16} priority className="ml-4 mr-2 none-drag" />
                                <span className="pr-4 py-1">
                                    Switch
                                </span>
                            </div>
                        }
                        <div className="flex items-center" onClick={() => router.push("/")}>
                            <Image src="/icons/logout.svg" alt="Logout" width={16} height={16} priority className="ml-4 mr-2 none-drag" />
                            <span className="pr-4 py-1">
                                Logout
                            </span>
                        </div>
                    </div>
                }
            </header>
            {children}
            <footer className="w-full py-10 bg-big-stone-950 text-white text-center">
                <p>
                    Copyright @ 2024
                </p>
            </footer>
        </div>
    );
}
