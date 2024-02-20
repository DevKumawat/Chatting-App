import { IoHomeOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function Sidebar() {
  return (
    <>
      <div className="w-full border-r h-full">
        <div className="w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full shadow-inner">
          <p className="text-2xl">
            <IoHomeOutline />
          </p>
        </div>

        <div className="w-10 h-10 mx-auto bg-white  flex justify-center items-center my-4 rounded-full">
          <p className="text-2xl">
            <FaUserAstronaut />
          </p>
        </div>
        <div className="w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full">
          <p className="text-2xl">
            <MdLogout />
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
