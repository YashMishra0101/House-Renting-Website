import React from "react";
import sign from "../assets/sign.png";
import vision from "../assets/shared-vision.png";
import diamond from "../assets/diamond.png";
import Footer from "../componet/Footer";

export const Mission = () => {
  return (
    <>
      <div className="container bg-blue-100 justify-items-center h-full md:grid md:grid-cols-3 md:content-start overflow-hidden">
        <div className=" flex flex-col justify-center items-center p-4 gap-2 md:mt-20 md:ml-10 md:gap-8 md:mb-5">
          <img src={sign} alt="" srcSet="" className="h-52" />
          <h2 className="text-2xl font-bold shadow-2xl underline underline-offset-4">
            MISSION
          </h2>
          <p className="px-4">
            At RoomQuest, our mission is to simplify the process of finding and
            renting rooms by providing a user-friendly platform that connects
            homeowners with prospective tenants. We strive to offer a seamless
            experience, empowering individuals to discover the perfect living
            space tailored to their needs, preferences, and budget.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 gap-2 md:mt-20 md:gap-8 md:mb-5">
          <img src={vision} alt="" srcSet="" className="h-52" />
          <h2 className="text-2xl font-bold shadow-2xl underline underline-offset-4">
            OUR VISION
          </h2>
          <p className="px-4">
            Our vision at RoomQuest is to revolutionize the room rental industry
            by fostering a community-driven marketplace where trust,
            transparency, and convenience are paramount. We envision a future
            where individuals can effortlessly navigate through an extensive
            selection of rental options, facilitated by innovative technology
            and personalized support.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 gap-2 md:mt-20 md:mr-10 md:gap-8 md:mb-5">
          <img src={diamond} alt="" srcSet="" className="h-52" />
          <h2 className="text-2xl font-bold shadow-2xl underline underline-offset-4">
            OUR Values
          </h2>
          <p className="px-4">
            At RoomQuest, we live by a simple code: transparency, integrity, and
            innovation. We put our users first, ensuring their needs are met
            with care and respect. Diversity is our strength, and community is
            our heartbeat. We take responsibility for our actions, striving
            always to empower and uplift those we serve.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
