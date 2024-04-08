import React from "react";
import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import {checklistItems} from "../constants";
const Flow = () => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate Your{" "}
        <span className="bg-gradient-to-b from-orange-800 to-orange-500 text-transparent bg-clip-text ">
          Coding Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((checkitem, index) => (
            <div key={index} className="flex mb-12">
             <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                 <CheckCircle2/>
             </div>
             <div className="">
               <h5 className="mt-1 mb-2 text-xl"> {checkitem.title}</h5>
               <p className="text-neutral-200">{checkitem.description}</p>
             </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;
