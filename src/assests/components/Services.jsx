import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { SiGooglemarketingplatform } from "react-icons/si";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Combine the power of PPC ads with experts website design and development. Drive traffic convert leads and maximize ROI for your business.",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Drive traffic that matters with precision PPC. Engage visitors with expert web design that captivates. Convert leads effortlessly and watch your ROI soar.",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Unlock your brand's visual potential with Digital Bird's graphic design expertise. Captovate audience and make a lasting impression with stunning visuals",
  },
  {
    name: "Digital Marketing",
    icon: <SiGooglemarketingplatform className="text-4xl text-primary" />,
    link: "#",
    description:
      "Boost your online presence with our comprehensive digital marketing solutions. Reach your target audience, drive engagement and achieve business growth"
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1 className="text-3xl font-semibold sm:text-3xl text-violet-950">
              Explore Our Services
            </h1>
            <p className="text-gray-600 text-sm">
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="card p-4 space-y-3 sm:space-y-4"
              >
                <div className="flex items-center space-x-2">
                  {skill.icon}
                  <h1 className="text-lg font-semibold">{skill.name}</h1>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* button */}
          <div className="text-center mt-4 sm:mt-8">
            <button className="btn bg-primary hover:bg-blue-700 text-white py-1 px-3 md:ml-8 rounded md:static">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
