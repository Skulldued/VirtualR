import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-15">
        <h1 className="text-4xl sm:text-6xl  lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-neutral-500 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aliquid
          tenetur sit excepturi nihil numquam officia? Nesciunt fugit ad
          repudiandae ullam optio fugiat unde eius vmporibus dolore blanditiis
          voluptas excepturi! Veritatis iure voluptate excepturi quas!
        </p>
        <div className="flex justify-center my-10">
          <a
            href=""
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-full"
          >
            Start For Free
          </a>
          <a href="" className="py-3 mx-3 border px-8 rounded-full bg-gradient-to-t from-blue-600 to-orange-300 ">Documentation</a>
        </div>
        <div className="flex justify-center mt-5">
              <video    muted className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4 ">
                <source src={video1} type="video/mp4"/>
               Your Browser Doesnot support Video Tag
               
              </video>
              <video    muted className="rounded-lg w-1/2 border border-orange-700 mx-2 my-4 ">
                <source src={video2} type="video/mp4"/>
               Your Browser Doesnot support Video Tag
               
              </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
