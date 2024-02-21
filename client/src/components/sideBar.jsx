import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <>
      <div className="w-full border-4 border-sky-600 h-full mb-2 py-4 bg-gradient-to-b from-white via-white to-sky-400  text-white flex flex-col justify-between	">
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

        <div className="w-10 h-10 mx-auto bg-white text-sky-500  flex justify-center items-center  rounded-full shadow-inner border-2 border-sky-600 ">
          <p className="text-2xl">
            <IoMdSettings />
          </p>
        </div>

      </div>
    </>
  );
}

export default Sidebar;
