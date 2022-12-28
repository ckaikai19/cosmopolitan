import React from "react";
import Cosmo from "./Brokerage/img/black.png";
import { Link } from "react-router-dom";



function Login() {
  return (
    <div className="oeiwfhweiof">
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12  flex justify-center lg:justify-start lg:px-12"></div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-white font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Log in
            </h2>
            <div className="mt-12">
              <form>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    Email Address
                  </div>

                  <input
                    type="text"
                    placeholder="Enter a email address..."
                    id="default-input"
                    class="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-white tracking-wide">
                      Password
                    </div>
                    <div>
                      <a
                        className="text-xs font-display font-semibold text-gray-500 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    type="Password"
                    placeholder="Enter a password..."
                    id="default-input"
                    class="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                <div className="mt-10">
                  <Link to={'/project'}>
                    <button
                      type="button"
                      class="text-white w-full p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    >
                      Log in
                    </button>
                  </Link>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-white text-center">
                Don't have an account ?
                <a className="cursor-pointer ml-2 text-gray-500 hover:text-indigo-800">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex items-center justify-center bg-black flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
            <img src={Cosmo} className="w-5/6 ewrfewrfewfwe mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
