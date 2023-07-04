import React from "react";
import MyImage from "../assets/profile_img.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row justify-between h-full">
        <div className="flex flex-col justify-center h-full md:w-1/2"> {/* added md:w-1/2 */}
          <h2 className="text-4xl sm:text-3xl  font-bold text-yellow-300 mt-32">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Hi, I'm Suwipa Thuesayom (Toey)",
                  "I'm a Web Developer",
                  "I'm a Programmer",
                ],
              }}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm have experience in React and Java Spring boot development. Currently,
            I love to work on web applications using technologies like React, Java , Php , MySql,
            Tailwind, Bootstrap, MaterialUI.
          </p>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
        <div className="flex justify-center items-center h-full md:w-1/2 mt-10 md:mt-0"> {/* added md:w-1/2 */}
          <img
            src={MyImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full sm:w-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
