import React from "react";

export const Filler = () => {
  return (
    <div className="first:w-full min-h-[20rem] py-20">
      <div className=" w-full max-w-7xl h-full mx-auto overflow-hidden lg:flex">
        <img
          src={require("../assets/section1.png")}
          className="h-auto w-auto opacity-20"
          alt="generic design"
        />
        <p className="font-body text-3xl text-left tracking-wide font-light max-w-6/1 px-10 sm:text-4xl lg:p-0 lg:text-5xl lg:leading-loose">
          I get excited about your goals, and I want to think through the full
          spectrum of a solution for you.
        </p>
      </div>
    </div>
  );
};
