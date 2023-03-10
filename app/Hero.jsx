"use client";

import Image from "next/image";
// import profileImg from ".//../public/profile.png";
import { monaSans } from "./layout";

const Hero = () => {
  return (
    <section className="bg-[url('.//../public/hero.jpg')] bg-cover w-full relative flex items-stretch z-10 justify-center py-0 mt-[-6rem] h-[100vh] md:h-[100vh]  bg-center">
      <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-[#0E1016] mix-blend-color "></div>

      <div className=" lg:w-[90%] lg:max-w-[1440px] flex justify-end  absolute top-40">
        <ul className="flex gap-6 md:gap-8 lg:gap-10">
          <li className="text-white text-[16px] md:text-[20px] font-normal">
            GH
          </li>
          <li className="text-white text-[16px] md:text-[20px] font-normal">
            LN
          </li>
          <li className="text-white text-[16px] md:text-[20px] font-normal">
            TW
          </li>
          <li className="text-white text-[16px] md:text-[20px] font-normal">
            IG
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center  lg:py-40 lg:my-40  z-20">
        <div
          className={`flex flex-col items-center justify-center relative ${monaSans.className}   `}
        >
          <h1 className="text-[96px] md:text-[155.5px] lg:text-[215px] font-extrabold text-[#e4ded7] max-w-[500px] md:max-w-[900px] text-center  leading-[0.8em] ">
            VICTOR WILLIAMS
          </h1>
          <Image
            src="/../public/profile.png"
            alt="Picture of the author"
            width={600}
            height={600}
            data-blobity-tooltip="Fine boy"
            data-blobity-invert="false"
            className="md:rounded-[32px] rounded-[16px] w-[150px] md:w-[200px] lg:w-[245px] absolute bottom-[-110px] md:bottom-[-130px] lg:bottom-[-150px] grayscale hover:grayscale-0"
          />
        </div>
      </div>

      <div
        className="flex items-center justify-center lg:justify-between 
      lg:w-[90%]
      lg:max-w-[1440px] absolute bottom-20 md:bottom-5"
      >
        <div className="  max-w-[300px] md:max-w-[400px] lg:max-w-[400px] ">
          <p className="text-white text-[16px] text-center lg:text-left md:text-[20px] font-normal">
            Frontend Engineer and Product Designer, currently at Crown Branding
            Agency.
          </p>
        </div>

        <div className="  max-w-[500px] lg:max-w-[420px] hidden lg:block">
          <p className="text-white text-[16px] md:text-[20px] font-normal text-right">
            Strongly focused on interfaces and experiences, working remotely
            from Lagos, Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;