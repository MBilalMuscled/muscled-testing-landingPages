import React from "react";
import Button from "../Fawwaz/Button";

import { ArrowRightIcon } from "@heroicons/react/outline";

const OverBuild = () => {
  return (
    <div className="bg-[#673704] h-[396px] flex py-16 px-9 justify-between">
      <div className="flex flex-col justify-between">
        <h4 className="text-[35px] text-white w-[345px] leading-[45.5px]">
          We don’t want to tell you about the work we do, we want to SHOW you.
        </h4>
        <Button textColor="text-black" bgColor="bg-white" className="w-[70%]">
          <p className="font-semibold">View Our Portfolio</p> <ArrowRightIcon className="h-6" />
        </Button>
      </div>

      <div className="flex flex-col justify-between ml-4 text-center h-[257px]">
        <h4 className="text-white uppercase font-bold text-[30px]">We’ve over biuld</h4>
        <div className="flex">
          {["1", "5", "0", "0"].map((item: string, idx: number) => (
            <div
              key={idx}
              className="bg-white w-[65px] h-[90px] flex justify-center items-center mx-1 text-5xl font-extrabold"
            >
              {item}
            </div>
          ))}
        </div>
        <h4 className="text-white font-bold text-[30px]">WEBSITES</h4>
        <p className="text-white uppercase text-[20px] font-semibold">in a variety of industries.</p>
      </div>
    </div>
  );
};

export default OverBuild;
