"use client"

export default function Alert(props: { varients: string, message: string, show: boolean, className: string }) {
    var varientClass = {
        "success": {
            heading: "Success",
            mainBg: "bg-green-500",
            border: "border-green-400",
            secondaryBg: "bg-green-100",
            mainText: "text-white",
            secondaryText: "text-green-700"
        },
        "danger": {
            heading: "Error",
            mainBg: "bg-red-500",
            border: "border-red-400",
            secondaryBg: "bg-red-100",
            mainText: "text-white",
            secondaryText: "text-red-700"
        }
    }
    var varient = varientClass[props.varients as keyof typeof varientClass]
    return props.show == true &&
        (<div role="alert" className={props.className}>
            <div className={varient.mainBg + " " + varient.mainText + " font-bold rounded-t px-4 py-2"}>
                {varient.heading}
            </div>
            <div className={"border border-t-0 " + varient.border + " rounded-b " + varient.secondaryBg + " " + varient.secondaryText + " px-4 py-3"}>
                <p>
                    {props.message}
                </p>
            </div>
        </div>)
}