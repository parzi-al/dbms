"use client";
import React from 'react';
import Forms from './Forms';
import { auth, googleProvider, facebookProvider, githubProvider, db } from '../utils/firebase.config';

const signin = () => {
  const handleButtonClick = () => {
    const user = auth.currentUser;
    if (user) {
      console.log('Currently signed-in user:', user);
    } else {
      console.log('No user is signed in.');
    }
  };

  return (
    <div className="w-screen min-h-screen bg-slate-800 items-center justify-center flex">
      <div className='p-10 hidden md:block w-1/2'>
        Sign in
        <button
          className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="button"
          onClick={handleButtonClick}
        >
          Console
        </button>
      </div>
      <div className='p-10'>
        <Forms />
      </div>
    </div>
  );
};

export default signin;