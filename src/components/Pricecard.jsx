import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants/index";

const Pricecard = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap ">
        {pricingOptions.map((priceitem, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8  ">
                {priceitem.title}
                {priceitem.title ==="pro" && (
                  <span className="bg-gradient-to-tr from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                )}
              </p>
              <p className='text-4xl font-semibold'>{priceitem.price} <span className='text-[15px] text-neutral-500'>/Month</span> </p>
              <ul>
                {
                    priceitem.features.map((feature,index)=>(
                        <div key={index} className="mt-3">
                         <li className="py-2 flex items-center"><span className="pe-3"><CheckCircle2/></span> {feature}</li>
                        </div>
                        ))
                }
              </ul>
             <div className="flex justify-center mt-12">
             <a href="#" className="border rounded-full tracking-wide hover:bg-orange-700 border-orange-500 px-12 py-4 text-center">Subscribe</a>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricecard;
