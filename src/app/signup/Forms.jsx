import React, { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Image from "next/image";
import logo from '.././assets/jaba.png';
import mcr from '.././assets/jaba.png';

const Forms = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className='w-full'>
      {showLogin ? <Signin /> : <Signup />}
      <div className="flex flex-col mt-4 text-sm text-center">
       
          {showLogin ? "Don't have an account?" : "Already have an account?"}
          <div onClick={toggleForm} className="text-blue-400 transition hover:underline cursor-pointer">
            {showLogin ? "Sign Up" : "Log In"}
          </div>
      
      </div>
    </div>
  );
};

export default Forms;