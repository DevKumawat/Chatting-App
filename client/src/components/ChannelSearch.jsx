import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function ChannelSearch() {
      const [query , setQuery] = useState("")
      const [ loading , setLoading] = useState(false)

      const getChannels = async ()=>{
        try {
                // to do
        } catch (error) {
            setQuery("");
        }

      }

      const onSearch = (e)=>{
        e.preventDefault();
        setQuery(e.target.value)
        setLoading(true);
        getChannels(e.target.value)
      }
    return (
        <>
        <div className="flex items-center border-2 dark:border-sky-500 rounded-lg p-1 mt-6 ">
            <div className="w-6 mx-2  border-r-[1px] dark:border-sky-500 ">
            <p>
            <FaSearch />
            </p>
            </div>
            <div >
            <input className="bg-sky-500 dark:bg-black outline-none border-0 placeholder:italic placeholder:text-white dark:placeholder:text-sky-500" type="text" placeholder="Search or start a new chat" value={query} onChange={onSearch} />
            </div>
        </div>
        </>
      );
}

export default ChannelSearch;