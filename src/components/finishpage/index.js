import React from "react";
import FinishedHeader from "../header/finishedheader";

export default function Finished() {
  return (
    <section>
        <FinishedHeader/>
      <div className="w-full h-screen flex justify-center items-center gap-8 flex-col md:flex-row">
      <div className=""><img className="w-32 h-32" src="/image/yes.png" alt=""></img></div>
      <div className=" flex flex-col gap-4 ">
        <p className="capitalize font-semibold text-xl text-center md:text-left ">you Finished your exam</p>
        <p className="capitalize font-thin text-sm text-center md:text-left ">your admin will release your results shortly, all the best</p>
      </div>
      </div>
    </section>
  );
}
