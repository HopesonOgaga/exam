import React from "react";
import TabSwitcing from "./pricing";
import FinishedHeader from "../header/finishedheader";
export default function Home() {
  return (
    <section className="">
        <FinishedHeader/>
      <div className="w-screen h-full flex ">
        <div className="bg-green-500 w-[65vw] h-[60vh]">
          <p className=" font-bold text-8xl  flex justify-center items-center h-full w-full uppercase ">
            proctor
          </p>
        </div>
        <div className="bg-black w-[35vw]">
          <p className="text-green-400 font-bold text-8xl uppercase  flex justify-center items-center h-full">
            {" "}
            x
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center items-center mt-8  w-full gap-4 ">
        <p className=" text-gray-400 uppercase text-xl ">
          examine your candidate online with 100% behaviour and no mal-practice{" "}
        </p>
        <button className="rounded-lg bg-black text-white font-semibold hover:scale-100 hover:text-gray-400 capitalize w-32 h-12">
          sign up
        </button>
      </div>
      {/* card */}
      <div className="flex justify-center w-full h-full mt-6">
        <div className="flex justify-center flex-col items-center border-2 border-solid shadow-sm w-[40vw] h-[40vh] gap-3">
          <p className="font-semibold text-xl capitalize ">
            why choose proctor x ?
          </p>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-400 ">1. Best online exam interface</p>
            <p className="text-gray-400 ">2. FulL test proctored</p>
            <p className="text-gray-400 ">3. Behaviour of candidate recorded</p>
            <p className="text-gray-400 ">4. Copy and paste disable</p>
            <p className="text-gray-400 ">5. Tab switching disable</p>
          </div>
        </div>
      </div>
      <div>
        <TabSwitcing />
      </div>
    </section>
  );
}
