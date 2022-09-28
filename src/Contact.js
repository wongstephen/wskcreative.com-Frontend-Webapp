import React from "react";

export const Contact = (props) => {
  return (
    <div className="bg-sky-400 w-full" ref={props.refs}>
      <div className=" w-full max-w-7xl h-full mx-auto flex flex-col items-center justify-center py-10">
        <p className="font-title text-3xl tracking-wider my-5 text-center p-2.5">
          Let's start a conversation
        </p>
        <div className="font-body text-xl tracking-wider text-center">
          <p>Send me an email at</p>
          <a
            href="mailto:contact@wiskcreative.com"
            className="py-5 font-semibold hover:drop-shadow hover:text-sky-900"
          >
            contact@wiskcreative.com
          </a>
          <p className="mt-10 my-5">or write me a message below</p>
        </div>
        <form className="flex flex-col gap-2.5 w-10/12 md:w-full max-w-lg">
          <label
            htmlFor="inputName"
            className="text-base text-gray-800 font-body tracking-wider py-0 my-0 relative top-2"
          >
            Name *
          </label>
          <input
            type="text"
            name="inputName"
            className=" py-2 px-10 rounded my-0 w-full"
            disabled
          />
          <label
            htmlFor="inputName"
            className="text-base text-gray-800 font-body tracking-wider py-0 my-0 relative top-2"
          >
            Email *
          </label>
          <input
            type="text"
            name="inputEmail"
            className=" py-2 px-10 rounded my-0 w-full"
            disabled
          />
          <label
            htmlFor="inputName"
            className="text-base text-gray-800 font-body tracking-wider py-0 my-0 relative top-2"
          >
            Message *
          </label>
          <textarea
            type="text"
            name="inputMsg"
            className=" py-2 px-10 rounded my-0 w-full"
            placeholder="Form Temporary Disabled"
            disabled
          />

          <button
            className="py-2.5 px-5 bg-white rounded-2xl w-36 self-center tracking-wider my-5 hover:bg-sky-800 hover:text-white hover:shadow-md"
            disabled
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};
