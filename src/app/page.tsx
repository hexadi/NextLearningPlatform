"use client"
import Image from "next/image";
import { Inder } from 'next/font/google'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GlacialIndifference } from "@/font"
import Alert from "@/components/alert";
import { useSession, signIn } from "next-auth/react";

const inder = Inder({
  subsets: ['latin'],
  weight: "400"
})

export default function LoginPage() {
  const router = useRouter()
  const { data: session } = useSession()
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
  const handleLogin = (event: any) => {
    console.log(event)
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    var result: any = {}
    data.forEach(function (value, key) {
      result[key] = value
    })
    if (result.username == "example" && result.password == "example") {
      handleShowAlert("Login Successful", "success")
      time(1500, () => {
        router.push("/dashboard")
      })
    } else {
      handleShowAlert("Login Failed", "danger")
      time(3000, () => {
        handleHideAlert()
      })
    }
  }

  useEffect(() => {
    document.title = "Login | Learning Platform"
    if (session !== undefined) {
      console.log(session)
    }
    fetch("/api/test", { method: "GET" })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }, [session])
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
            <button className="rounded-md bg-white w-full p-1 border-gray-300 text-xs hover:ring-sundown-300 hover:border-sundown-300 border-2" onClick={() => signIn("google")}>
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
            <form onSubmit={handleLogin}>
              <label className="block my-2 text-base font-medium text-white dark:text-white">
                Username
              </label>
              <input type="text" name="username" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
              <label className="block my-2 text-base font-medium text-white dark:text-white">
                Password
              </label>
              <input type="password" name="password" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sundown-300 focus:border-sundown-300 border-2" required />
              <button type="submit" className="text-carrot-orange-500 text-base w-full my-3">
                Login
              </button>
            </form>
            <button className="text-white w-full text-xs underline decoration-solid" onClick={() => { router.push("/signup") }}>
              Sign-Up
            </button>
          </div>
        </div>
      </div>
      <Alert varients={alert.varients} message={alert.message} show={alert.show} className="fixed bottom-2 right-2" />
    </div>
  );
}
