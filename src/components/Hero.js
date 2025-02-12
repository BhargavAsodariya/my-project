import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import introVideo from "../assets/ABTIK_SERVICES_INTRO.mp4";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="hero" id="hero">
        <NavBar />

        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                Abtik software solutions for your unique business
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                We are a team of highly motivated and skilled developers
                dedicated to delivering only the best software. Empowering
                business through comrehensive solutions:From fund management to
                legal compliance, We've got you covered at Abtik startup advisor
                private limited
              </div>
              <div className="flex items-center md:flex-row flex-col gap-5 mt-5">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <button
                  className="play-button bg-white md:w-[150px] w-full text-blue-900 text-base rounded-full px-4 py-3 shadow-lg hover:bg-gray-200 transition"
                  onClick={() => setShowVideo(true)}
                >
                  ▶ Play Video
                </button>
              </div>
            </div>

            {showVideo && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                <div className="relative w-3/4 max-w-2xl">
                  {/* Close Button */}
                  <span
                    className="absolute top-2 right-2 text-white text-3xl cursor-pointer z-50"
                    onClick={() => setShowVideo(false)}
                  >
                    &times;
                  </span>
                  {/* Video */}
                  <video className="w-full rounded-md" controls autoPlay>
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            <div className="flex lg:justify-end w-full lg:w-1/2">
              <img
                alt="Hero"
                className="rounded-t float-right w-full"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
