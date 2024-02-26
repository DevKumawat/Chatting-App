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
        <div className="flex items-center border-2 border-cyan-600 rounded-3xl p-1 pr-4  mt-6  text-black dark:text-white">
            <div className="w-6 mx-2  border-r-[1px] border-black dark:border-white">
            <p>
            <FaSearch />
            </p>
            </div>
            <div >
            <input className="bg-sky-100 dark:bg-black outline-none border-0 placeholder:italic placeholder:text-black dark:placeholder:text-white " type="text" placeholder="Search or start a new chat" value={query} onChange={onSearch} />
            </div>
        </div>
        </>
      );
}

export default ChannelSearch;