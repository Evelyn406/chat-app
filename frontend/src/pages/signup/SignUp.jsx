import React from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="h-full w-full p-6 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Sign Up
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form>
                <div className="mt-5">
                    <label className="input input-bordered flex items-center gap-2  bg-gray-800 h-11">
                        <input type="text" className="grow" placeholder="Full Name" />
                    </label>
                </div>
                <div className="mt-3">
                    <label className="input input-bordered flex items-center gap-2  bg-gray-800 h-11">
                        <input type="text" className="grow" placeholder="Username" />
                    </label>
                </div>
                <div className="mt-3">
                    <label className="input input-bordered flex items-center gap-2 bg-gray-800 h-11">
                        <input type="password" className="grow" placeholder="Password" />
                    </label>
                </div>
                <div className="mt-3">
                    <label className="input input-bordered flex items-center gap-2 bg-gray-800 h-11">
                        <input type="password" className="grow" placeholder="Confirm Password" />
                    </label>
                </div>
                <GenderCheckbox />
                <div className="mt-1">
                    <button className="btn btn-outline btn-block btn-sm">Sign Up</button>
                </div>
                <div className="flex justify-center mt-3">
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-w inline-block">
                        {"Already have an account?"}
                    </a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;

// Initial version:
// const SignUp = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="h-full w-full p-6 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//               <h1 className="text-3xl font-semibold text-center text-gray-300">
//                   Sign Up
//                   <span className="text-blue-500"> ChatApp</span>
//               </h1>
//               <form>
//                   <div className="mt-5">
//                       <label className="input input-bordered flex items-center gap-2  bg-gray-800 h-11">
//                           <input type="text" className="grow" placeholder="Full Name" />
//                       </label>
//                   </div>
//                   <div className="mt-3">
//                       <label className="input input-bordered flex items-center gap-2  bg-gray-800 h-11">
//                           <input type="text" className="grow" placeholder="Username" />
//                       </label>
//                   </div>
//                   <div className="mt-3">
//                       <label className="input input-bordered flex items-center gap-2 bg-gray-800 h-11">
//                           <input type="password" className="grow" placeholder="Password" />
//                       </label>
//                   </div>
//                   <div className="mt-3">
//                       <label className="input input-bordered flex items-center gap-2 bg-gray-800 h-11">
//                           <input type="password" className="grow" placeholder="Confirm Password" />
//                       </label>
//                   </div>
//                   <GenderCheckbox />
//                   <div className="mt-1">
//                       <button className="btn btn-outline btn-block btn-sm">Sign Up</button>
//                   </div>
//                   <div className="flex justify-center mt-3">
//                       <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-w inline-block">
//                           {"Already have an account?"}
//                       </a>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }