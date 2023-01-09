import React, { useState } from "react";
import HomeVideo from "./Brokerage/img/homeVideo.mp4";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";
import { UserAuth } from "./Brokerage/AuthContextProvider";
import Cosmo from './Brokerage/img/clear.png';


function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const { signup, login } = UserAuth();
  

  
  async function signupFunc() {
    try {
      if (name) {
        await signup(newEmail, newPassword, name);
        navigate("/project");
      } else {
        toast.error("Enter a Name", {
          position: "top-right",
          autoClose: 4581,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 4581,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function loginFunc() {
    try {
      await login(email, password);
      // navigate("/project");
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 4581,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className="oeiwfhweiof">
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className=" ewegergregrgrege flex justify-end lg:justify-start lg:px-12">
            <img src={Cosmo} className='ehfehiefhu' />
          </div>
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
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter a email address..."
                    id="defdault-input"
                    required
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
                      ></a>
                    </div>
                  </div>
                  <input
                    type="Password"
                    placeholder="Enter a password..."
                    id="default-input"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    class="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                <div className="mt-10">
                  {/* <Link to={"/project"}> */}
                  <button
                    type="button"
                    onClick={() => loginFunc()}
                    class="text-white w-full p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    Log in
                  </button>
                  {/* </Link> */}
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-white text-center">
                Don't have an account ?
                <Popup
                  trigger={() => (
                    <a className="cursor-pointer ml-2 text-gray-500 hover:text-indigo-800">
                      Sign up
                    </a>
                  )}
                  modal
                >
                  {(close) => {
                    return (
                      <div className="bg-gray-800 shadow-xl  shadow sm:rounded-lg">
                        <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
                          <div className="ieufrhefw8h8efwefhw">
                            <h3 className="text-lg font-medium leading-6 text-white">
                              Sign Up
                            </h3>
                          </div>
                          <div>
                            <div>
                              <button
                                type="button"
                                onClick={() => signupFunc()}
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Create User
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <dl>
                            <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-white opacity-70">
                                Full Name
                              </dt>
                              <div>
                                <input
                                  type="text"
                                  required
                                  onChange={(event) =>
                                    setName(event.target.value)
                                  }
                                  id="defaulxt-input"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></input>
                              </div>
                            </div>
                            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-white opacity-70">
                                Email
                              </dt>
                              <>
                                <input
                                  type="email"
                                  required
                                  id="default-input"
                                  onChange={(event) =>
                                    setNewEmail(event.target.value)
                                  }
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></input>
                              </>
                            </div>
                            <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-white opacity-70">
                                Password
                              </dt>
                              <div>
                                <input
                                  type="password"
                                  id="default-input"
                                  required
                                  onChange={(event) =>
                                    setNewPassword(event.target.value)
                                  }
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></input>
                              </div>
                            </div>
                          </dl>
                        </div>
                      </div>
                    );
                  }}
                </Popup>
              </div>
              <div className="w-full flex justify-center mt-8 mb-8">
                <a href="http://brokerageforbuilders.com/">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Brokerage For Builders
                    </span>
                  </button>
                </a>
                <a href="https://www.cosmorealty.ca/">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Cosmopolitan Realty
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-screen">
          <video src={HomeVideo} autoPlay loop muted />
        </div>
      </div>
    </div>
  );
}

export default Login;
