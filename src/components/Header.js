import React from "react";

export const Header = (props) => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-transparent w-full mb-10">
      <div className="w-full max-w-7xl h-full mx-auto flex justify-center flex-wrap">
        <div className="p-5 max-w-xl">
          <img src={require("../assets/hero.png")} alt="hero" />
        </div>
        <div className="flex flex-col w-full justify-center p-5 gap-5 max-w-4xl">
          <h2 className="font-title text-6xl text-left tracking-wide text-sky-500">
            Clients and Ideas are the bottom line
          </h2>
          <p className="font-body text-xl text-left tracking-wide font-light">
            Behind the scenes I am solving problems like how to make web pages
            load faster and work better on different devices.
          </p>
          <button
            className="py-5 px-10 font-bold text-white uppercase bg-sky-500 rounded-2xl self-center tracking-wider my-5 hover:bg-sky-800 hover:text-gray-200 hover:shadow-md"
            onClick={props.scrollToElement}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
