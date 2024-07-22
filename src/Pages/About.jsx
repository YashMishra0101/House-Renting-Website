import React from "react";
import About1 from "./../assets/logo.png";
import About2 from "./../assets/about2.png";
import About3 from "./../assets/about3.png";
import About4 from "./../assets/about4.png";
import Bottom1 from "./../assets/Bottom1.png";
import Bottom2 from "./../assets/Bottom2.png";
import Bottom3 from "./../assets/Bottom3.png";
import Footer from "../componet/Footer";

export const About = () => {
  return (
    <>
      <div className="">
        <p className=" text-center md:mt-20 font-semibold mt-10">
          YOUR ACCOMODATION SOLUTION
        </p>
        <h1 className="text-center md:text-5xl text-4xl md:pt-5 font-bold mt-3 ">
          Find Your Perfect <br />
          Space with RoomQuest
        </h1>
        <img src={About1} className="md:w-[70%] w-60%  m-auto mt-10  bg-gray-300" />
        <div className="w-[80%] m-auto mt-7">
          <p className="text-center ">
            RoomQuest is a revolutionary platform designed to simplify the
            process of finding accommodation for students and employees
            relocating to new cities. We understand the challenges of finding
            the perfect place to live in an unfamiliar city, which is why we've
            created a seamless and efficient solution. Our platform connects
            users with verified homeowners, offering a wide range of
            accommodation options to suit every need and budget. Whether you're
            looking for a cozy room in a shared apartment or a private space of
            your own, RoomQuest is your trusted partner in finding the ideal
            place to call home. Experience unmatched convenience and peace of
            mind with RoomQuest as you embark on your new journey.
          </p>
        </div>

        {/*  */}

        <a
          href="#"
          class="flex flex-col items-center shadow md:flex-row md:w-[100%] w-[60%] md:h-[600px] m-auto mt-5"
        >
          <div class="flex flex-col justify-between p-4 leading-normal md:ml-20">
            <h3 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Discover Your Perfect
              <br /> Room with RoomQuest!
            </h3>
          </div>
          <img
            class="object-cover md:w-[500px] md:ml-14 w-[100%] md:h-auto md:h-[500px] md:rounded-none"
            src={About2}
            alt=""
          />
        </a>

        {/*  */}

        <div>
          <h1 className="text-center font-bold text-6xl mt-14">Our Services</h1>
          <p className="text-center font-semibold md:text-5xl text-4xl mt-7">
            the key services <br />
            offered by RoomQuest
          </p>
          <img src={About3} className="m-auto mt-14 md:w-[40%] w-[100%]" />
          <div className="flex justify-center">
            <ul className=" text-3xl  mt-2 ml-5">
              <li>&#x2022; Room search and booking platform</li>
              <li className="mt-1">
                &#x2022; Virtual tours of accommodation options
              </li>
              <li className="mt-1">
                &#x2022; Assistance with documentation and contracts
              </li>
              <li className="mt-1">&#x2022; Customer support and assistance</li>
            </ul>
          </div>
        </div>

        {/*  */}

        <div className="text-center font-bold text-6xl mt-20">
          Why Choose RoomQuest
        </div>
        <img src={About4} className="m-auto mt-10 md:w-[70%] w-[100%]" />
        <div className="md:w-[1000px] m-auto mt-4">
          <ul className="ml-5 md:mt-5">
            <li>
              <b className="text-2xl">
                &#x2022; Wide Range of Accommodation Options:{" "}
              </b>
              RoomQuest offers a diverse selection of accommodation options,
              ranging from shared rooms to entire apartments, ensuring there's
              something for everyone. Whether you're a student looking for a
              cozy room or a professional seeking a spacious apartment,
              RoomQuest has you covered.
            </li>
            <li className="mt-2">
              <b className="text-2xl ">&#x2022; User-Friendly Platform:</b>{" "}
              RoomQuest's platform is designed with the user in mind, making it
              easy and intuitive to navigate. With a simple search feature and
              detailed listings, finding your ideal accommodation is quick and
              convenient. RoomQuest's platform is accessible on both desktop and
              mobile devices, allowing you to search for accommodations anytime,
              anywhere.
            </li>
            <li className="mt-2">
              <b className="text-2xl">&#x2022; Safe and Secure Transactions:</b>{" "}
              RoomQuest prioritizes your safety and security when it comes to
              transactions. All payments and transactions on the platform are
              encrypted and secure, giving you peace of mind throughout the
              booking process. RoomQuest ensures that your personal and
              financial information is protected at all times.
            </li>
            <li className="mt-2">
              <b className="text-2xl">&#x2022; Dedicated Customer Support:</b>{" "}
              RoomQuest provides dedicated customer support to assist you with
              any questions or issues you may encounter. Whether you need help
              finding accommodation or have a question about your booking,
              RoomQuest's customer support team is available to provide
              assistance.
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="flex md:m-20 flex-col md:flex-row">
          <p className="text-5xl font-semibold mt-10 text-center md:text-left">
            Be Part Of Our Growing Family
          </p>
          <div>
            <img src={Bottom1} className=" m-auto mt-10" />
            <p className="text-center mt-3">SEARCH FOR RENT ROOMS</p>
          </div>

          <div>
            <img src={Bottom2} className=" m-auto mt-10"  />
            <p className="text-center mt-3">REGISTER YOUR ROOM</p>
          </div>

          <div>
            <img src={Bottom3} className=" m-auto mt-10" />
            <p className="text-center mt-3">JOIN OUR FAMILY</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
