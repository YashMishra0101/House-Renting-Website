import React, { useState } from "react";
import bgimage from "../assets/loginlogoutbg.jpg";
import { useNavigate } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";
import { toast } from 'react-hot-toast';
import female from '../assets/female.png';
import male from '../assets/male.png';

export const Testimonial = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = {
      name: e.target.name.value,
      profession: e.target.profession.value,
      title: e.target.title.value,
      description: e.target.description.value,
      image: selectedImage,
    };
    try {
      const docRef = await addDoc(collection(fireDb, "reviews"), newTestimonial);
      console.log("Testimonial added with ID: ", docRef.id);
      navigate("/");
      // Show success toast
      toast.success('Testimonial submitted successfully!');
    } catch (error) {
      console.error("Error adding testimonial: ", error);
      // Show error toast
      toast.error('Error submitting testimonial. Please try again later.');
    }
  };

  const handleCheckboxChange = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="overflow-hidden min-h-screen">
      <section className="relative pt-20 pb-14">
        <div className="absolute inset-0 min-h-screen">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:-mt-5 pt-[7rem] md:-pt-[7rem]">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative z-10">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Give Your reviews
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select Gender
                  </label>
                  <div className="flex justify-between">
                    <div>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={() => handleCheckboxChange(female)}
                        className="mr-2"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={() => handleCheckboxChange(male)}
                        className="mr-2"
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Enter Profession"
                    className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Title"
                    className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="bg-white bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
