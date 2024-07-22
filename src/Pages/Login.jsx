import React, { useState, useEffect } from "react";
import bgimage from "../assets/loginlogoutbg.jpg";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase/FirebaseConfig";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.justLoggedIn) {
      localStorage.setItem("user", JSON.stringify({ ...user, justLoggedIn: false }));
    }
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      toast.success("Login Successful");
      navigate("/houselistings");
    } catch (error) {
      toast.error("Please check your credentials.");
      console.error(`${error.message}`);
    }
  };

  return (
    <>
      <Toaster /> {/* Only one toaster component for showing toasts */}
      <div className="overflow-hidden min-h-screen md:mt-0 -mt-20">
        <section className="relative">
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
                  Login to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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
                      onChange={handleEmailChange}
                      className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email id"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="••••••••"
                        className="bg-gray-50 bg-opacity-70 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="showpassword"
                          aria-describedby="showpassword"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 bg-opacity-70 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          onClick={handleShowPassword}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="showpassword" className="text-gray-600">
                          Show password
                        </label>
                      </div>
                    </div>
                    <a
                      href="/forgotpassword"
                      className="text-sm font-medium text-primary-600 hover:underline text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                  <p className="text-sm text-gray-600">
                    Don’t have an account yet?{" "}
                    <span
                      className="font-medium text-primary-600 hover:underline cursor-pointer"
                      onClick={() => navigate("/registration")}
                    >
                      Register Yourself
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
