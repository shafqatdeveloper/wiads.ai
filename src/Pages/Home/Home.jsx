import React from "react";
import { BiUser } from "react-icons/bi";
import mobilePic from "../../assets/mobilePic.png";

const Home = () => {
  return (
    <main>
      <div>
        <div className="flex flex-col sm:flex-row items-center px-5">
          <div className="sm:w-1/2 w-full flex items-center justify-center">
            <div className="md:w-2/3 flex flex-col gap-1 px-5 sm:px-0">
              <h1 className="text-4xl sm:text-5xl font-bold font-sans">
                Run Ads with AI.
              </h1>
              <p className="text-gray-500 mt-1">
                Wiads customers have seen 90% cheaper ad costs and 105% higher
                click-Through rates than industry benchmarks by focusing on your
                relevance and ad quality
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-3 mt-6">
                <button className="py-2 px-5 w-full bg-blue-700 text-white rounded-lg">
                  Get Started
                </button>
                <button className="py-2 px-5 w-full bg-gray-200 text-black rounded-lg">
                  Learn More
                </button>
              </div>
              <div className=" bg-blue-100 p-2 mt-5 rounded-lg">
                <p>
                  Over <strong className="text-blue-600">20,000+</strong> ad
                  campaigns created with Wiads.ca
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={mobilePic} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
