"use client"
// import type { Metadata } from "next";
import Image from "next/image";
import Editor from "@monaco-editor/react";

// export const metadata: Metadata = {
//     title: "Profile | Learning Platform",
//     description: "Personalize your learning experience and keep your profile up-to-date.",
// };

export default function ProfilePage() {
    return (<div className={"min-h-screen w-full"}>
        <div className="flex justify-between w-full bg-big-stone-950 py-5 px-5 items-center">
            <div>
                <Image src="/icons/back.svg" alt="Back" width={22} height={40} />
            </div>
            <span className="text-3xl text-white">Playground</span>
            <span>
                <Image src="/icons/filter.svg" alt="Filter" width={40} height={40} />
            </span>
        </div>
        <div className="flex justify-end w-2/3 py-5 px-5 items-center">
            <div className="flex">
                <span className="pr-1 text-lg text-red-600">RESET</span>
                <Image src="/icons/reset.svg" alt="Reset" width={28} height={28} />
            </div>
            <div className="flex pl-2">
                <span className="pr-2 text-lg text-apple-500">RUN</span>
                <Image src="/icons/run.svg" alt="Run" width={28} height={28} />
            </div>
        </div>
        <div className="flex">
            <div className="w-2/3">
                <div className="mx-2">
                    <Editor
                        width="100%"
                        height="50vh"
                        language="python"
                        theme="vs-dark"
                        options={{
                            inlineSuggest: true,
                            fontSize: 16,
                            formatOnType: true,
                            autoClosingBrackets: true
                        }}
                    />
                </div>
                <div className="flex">
                    <div className={"bg-dawn-pink-100 rounded-lg w-1/2 mx-2 mt-1"}>
                        <div className="bg-outrageous-orange-400 text-white p-2 rounded-lg">
                            <div className="flex justify-between">
                                <span>Upload</span>
                                <Image src="/icons/upload.svg" alt="Upload" width={28} height={28} />
                                <input type="file" id="file" className="hidden" />
                            </div>
                        </div>
                        <div className="p-2 text-outrageous-orange-400 min-h-32">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <Image src="/icons/file_code.svg" alt="Upload" width={20} height={20} />
                                    <span className="pl-2">upload.css</span>
                                </div>
                                <Image src="/icons/x.svg" alt="Remove" width={14} height={14} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-dawn-pink-100 rounded-lg w-1/2 mx-2 mt-1">
                        <div className="bg-calypso-700 text-white p-2 rounded-lg">
                            <div className="flex justify-between">
                                <span>Download</span>
                                <Image src="/icons/download.svg" alt="Download" width={28} height={28} />
                            </div>
                        </div>
                        <div className="p-2 text-calypso-700 min-h-32">
                            <div className="flex">
                                <Image src="/icons/file_pdf.svg" alt="Download" width={20} height={20} />
                                <span className="pl-2">Download.pdf</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
                <div className="bg-dawn-pink-100 rounded-lg mx-2 mt-1 h-full">
                    <div className="bg-carrot-orange-500 text-white p-2 rounded-lg">
                        <span>Result</span>
                    </div>
                    <div className="p-2 text-carrot-orange-500">
                        {/* if error message is not blank */ "" != "" ? <span className="text-red-600 whitespace-pre-line break-all">Error</span> : <span className="whitespace-pre-line break-all">Output</span>}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}