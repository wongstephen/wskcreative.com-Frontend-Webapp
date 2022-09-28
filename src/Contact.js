import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
export const Contact = (props) => {
  return (
    <div className="w-full py-32 bg-sky-300" ref={props.refs}>
      <div className="flex flex-col items-center justify-center w-full h-full py-10 mx-auto max-w-7xl">
        <p className="font-title text-3xl tracking-wider my-5 text-center p-2.5">
          Let's start a conversation
        </p>
        <div className="text-xl tracking-wider text-center font-body">
          <p className="font-light">Send me an email at</p>
          <a
            href="mailto:contact@wiskcreative.com"
            className="py-5 text-xl font-semibold sm:text-5xl hover:drop-shadow hover:text-sky-900"
          >
            <div className="flex">
              <CursorArrowRaysIcon className="sm:block hidden relative w-16 top-[-2rem]" />
              <span>contact@wiskcreative.com</span>
            </div>
          </a>
          {/* <p className="my-5 mt-10">or write me a message below</p> */}
        </div>
        {/*         <form className="flex flex-col gap-2.5 w-10/12 md:w-full max-w-lg">
          <label
            htmlFor="inputName"
            className="relative py-0 my-0 text-base tracking-wider text-gray-800 font-body top-2"
          >
            Name *
          </label>
          <input
            type="text"
            name="inputName"
            className="w-full px-10 py-2 my-0 rounded "
            disabled
          />
          <label
            htmlFor="inputName"
            className="relative py-0 my-0 text-base tracking-wider text-gray-800 font-body top-2"
          >
            Email *
          </label>
          <input
            type="text"
            name="inputEmail"
            className="w-full px-10 py-2 my-0 rounded "
            disabled
          />
          <label
            htmlFor="inputName"
            className="relative py-0 my-0 text-base tracking-wider text-gray-800 font-body top-2"
          >
            Message *
          </label>
          <textarea
            type="text"
            name="inputMsg"
            className="w-full px-10 py-2 my-0 rounded "
            placeholder="Form Temporary Disabled"
            disabled
          />

          <button
            className="py-2.5 px-5 bg-white rounded-2xl w-36 self-center tracking-wider my-5 hover:bg-sky-800 hover:text-white hover:shadow-md"
            disabled
          >
            SEND
          </button>
        </form> */}
      </div>
    </div>
  );
};
