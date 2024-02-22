import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import Switcher from "./Switcher";

function Sidebar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <div className="w-full border-4 border-sky-600 h-full mb-2 py-4 bg-gradient-to-b from-white via-white to-sky-500 dark:from-black dark:via-black dark:to-sky-500 text-white flex flex-col justify-between  ">
        <div>
          <div className="w-10 h-10 mx-auto bg-sky-500 	 flex justify-center items-center  rounded-full shadow-inner  ">
            <p className="text-2xl">
              <IoHomeOutline />
            </p>
          </div>

          <div className="w-10 h-10 mx-auto bg-sky-500	  flex justify-center items-center my-4 rounded-full">
            <p className="text-2xl">
              <FaUserAstronaut />
            </p>
          </div>
          <div className="w-10 h-10 mx-auto bg-sky-500	 flex justify-center items-center my-4 rounded-full">
            <p className="text-2xl">
              <MdLogout />
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className=" ">
            <Switcher />
          </div>

          <div
            className=" flex justify-center items-center w-10 h-10 mx-auto bg-white text-sky-500 rounded-full shadow-inner border-2 border-sky-600 "
            onClick={toggleSettings}
          >
            <p className="text-2xl">
              <IoMdSettings />
            </p>
          </div>
        </div>

        {isSettingsOpen && (
          <div
            className={
              "absolute h-[36rem] w-[25rem] bg-stone-100	 text-sky-500 p-4 bottom-14 left-[89px] transition-transform rounded-xl transition-all duration-300 ease-in-out active:scale-110 dark:bg-black dark:text-sky-500  "
            }
          >
            <p>Setting 1</p>
            <p>Setting 2</p>
            <p>Setting 3</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
