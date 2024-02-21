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
        <div className="flex items-center border-2 rounded-lg p-1 mt-6 ">
            <div className="w-6 mx-2 border-right-2 border-r-[1px]">
            <p>
            <FaSearch />
            </p>
            </div>
            <div >
            <input className="bg-sky-500 outline-none border-0 placeholder:italic placeholder:text-white" type="text" placeholder="Search or start a new chat" value={query} onChange={onSearch} />
            </div>
        </div>
        </>
      );
}

export default ChannelSearch;