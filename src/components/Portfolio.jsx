import React from "react";
import leaderboard from "../assets/portfolio/imageLead.png";
import authreact from "../assets/portfolio/authreact.jpg";
import mobileapp from "../assets/portfolio/mobileApp.jpg";
// import mobilestore from "../assets/portfolio/mobileStore.jpg";
import wordpressticket from "../assets/portfolio/ticket.png";
import wordpressbuiltdee from "../assets/builtdee.png"
import phpappointment from "../assets/appointmentismile.jpeg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: leaderboard,
      title: "Leaderboard",
      database: "Firebase",
    },
    {
      id: 2,
      src: authreact,
      title: "AuthReact",
      database: "Firebase",
    },
    {
      id: 3,
      src: mobileapp,
      title: "MobileApp",
      database: "Fierbase",
    },
    // {
    //   id: 4,
    //   src: mobilestore,
    //   title: "HTML CSS ",
    //   database: "JAVASCRIPT",
    // },
    {
      id: 5,
      src: wordpressticket,
      title: "Ticket Websit",
      database: "Wordpress"
    },
    {
      id: 6,
      src: wordpressbuiltdee,
      title: "Builtdee Websit",
      database: "Wordpress"
    },
    {
      id: 7,
      src: phpappointment,
      title: "Ismile Clinic Appointment",
      database: "PHP MYSQL"
    }

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, database }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {database}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
