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

<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
</svg>


export default SignUp;