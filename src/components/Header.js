import React from "react";

export const Header = (props) => {
  return (
    <div className="w-full mb-10 bg-gradient-to-b from-gray-200 to-transparent">
      <div className="flex flex-wrap justify-center w-full h-full mx-auto max-w-7xl">
        <div className="max-w-xl p-5">
          <img src={require("../assets/hero.png")} alt="hero" />
        </div>
        <div className="flex flex-col justify-center w-full max-w-4xl gap-5 p-5">
          <h2 className="text-6xl tracking-wide text-left font-title text-sky-500">
            Clients and Ideas are the bottom line
          </h2>
          <p className="text-xl font-light tracking-wide text-left font-body">
            Behind the scenes I am solving problems like how to make web pages
            load faster and work better on different devices.
          </p>
          <button
            className="self-center px-10 py-5 my-5 font-bold tracking-wider text-white uppercase bg-sky-500 rounded-2xl hover:bg-sky-800 hover:text-gray-200 hover:shadow-md"
            onClick={props.event}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
