import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Name Suwipa Thuesayom (Toey) I am a new graduate who is always
          intention and eager to search new experiences. I am ready to learn and
          develop myself, so I'm looking for an organization that can use my
          knowledge and abilities to the organization.
        </p>
      </div>
    </div>
  );
};

export default About;
