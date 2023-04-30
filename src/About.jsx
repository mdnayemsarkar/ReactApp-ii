import React from "react";
import AboutImg from "../public/image/nayem.jpeg";
import Header from "./Header";

function About() {
  return (
    <>
      <Header />
      <h1 className="text-3xl text-gray-700 font-bold text-center mt-8">This is our About Page</h1>
      <div className="mt-20 bg-slate-400 h-full">
        <div className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra ipsum ac velit ultrices, vitae venenatis sem ultrices.
                  Proin semper porttitor mi, non hendrerit eros malesuada nec.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <img
                  className="object-cover object-center rounded-lg shadow-md"
                  src={AboutImg}
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
