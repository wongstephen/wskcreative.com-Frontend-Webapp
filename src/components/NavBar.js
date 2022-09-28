import React from "react";

export const NavBar = () => {
  return (
    <div className="bg-black w-full h-16 shadow">
      <div className="flex w-full max-w-7xl h-full mx-auto justify-center">
        <div className="flex justify-center">
          <h1 className="text-sky-400 font-body m-0 p-0 text-3xl tracking-widest font-black sm:hidden self-center">
            WSK
          </h1>
          <h1 className="text-sky-400 font-body m-0 p-0 text-3xl tracking-widest font-black hidden sm:block self-center">
            WSK Creative
          </h1>
        </div>
      </div>
    </div>
  );
};
