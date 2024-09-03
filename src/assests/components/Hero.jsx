import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div className="order-1 sm:order-2">
            <img
              src='team.png'
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div className="absolute bottom-36 right-28 px-4 py-2 rounded-xl bg-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1 className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}>
              Building Brands in the{" "}
              <span className="text-primary">Digital Agency</span>
            </h1>
            <p>
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button
              className="btn bg-primary hover:bg-blue-700 text-white py-1 px-3 md:ml-8 rounded md:static">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;