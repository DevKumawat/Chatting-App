import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import Switcher from "./Switcher";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";


function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    setIsSettingsOpen(false);
  };

  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove("token");
    cookies.remove("userName");
    cookies.remove("fullName");
    cookies.remove("phoneNumber");
    cookies.remove("userId");
    cookies.remove("Password");
    cookies.remove("avatarUrl");

    toast.success("User Logged out Successfully" ,{
      position: "top-center",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);    
  };

  return (
    <>
      <div className="w-24 h-full  py-8 bg-cyan-600 dark:bg-black text-cyan-600 dark:text-white flex flex-col justify-between shadow-inner shadow-gray-950 ">
        <div>
          <motion.div
            className={`relative  w-10 h-10 mx-4 bg-cyan-100 dark:bg-cyan-600 flex justify-center items-center rounded-full shadow-inner shadow-gray-700 border	${
              activeIcon === "home" && "bg-green-200 "
            }`}
            onClick={() => handleIconClick("home")}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            {activeIcon === "home" && (
              <motion.div
                className="absolute w-1 h-8 bg-cyan-100 top-1 right-[47px] rounded-md"
                animate={{ rotate: 180 }}
                transition={{ from: 0, duration: 0.5 }}
              ></motion.div>
            )}
            <p className="text-2xl">
              <IoHomeOutline />
            </p>
          </motion.div>

          <motion.div
            className={`relative w-10 h-10 mx-4 bg-cyan-100 dark:bg-cyan-600 flex justify-center items-center my-4 rounded-full shadow-inner shadow-gray-700 border ${
              activeIcon === "user" && "bg-green-200"
            }`}
            onClick={() => handleIconClick("user")}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            {activeIcon === "user" && (
              <motion.div className="absolute w-1 h-8 bg-cyan-100 top-1 right-[47px] rounded-md"
              animate={{ rotate: 180 }}
              transition={{ from: 0, duration: 0.5 }}></motion.div>
            )}
            <p className="text-2xl">
              <FaUserAstronaut />
            </p>
          </motion.div>

          <motion.div
            className={`relative group w-10 h-10 mx-4 bg-cyan-100 dark:bg-cyan-600 flex justify-center items-center my-4 rounded-full shadow-inner shadow-gray-700 border ${
              activeIcon === "logout" && "bg-red-300"
            }`}
            onClick={() => {
              handleIconClick("logout");
              handleLogout();
            }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            {activeIcon === "logout" && (
              <div className="absolute w-1 h-8 bg-red-500 top-1 right-[47px] 
              rounded-md"
              ></div>
            )}
            <p className="text-2xl">
              <MdLogout />
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mx-4">
            <Switcher />
          </div>

          <motion.div
            className={`relative group flex justify-center items-center w-10 h-10 mx-4 bg-cyan-100 dark:bg-cyan-600 rounded-full  shadow-inner shadow-gray-700 border ${ activeIcon === "settings" && "bg-green-200"}` }
            onClick={() => {
              handleIconClick("settings");
              toggleSettings();
            }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            {activeIcon === "settings" && (
              <motion.div className="absolute w-1 h-8 bg-cyan-100 top-1 right-[44px] rounded-md"
              animate={{ rotate: 180 }}
              transition={{ from: 0, duration: 0.5 }}
              ></motion.div>
            )}
            <p className="text-2xl">
              <IoMdSettings />
            </p>
          </motion.div>
        </div>
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              className={
                "absolute h-[36rem] bg-sky-100 text-black dark:text-white p-4 bottom-14 left-[85px] transition-transform rounded-xl transition-all duration-300 ease-in-out active:scale-110 dark:bg-black  shadow-inner	shadow-gray-950 dark:shadow-cyan-600 z-10 "
              }
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 100, 0] }}
              exit={{ opacity: 0 }}
            >
              <div>
                <p className="text-xl font-bold tracking-wider px-2">
                  Settings
                </p>
              </div>

              <button className="w-full px-3 py-5 mb-3 flex justify-between">
                <div className=" text-start">
                  <p className="text-sm  font-semibold leading-8 tracking-[.01rem] ">
                    Account
                  </p>
                  <p className="text-sm  font-normal leading-4 tracking-[.01rem]">
                    Update your profile details
                  </p>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </button>
              <button className="w-full px-3 py-5 mb-3 flex justify-between">
                <div className=" text-start">
                  <p className="text-sm  font-semibold leading-8 tracking-[.01rem] ">
                    Privacy & Saftey
                  </p>
                  <p className=" text-sm  font-normal leading-4 tracking-[.01rem]">
                    Control your privacy settings
                  </p>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </button>
              <button className="w-full px-3 py-5 mb-3 flex justify-between">
                <div className=" text-start">
                  <p className="text-sm   font-semibold leading-8 tracking-[.01rem] ">
                    Appearance
                  </p>
                  <p className=" text-sm  font-normal leading-4 tracking-[.01rem]">
                    Customize the look and feel
                  </p>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </button>
              <button className="w-full px-3 py-5 mb-3 flex justify-between">
                <div className=" text-start">
                  <p className="text-sm  font-semibold leading-8 tracking-[.01rem] ">
                    Notifications
                  </p>
                  <p className="text-sm  font-normal leading-4 tracking-[.01rem]">
                    Customize notifications
                  </p>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster />

      </div>
    </>
  );
}

export default Sidebar;
