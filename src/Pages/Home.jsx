import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import carsoul1 from "../assets/Cvideo.mp4";
import Carsoul1 from "../assets/carousel1.jpg";
import carsoul2 from "../assets/Carousel2.png";
import carsoul3 from "../assets/Carousel3.png";
import carsoul4 from "../assets/Carousel4.jpg";
import carsoul5 from "../assets/Carousel5.png";
import Privacy from "../assets/privacy.gif";
import Instant from "../assets/instant-move.gif";
import Deposit from "../assets/Deposit.gif";
import experience from "../assets/experience.gif";
import threecard from "../assets/threecardimg.png";
import Student from "../assets/Student(1).png";
import vector from "../assets/vector1.png";
import banner from "../assets/banner.png";
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "./../assets/review4.jpeg";
import chat from "./../assets/chat-bot.gif";
import CountUp from "react-countup";
import Btn from "./../assets/home.png";
import Footer from "../componet/Footer";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(fireDb, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsData = [];
      reviewsSnapshot.forEach((doc) => {
        reviewsData.push({ id: doc.id, ...doc.data() });
      });
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  const toggleContentVisibility = (event) => {
    event.preventDefault();
    setIsContentVisible(!isContentVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      {/* Carousel started */}
      <div
        id="default-carousel"
        className="relative h-[450px] overflow-hidden -mb-72 md:mb-0"
        data-carousel="slide"
      >
        <div className="relative h-full  overflow-hidden">
          <div
            className="duration-700 ease-in-out absolute w-full flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <video
              src={carsoul1}
              className="w-full h-full object-cover hidden sm:block"
              alt="..."
              autoPlay
              loop
              muted
            />
            <img
              src={carsoul5}
              className="w-full h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul2}
              className="w-full h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul3}
              className="w-full  h-full object-cover"
              alt="..."
            />
            <img
              src={carsoul4}
              className="w-full h-full object-cover relative "
              alt="..."
            />
            <img
              src={Carsoul1}
              className="w-full h-full object-cover sm:hidden block"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse hidden md:block">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          {/* Previous button icon */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          {/* Next button icon */}
        </button>
      </div>
      {/* Carousel ends */}
      {/* middle section started */}
      <div className="md:flex m-auto">
        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={experience} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Seamless Experience
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Our platform ensures a hassle-free transition with unmatched
            privacy, instant move-in options, and the lowest security deposit.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Privacy} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Unmatched Privacy
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Enjoy unparalleled privacy in our thoughtfully designed
            accommodations, ideal for studying or working from home.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Instant} className="h-12 mb-2 " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Instant Move-In
            </h5>
          </a>
          <p class=" font-normal text-gray-500 dark:text-gray-400 items-center">
            Move into your new home instantly, with a streamlined process that
            saves you time and hassle.
          </p>
        </div>

        <div class="max-w-sm w-18 border-gray-200 md:m-14 flex flex-col items-center ml-4">
          <img src={Deposit} className="h-12 mb-2  " />
          <a href="#">
            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
              Lowest Deposit
            </h5>
          </a>
          <p class="font-normal text-gray-500 dark:text-gray-400 items-center">
            Benefit from the lowest security deposit options, ensuring
            affordable living with peace of mind.
          </p>
        </div>
      </div>
      {/*  */}
      <div
        href="#"
        class="flex flex-col items-center rounded-lg md:flex-row  hover:bg-gray-100  md:ml-10 md:mb-10"
      >
        <div>
          <img
            class="object-cover rounded-t-lg w-[90%] m-auto md:h-96 md:w-full md:rounded-none mt-12"
            src={Student}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal md:ml-14">
          <div className="flex flex-col lg:flex-row justify-center items-center py-12">
            <div className="max-w-4xl mx-auto px-4 md:w-full">
              <div className="flex flex-wrap justify-around mb-9 ">
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">
                    <CountUp end={200000} duration={2.5} />
                  </div>
                  <div className="text-gray-500 mt-4">
                    <pre>Happy customers </pre>
                  </div>
                </div>
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">
                    <CountUp end={100000} duration={2.5} />
                  </div>
                  <div className="text-gray-500 mt-4">
                    <pre>Houses across India</pre>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-around">
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">
                    <CountUp end={9} duration={2.5} />
                  </div>
                  <div className="text-gray-500 mt-4">
                    <pre>Cities in India</pre>
                  </div>
                </div>
                <div className="text-center w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="text-4xl font-bold">
                    <CountUp end={38} duration={2.5} prefix="₹" suffix="+" />
                  </div>
                  <div className="text-gray-500 mt-4">
                    <pre>Savings made on brokerage</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <a
        href="#"
        class="flex flex-col items-center shadow md:flex-row md:w-[100%]"
      >
        <div class="flex flex-col justify-between p-4 leading-normal md:ml-8">
          <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl mb-7">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button
            className="bg-black text-white w-fit m-auto rounded-full p-3"
            onClick={toggleContentVisibility}
          >
            Explore Now!!
          </button>
          {isContentVisible && (
            <div className="w-[100%] border-neutral-400 shadow-2xl p-4 border-2 mt-8 flex justify-between">
              <div>
                <img src={Btn} alt="" className="w-[90%]" />
              </div>
              <div>
                RoomQuest is not just a platform; it's your trusted companion in
                finding the perfect home away from home. Our mission is to
                revolutionize the way you search for accommodation, offering a
                seamless experience tailored to your needs. With RoomQuest,
                you're not just renting room; you're embarking on a journey of
                hassle-free living,supported by cutting-edge technology and
                dedicated customer service.
                <button
                  className="bg-black text-white w-fit m-auto rounded-full p-3 mt-3 justify-end "
                  onClick={() => navigate("/about")}
                >
                  More
                </button>
              </div>
            </div>
          )}
        </div>

        <img
          class="object-cover w-full md:w-[500px] md:ml-14  h-96 md:h-auto md:h-96 md:rounded-none"
          src={vector}
          alt=""
        />
      </a>
      {/*  */}
      <div>
        <img src={banner} className="md:h-[600px] m-auto mt-14 rounded-3xl" />
      </div>
      {/* .. */}
      <div
        href="#"
        class="flex flex-col items-center shadow md:flex-row md:h-[100%]"
      >
        <div class="flex flex-col justify-between p-4 leading-normal md:ml-8">
          <h5 class="mb-2 md:text-6xl text-4xl text-center font-bold tracking-tight text-gray-900 mb-6 mt-10">
            Find Your Best Accommodation
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 md:text-2xl  mb-7 text-center">
            Discover hassle-free room finding for students and employees.
          </p>
          <p class="mb-3 text-base w-[60%] m-auto text-gray-500 dark:text-gray-400 text-center">
            Experience the convenience of finding the perfect room tailored to
            your needs, whether you're a student looking for a quiet study space
            or an employee seeking a comfortable workspace.
          </p>
        </div>
        <img
          class="md:ml-9  h-96 md:w-[20%] w-30% md:mr-11 md:rounded-none md:mt-14"
          src={threecard}
          alt=""
        />
      </div>
      {/* .. */}
      {/* reviews starts */}
      <h1 className="text-center mb-7 mt-10 font-bold text-3xl">Reviews!!</h1>
      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white ">
        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900">
              RoomQuest is a game-changer!
            </h3>
            <p className="my-4">
              RoomQuest offers a wide range of accommodation options,
              user-friendly booking, safe transactions, and dedicated customer
              support for a hassle-free experience.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9"
              src={review1}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-gray-950 text-left rtl:text-right ms-3">
              <div>Yash Mishra</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                FullStack Developer
              </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900">
              RoomQuest made my search for accommodation a breeze!
            </h3>
            <p className="my-4">
              RoomQuest's wide array of options, user-friendly interface, secure
              transactions, and excellent customer support make it the top
              choice for accommodation seekers.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9"
              src={review2}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-gray-950 text-left rtl:text-right ms-3">
              <div>Shubham Mahatme</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Salesforce Developer
              </div>
            </div>
          </figcaption>
        </figure>

        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Mindblowing workflow
            </h3>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src={review3}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Parag Dahat</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                FullStack Developer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 ">
              Efficient Collaborating
            </h3>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src={review4}
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div>Tejashree Mahajan</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Mechanical Engineer
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div>
        {/* Your existing code */}

        {/* Add new review cards dynamically */}
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white -mt-12 ">
          {reviews.map((review) => (
            <figure
              className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-300 rounded-lg"
              key={review.id}
            >
              <blockquote className="w-[80%] mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.title}
                </h3>
                <p className="my-4">{review.description}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <img
                  className="rounded-full w-9 h-9"
                  src={review.image}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-gray-950 text-left rtl:text-right ms-3">
                  <div>{review.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {review.profession}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Your existing code */}
      </div>
      );
      {/* reviews ends */}
      <div className="fixed bottom-0 right-0 m-4 w-[60px]">
        <button>
          <img src={chat} onClick={() => navigate("/testimonial")} />
        </button>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
};
