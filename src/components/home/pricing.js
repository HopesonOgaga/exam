import React from "react";
export default function TabSwitcing (){
    return <section className="mt-6 flex-col flex gap-4 ">
        <p className="text-center uppercase font-bold text-lg w-full ">pricing</p>
        <div className="flex justify-center gap-6 w-full h-full ">
            <div className="w-[25vw] h-[30vh] bg-green-400 shadow-md  flex justify-center items-center flex-col gap-4">
                <p className="text-xl font-extrabold capitalize ">$2.50</p>
                <p className="text-lg capitalize ">school/college</p>
            </div>
            <div className="w-[25vw] h-[30vh] bg-pink-200 shadow-md  flex justify-center items-center flex-col gap-4">
            <p className="text-xl font-extrabold capitalize ">$2.50</p>
            <p className="text-lg capitalize ">organisation</p>
            </div>
        </div>
    </section>
}