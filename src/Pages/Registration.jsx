import React, { useState } from "react";
import bgimage from "../assets/loginlogoutbg.jpg";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../../src/firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [nativeAddress, setNativeAddress] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [identificationType, setIdentificationType] = useState("PAN");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Save form data to Firebase
        await setDoc(doc(fireDb, "users", user.uid), {
          name,
          email,
          contactNumber,
          occupation,
          identificationType,
          identificationNumber,
          nativeAddress,
        });

        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
        setContactNumber("");
        setOccupation("");
        setIdentificationType("PAN");
        setIdentificationNumber("");
        setNativeAddress("");
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        toast.success("Registration Successful");

        navigate("/houselistings");
      } catch (error) {
        toast.error("Enter Valid Detail");
        console.error(`Signup failed: ${error.message}`);
      }
    } else {
      toast.error("Password not matched");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleIdentificationNumberChange = (event) => {
    setIdentificationNumber(event.target.value);
  };

  const handleNativeAddressChange = (event) => {
    setNativeAddress(event.target.value);
  };

  const handleIdentificationTypeChange = (event) => {
    setIdentificationType(event.target.value);
  };

  return (
    <div className="overflow-hidden min-h-screen md:-mt-20 -mt-6">
      <section className="relative md:py-40">
        <div className="absolute inset-0 min-h-screen">
          <img
            src={bgimage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-6 mx-auto md:h-screen lg:py-0 pt-[5rem]">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 relative ">
            <div className="p-5 space-y-5 md:space-y-3 sm:p-7">
              <h1 className="text-xl text-center font-bold leading-tight mb-4 tracking-tight text-gray-900 md:text-2xl">
                Register Yourself
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email id"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={handleContactNumberChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="occupation"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      id="occupation"
                      value={occupation}
                      onChange={handleOccupationChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your occupation"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="identificationType"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Identification Type
                    </label>
                    <select
                      name="identificationType"
                      id="identificationType"
                      value={identificationType}
                      onChange={handleIdentificationTypeChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    >
                      <option value="PAN">PAN</option>
                      <option value="Aadhar">Aadhar</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor={identificationType.toLowerCase() + "Number"}
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      {identificationType} Number
                    </label>
                    <input
                      type="text"
                      name={identificationType.toLowerCase() + "Number"}
                      id={identificationType.toLowerCase() + "Number"}
                      value={identificationNumber}
                      onChange={handleIdentificationNumberChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={`Enter your ${identificationType} Number`}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="nativeAddress"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Native Address
                  </label>
                  <textarea
                    name="nativeAddress"
                    id="nativeAddress"
                    value={nativeAddress}
                    onChange={handleNativeAddressChange}
                    className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your native address"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    id="showPassword"
                    name="showPassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleShowPassword}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="showPassword"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Show Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
