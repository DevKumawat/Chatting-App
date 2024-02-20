import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { IoLogIn } from "react-icons/io5";

const initialState = {
  fullName: "",
  userName: "",
  phoneNumber: "",
  avatarUrl: "",
  password: "",
  confirmPassword: "",
};

const AuthCheck = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log("hello");
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const {fullName , userName , password , phoneNumber , avatarUrl } = form ;
      const URL = "http://localhost:5000/auth";
      const {data : {token , userId , hashedPassword} } = await axios.post(`${URL}/${isSignUp ? "signup" : "login"}`, {
        userName , password , fullName , phoneNumber , avatarUrl 
      })
        
    
  };
  
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/brick-wall-painted-white_1194-7526.jpg?w=740&t=st=1708082336~exp=1708082936~hmac=b850584730a08c268a3896f5b4fb839fbdbd9126e11cc67712a04dcda7c2c741')]  h-screen  flex items-center justify-center">
      <div className="flex justify-around items-center bg-sky-400 w-3/5 h-72 rounded-md shadow-lg shadow-gray-500/100 ">
        <div className="text-white font-bold">
          <p>
            {isSignUp ? "Already have an account ?" : "Don't have an account ?"}
          </p>
          <span onClick={switchMode}> {isSignUp ? "Sign-in" : "Sign-up"}</span>
        </div>

        {isSignUp ? (
          <div
            className="w-96 h-auto
	 bg-white shadow-2xl rounded-md flex flex-col justify-around "
          >
            <div className="text-center my-4 ">
              <p className="text-sky-500 font-bold">Sign-up</p>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="text-slate-500 ml-11">
                    Full Name :
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="userName" className="text-slate-500 ml-11">
                    User Name :
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="text-slate-500 ml-11">
                    Phone Number :
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="avatarUrl" className="text-slate-500 ml-11">
                    Avatar Url :
                  </label>
                  <input
                    type="text"
                    name="avatarUrl"
                    placeholder="Avatar Url"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-slate-500 ml-11">
                    Password :
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-slate-500 ml-11"
                  >
                    {" "}
                    Confirm Password :
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div className="text-center">
                  <button className="w-28 h-8 text-white rounded-full bg-sky-500 my-6 ">
                    Sign-up
                  </button>
                </div>

              </form>
            </div>
          </div>
        ) : (
          <div
            className="w-96 h-96
	 bg-white shadow-2xl rounded-md flex flex-col justify-center "
          >
            <div className="text-center">
              <p className=" text-sky-500 font-bold">Sign-in</p>
            </div>

            <div className=" h-4/6 flex flex-col justify-center ">
              <form onSubmit={handleSubmit} >

                <div>

                <div>
                  <label htmlFor="userName" className="text-slate-500 ml-11">
                    User Name :
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="text-slate-500 ml-11">
                    Password :
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    className="ml-9 block w-4/5 px-3 py-1 bg-white border-b-[1px] border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-slate-300 invalid:text-pink-600
      focus:invalid:border-slate-300 focus:invalid:border-slate-300"
                  />
                </div>

                </div>

                <div className="text-center ">
                  <button className="  w-28 h-8 text-white rounded-full bg-sky-500 mt-12">
                    Sign-in
                  </button>
                </div>

                
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCheck;
