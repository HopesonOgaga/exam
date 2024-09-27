import React from "react";

export default function FinishedHeader() {
  return (
    <section className="flex justify-between py-4 shadow-sm pl-4 pr-4">
      <div>
        <p className="font-bold uppercase text-2xl ">proto <span className="text-green-400">x</span> </p>
      </div>
      <div className="flex gap-6 ">
        <img className="w-12 h-10 hidden md:block" src="/image/right-arrow.png" alt=""></img>
        <button className="hover:shadow-lg hover:border-gray-500 hover:scale-100  border-2 rounded-md shadow-sm border-black w-32 h-10 uppercase font-semibold text-lg">
          home
        </button>
      </div>
    </section>
  );
}
