"use client";
import { useState } from "react";

function ChoosePlans() {

  const [monthly, setMonthly] = useState(true);
  const [yearly, setyearly] = useState(false);

  const handleMonthly = () => {
    setMonthly(true);
    setyearly(false);
  };

  const handleYearly = () => {
    setyearly(true);
    setMonthly(false);
  };

  return (
    <div className="font-lora">
      <div className="sm:flex space-y-4 md:gap-y-0 items-center justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase text-white">
            choose you plan
          </h3>
        </div>
        <div className=" py-1 md:px-4 space-x-2 md:space-x-4 rounded-full flex">
          <button
            onClick={handleMonthly}
            className={`${
              monthly ? "bg-white text-black" : "bg-black text-white"
            }  py-2 px-6 rounded-full  font-bold uppercase text-sm duration-500 ease-in-out`}
          >
            monthly
          </button>
          <button
            onClick={handleYearly}
            className={`${
              !yearly ? "bg-black text-white" : "bg-white text-black"
            } bg-black py-2 px-6 rounded-full uppercase font-bold duration-500 ease-in-out text-sm`}
          >
            yearly
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlans;
