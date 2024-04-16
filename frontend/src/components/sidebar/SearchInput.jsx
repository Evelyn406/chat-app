import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();
    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }
        console.log(conversations);
        const conversation = conversations.find(
            (c) => c.username.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("No user found.");
            setSearch("");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            {/* <input type="text" placeholder="Search..." className="input input-bordered rounded-full" /> */}
            <label className="input input-bordered rounded-full flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search..." value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
            </label>
            <button type="submit" className="btn btn-circle bg-sky-500 text-white btn-outline">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg> */}
                <IoSearchSharp className="w-6 h-6 outline-none"/>
            </button>
        </form>
    </div>
  ) 
}

export default SearchInput;

// starter code
// const SearchInput = () => {
//     return (
//       <div>
//           <form className="flex items-center gap-2">
//               {/* <input type="text" placeholder="Search..." className="input input-bordered rounded-full" /> */}
//               <label className="input input-bordered rounded-full flex items-center gap-2">
//                   <input type="text" className="grow" placeholder="Search..." />
//               </label>
//               <button type="submit" className="btn btn-circle bg-sky-500 text-white btn-outline">
//                   {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
//                       <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
//                   </svg> */}
//                   <IoSearchSharp className="w-6 h-6 outline-none"/>
//               </button>
//           </form>
//       </div>
//     ) 
//   }