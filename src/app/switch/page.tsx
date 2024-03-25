"use client"
import Image from "next/image";
import { Inder } from 'next/font/google'
import { useRouter } from "next/navigation";

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function SwitchPage() {
    const router = useRouter();
    return <div className={"h-screen bg-dawn-pink flex flex-col items-center justify-center select-none " + inder.className}>
            <div className="fixed top-4 right-4 flex items-center rounded-2xl bg-sundown-300 hover:bg-sundown-400">
                <Image src="/icons/logout.svg" alt="Logout" width={16} height={16} priority className="ml-4 mr-2 none-drag" />
                <span className="pr-4 py-1">Logout</span>
            </div>
            <p className="text-7xl font-bold mb-20">Switch</p>
            <div className="flex">
                {true &&
                    <div className="rounded-lg bg-sundown-300 hover:bg-sundown-400 p-4 flex flex-col justify-center items-center mx-10" onClick={() => router.push("/dashboard")}>
                        <Image src="/icons/profile.svg" alt="Student" width={100} height={100} />
                        <p className="text-2xl font-bold mt-5 ">Switch To Student</p>
                    </div>}
                {true &&
                    <div className="rounded-lg bg-sundown-300 hover:bg-sundown-400 p-4 flex flex-col justify-center items-center mx-10" onClick={() => router.push("/teacher")}>
                        <Image src="/icons/education.svg" alt="Teacher" width={100} height={100} />
                        <p className="text-2xl font-bold mt-5">Switch To Teacher</p>
                    </div>}
                {true &&
                    <div className="rounded-lg bg-sundown-300 hover:bg-sundown-400 py-4 px-6 flex flex-col justify-center items-center mx-10" onClick={() => router.push("/admin")}>
                        <Image src="/icons/coding.svg" alt="Admin" width={100} height={100} />
                        <p className="text-2xl font-bold mt-5">Switch To Admin</p>
                    </div>}
            </div>
        </div>
}