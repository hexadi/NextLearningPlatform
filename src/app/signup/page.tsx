"use client"
import Image from "next/image";
import { Inder } from 'next/font/google'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GlacialIndifference } from "@/font"
import Alert from "@/components/alert";

const inder = Inder({
    subsets: ['latin'],
    weight: "400"
})

export default function SignUpPage() {
    const router = useRouter()
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        varients: "success"
      })
    
      const handleShowAlert = (message: string, varients: string) => {
        setAlert({
          show: true,
          message: message,
          varients: varients
        })
      }
    
      const handleHideAlert = () => {
        setAlert({
          ...alert,
          show: false
        })
      }
    
      async function time(delay: number, func: any) {
        await new Promise(resolve => setTimeout(resolve, delay))
        return await func()
      }
      const handleSignUp = (event: any) => {
        console.log(event)
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        var result: any = {}
        data.forEach(function (value, key) {
          result[key] = value
        })
        if (result.password == result.repassword) {
          handleShowAlert("Sign-Up Successful", "success")
          time(1500, () => {
            router.push("/")
          })
        } else {
          handleShowAlert("Sign-Up Failed", "danger")
          time(3000, () => {
            handleHideAlert()
          })
        }
      }

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
                    <Image src="/icons/doubleBack.svg" alt="Back To Login" width={40} height={40} priority className="aspect-[1/1] none-drag mt-5 mr-3" onClick={() => router.push("/")} />
                    <form onSubmit={handleSignUp} className={"rounded-2xl bg-big-stone-950 p-5 " + inder.className} style={{ width: "15rem" }}>
                        <label className="block my-2 text-sm font-medium text-white">
                            Name
                        </label>
                        <input type="text" name="name" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Email
                        </label>
                        <input type="email" name="email" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Username
                        </label>
                        <input type="text" name="username" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Password
                        </label>
                        <input type="password" name="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <label className="block my-2 text-sm font-medium text-white">
                            Re-Type Password
                        </label>
                        <input type="password" name="repassword" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
                        <button type="submit" className={"text-carrot-orange-500 text-base w-full my-3 " + inder.className}>
                            Sign-Up
                        </button>
                    </form>
                </div>
            </div>
            <Alert varients={alert.varients} message={alert.message} show={alert.show} className="fixed bottom-2 right-2" />
        </div>
    );
}
