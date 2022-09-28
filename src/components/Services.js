import React from "react";

import webdesignImg from "../assets/webdesign.svg";
import appImg from "../assets/Mesa de trabajo 1.svg";

export const Services = () => {
  return (
    <div className="bg-sky-400/10 w-full">
      <div className=" w-full max-w-7xl h-full mx-auto flex flex-col items-center justify-center">
        <h2 className="my-16 font-title text-3xl tracking-wider text-sky-900">
          How I can help
        </h2>
        <div className="flex flex-col items-center lg:flex-row justify-center lg:gap-5">
          {/* Web Dev */}
          <div className="bg-white mb-16 rounded-2xl w-10/12 p-5 shadow-2xl basis-1/3">
            <img src={webdesignImg} alt="web design" className="w-100 h-auto" />
            <h3 className="text-center my-5 text-body tracking-wider text-sky-700 text-xl">
              Web Development
            </h3>
            <p className="text-center my-5 text-body tracking-wider font-light">
              Build websites that represent your business goals and trust in
              you.
            </p>
          </div>
          {/* App Dev */}
          <div className="bg-white mb-16 rounded-2xl w-10/12 p-5 shadow-2xl basis-1/3">
            <img src={appImg} alt="web design" className="w-100 h-auto" />
            <h3 className="text-center my-5 text-body tracking-wider text-sky-700 text-xl">
              App Development
            </h3>
            <p className="text-center my-5 text-body tracking-wider font-light">
              Build iOS apps with modern technologies and frameworks to reach
              your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
