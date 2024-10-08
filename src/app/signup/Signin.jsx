/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider, githubProvider } from "../utils/firebase.config.js";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Redirect or perform any other actions after successful login
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect or perform any other actions after successful login
      console.log("Social login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    let timerId;
    if (error) {
      setTimer(5);
      timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timerId);
  }, [error]);

  useEffect(() => {
    if (timer === 0) setError(null);
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center  rounded-lg ">
      {error && (
        <div className="fixed top-16 md:top-44 right-5w-80 md:w-1/4 z-50">
          <div className="relative bg-gradient-to-r from-[#4a1000] to-red-600 p-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div className="flex-grow">
                <span className="font-semibold">Alert!</span>
                <p className="text-xs">{error}</p>
              </div>
            </div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-red-500" style={{ width: "100%", transition: `width ${timer}s linear` }} ref={(el) => el && setTimeout(() => (el.style.width = "0%"), 10)}></div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8">
          <section id="back-div" className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
            <div className="border-8 border-transparent rounded-xl bg-white shadow-xl p-8 m-2">
              <h1 className="text-5xl font-bold text-center cursor-default text-gray-900">
                Log in
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                  <input
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-lg">Password</label>
                  <input
                    id="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <a href="#" className="text-blue-400 text-sm transition hover:underline">Forget your password?</a>
                <button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
             
              <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg" onClick={() => handleSocialLogin(googleProvider)}>
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg" onClick={() => handleSocialLogin(facebookProvider)}>
                  <img
                    className="w-6 h-6"
                    loading="lazy"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="Facebook"
                  />
                </button>
                <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg" onClick={() => handleSocialLogin(githubProvider)}>
                  <img
                    className="w-6 h-6 dark:invert"
                    loading="lazy"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="GitHub"
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signin;