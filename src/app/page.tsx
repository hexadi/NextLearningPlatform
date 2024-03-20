"use client"
import Image from "next/image";
import { Inder } from 'next/font/google'
import { useEffect } from "react";
import { GlacialIndifference } from "@/font"
import Alert from "@/components/alert";

const inder = Inder({
  subsets: ['latin'],
  weight: "400"
})

export default function LoginPage() {
  useEffect(() => {
    document.title = "Login | Learning Platform"
  }, [])
  return (
    <div className="h-screen bg-dawn-pink-100 flex flex-col items-center justify-center">
      <div className="fixed w-full">
        <Image src="/background/book.svg" alt="Background" width={681} height={681} priority className="fixed aspect-[1/1] none-drag" style={{ bottom: "-67px", width: "47.291666666667%" }} />
      </div>
      <nav className="fixed top-0 w-full z-50 mt-2.5">
        <div className={"flex items-center text-black " + GlacialIndifference.className}>
          <Image src="/icons/education.svg" alt="Learning Platform" width={85} height={85} priority className="ml-6 mr-1.5 none-drag" />
          <div className="whitespace-nowrap">
            <p className="text-3xl font-bold">
              Learning
            </p>
            <p className="text-3xl font-bold">
              Platform
            </p>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-2 gap-4 w-full z-10">
        <div></div>
        <div className="flex justify-center">
          <div className={"rounded-2xl bg-big-stone-950 p-5 " + inder.className} style={{ width: "15rem" }}>
            <button className="rounded-md bg-white w-full p-1 border-gray-300 text-xs hover:ring-sundown-300 hover:border-sundown-300 border-2">
              <div className="inline-flex items-center">
                <Image src="/icons/google.svg" alt="Google" width={30} height={30} priority className="mr-1" />
                <span className="text-base text-black">
                  Sign in with Google
                </span>
              </div>
            </button>
            <span className="block my-2 text-sm font-medium text-center text-white">
              or
            </span>
            <form>
              <label className="block my-2 text-base font-medium text-white dark:text-white">
                Username
              </label>
              <input type="text" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
              <label className="block my-2 text-base font-medium text-white dark:text-white">
                Password
              </label>
              <input type="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
              <button type="submit" className="text-carrot-orange-500 text-base w-full my-3">
                Login
              </button>
            </form>
            <button className="text-white w-full text-xs underline decoration-solid">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
      <Alert varients={"success"} message={"Login Successfully"} show={true} className="fixed bottom-2 right-2" />
    </div>
  );
}
