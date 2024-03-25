"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TeacherCoursePage() {
    const router = useRouter()
    useEffect(() => {
        document.title = "Course | Learning Platform"
    }, [])
    return (
        <>
            <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
                <div>
                    <Image src="/icons/back.svg" alt="Back" width={22} height={40} onClick={() => router.push("/teacher")} />
                </div>
                <span className="text-3xl text-white">
                    Course
                </span>
                <span>
                    <Image src="/icons/filter.svg" alt="Filter" width={40} height={40} />
                </span>
            </div>
            <div className="h-37.5 w-full " style={{ height: "37.5vh" }}>
                <Image src="/banner.jpeg" alt="Banner 1" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="w-full mt-10 px-20">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-left text-4xl text-green-vogue-950 ">
                        Sample Course
                    </h1>
                </div>
                <div className="table w-full border rounded-md">
                    <div className="table-header-group">
                        <div className="table-row">
                            <div className="table-cell text-center border-r border-b">ลำดับ</div>
                            <div className="table-cell text-center border-r border-b">ชื่อ</div>
                            <div className="table-cell text-center border-r border-b">Username</div>
                            <div className="table-cell text-center border-b">ความคืบหน้า (%)</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell border-b border-r">1</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">50%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">2</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">25%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">3</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">75%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">4</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">100%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">5</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">50%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">6</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b ">25%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">7</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b ">75%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">8</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b">100%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-b border-r">9</div>
                            <div className="table-cell border-b border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-b border-r">myusername</div>
                            <div className="table-cell border-b ">0%</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell border-r">10</div>
                            <div className="table-cell border-r">นายสิทธิศักดิ์ สุขสวัสดิ์</div>
                            <div className="table-cell border-r">myusername</div>
                            <div className="table-cell">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
