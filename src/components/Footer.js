import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-black min-h-16">
      <div className="justify-start w-full h-full p-5 mx-auto max-w-7xl">
        <div>
          <div className="text-xs font-light text-gray-500 font-body"></div>
          <div className="text-xs font-light text-gray-500 font-body">
            Image by{" "}
            <a href="https://www.freepik.com/free-vector/app-development-concept-with-flat-design_2455976.htm#query=build%20phone%20app&position=2&from_view=search#position=2&query=build%20phone%20app">
              Freepik
            </a>
          </div>
          <div className="text-xs font-light text-gray-500 font-body">
            <a href="https://www.freepik.com/free-vector/artists-painting-abstract-picture-with-paintbrush-oil-paint-work-tiny-persons-drawing-with-digital-tools-flat-vector-illustration-virtual-master-class-online-workshop-creation-concept_22343414.htm#query=design&position=1&from_view=search#position=1&query=design">
              Image by pch.vector
            </a>{" "}
            on Freepik
          </div>
          <div className="text-xs font-light text-gray-500 font-body">
            <a href="https://www.freepik.com/free-vector/graphic-design-geometric-wallpaper_7088577.htm#query=design&position=0&from_view=search">
              Image by pikisuperstar
            </a>{" "}
            on Freepik
          </div>

          <div className="text-xs font-light text-gray-500 font-body">
            Image by{" "}
            <a href="https://pixabay.com/users/kreatikar-8562930/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3411373">
              Mudassar Iqbal
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3411373">
              Pixabay
            </a>
          </div>

          <div className="text-xs font-light text-gray-500 font-body">
            Image by{" "}
            <a href="https://pixabay.com/users/talhakhalil007-5671515/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">
              talha khalil
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4284157">
              Pixabay
            </a>
          </div>
        </div>

        <p className="py-10 font-light tracking-widest text-center text-sky-200">
          © {new Date().getFullYear()} WSK Creative
        </p>
      </div>
    </div>
  );
};
