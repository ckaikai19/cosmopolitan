import React, { useState } from "react";
import "./styles/projectDetails.css";
import Cosmo from "./img/cosmo.png";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { HiUserAdd } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import Popup from "reactjs-popup";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContextProvider";
import { toast } from "react-toastify";

import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

function ProjectDetails() {
  const [editing, setEditing] = useState(false);
  const [products, setProjects] = useState(true);
  const [users, setUsers] = useState(true);

    const navigate = useNavigate();
    const { logout } = UserAuth();

    async function logoutFunc() {
      try {
        await logout();
        toast.info("logged Out", {
          position: "top-right",
          autoClose: 4581,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      } catch (err) {}
    }

  return (
    <div className="main-container">
      <div id="bar" class="sidebarwefgtwefew">
        <div className="w-full absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between flex">
          <div className="px-8">
            <div className="h-26 w-full flex justify-center mt-10">
              <img src={Logo} className="h-25 w-full" />
            </div>
            <ul className="mt-12">
              <li>
                <button
                  onClick={() => {
                    if (products) {
                      setProjects(false);
                    } else {
                      setProjects(true);
                    }
                  }}
                  type="button"
                  class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition  bg-gray-700 duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <BsHouseDoorFill />
                  <span
                    class="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    Projects
                  </span>
                  <svg
                    sidebar-toggle-item
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  class={products ? "py-2 space-y-2" : " hidden py-2 space-y-2"}
                >
                  <li>
                    <Link
                      to={"/project"}
                      class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      All Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/newproject"}
                      class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Create A Project
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mt-5">
                <button
                  onClick={() => {
                    if (users) {
                      setUsers(false);
                    } else {
                      setUsers(true);
                    }
                  }}
                  type="button"
                  class="flex items-center p-2 w-full bg-gray-700 text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <FaRegUserCircle />
                  <span
                    class="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    Users
                  </span>
                  <svg
                    sidebar-toggle-item
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-example"
                  class={users ? "py-2 space-y-2" : " hidden py-2 space-y-2"}
                >
                  <li>
                    <Link
                      to={"/allusers"}
                      class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      All Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/newuser"}
                      class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Create A User
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="px-8 border-t border-gray-700">
            <ul className="w-full space-y-2 flex items-center justify-between bg-gray-800">
              <div className="flex justify-center mt-5 mb-4 w-full">
                <div className="relative ">
                  {/* <Link to={"/"}> */}
                  <button
                    type="button"
                    onClick={() => logoutFunc()}
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Log out
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="view-project-container">
        <div className="view-project-head-gduiuewfguewifgeif">
          <h1 className="view-project-head-tiewewft">Project 1</h1>
          <Popup
            trigger={() => (
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            )}
            modal
          >
            {(close) => {
              return (
                <div class="rounded-lg bg-white p-8 shadow-2xl">
                  <h2 class="text-lg font-bold">
                    Are you sure you want to delete this Project?
                  </h2>

                  <div class="mt-8 flex items-center justify-end text-xs">
                    <button
                      type="button"
                      class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                    >
                      No, go back
                    </button>
                  </div>
                </div>
              );
            }}
          </Popup>
        </div>

        <div className="project-details-contststs">
          <div className="coiowejiewje">
            <div className="project-details-left-shssdd">
              <div className="bg-gray-800 shadow-xl  shadow sm:rounded-lg">
                <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-white">
                      Project Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                      The project's details and documentation
                    </p>
                  </div>
                  <div>
                    {editing ? (
                      <div>
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Confirm Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditing(false)}
                          class="text-gray-900   focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white  focus:outline-none "
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditing(true)}
                        class="text-white bg-lime-700 hover:bg-lime-700 focus:ring-4 focus:ring-lime-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-700 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-700"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <dl>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Project Name
                      </dt>
                      {editing ? (
                        <div>
                          <input
                            type="text"
                            id="default-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          ></input>
                        </div>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          Testing Project 1
                        </dd>
                      )}
                    </div>
                    <div
                      className={
                        editing
                          ? "px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"
                          : "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      }
                    >
                      <dt className="text-sm font-medium text-white opacity-70">
                        Project Images
                      </dt>
                      {editing ? (
                        <div>
                          <div class="flex items-center justify-center w-full">
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  aria-hidden="true"
                                  class="w-10 h-10 mb-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span class="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                  PDF, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0 flex flex-wrap">
                          <span class="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center mr-1 mt-1 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                            <img
                              class="rounded-full w-9 h-9 max-w-none"
                              alt="A"
                              src={Cosmo}
                            />
                            <span class="flex items-center px-3 py-2">
                              Image 1
                            </span>
                          </span>
                          <span class="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center mr-1 mt-1 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                            <img
                              class="rounded-full w-9 h-9 max-w-none"
                              alt="A"
                              src={Cosmo}
                            />
                            <span class="flex items-center px-3 py-2">
                              Image 2
                            </span>
                          </span>
                          <span class="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center mr-1 mt-1 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                            <img
                              class="rounded-full w-9 h-9 max-w-none"
                              alt="A"
                              src={Cosmo}
                            />
                            <span class="flex items-center px-3 py-2">
                              Image 3
                            </span>
                          </span>
                          <span class="rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center mr-1 mt-1 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                            <img
                              class="rounded-full w-9 h-9 max-w-none"
                              alt="A"
                              src={Cosmo}
                            />
                            <span class="flex items-center px-3 py-2">
                              Image 4
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="bg-gray-700  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Assigned Builder
                      </dt>
                      {editing ? (
                        <select
                          id="default"
                          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Select a Builder</option>
                          <option value="US">Builder 1</option>
                          <option value="CA">Builder 2</option>
                          <option value="FR">Builder 3</option>
                          <option value="DE">Builder 4</option>
                        </select>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          Builder Company 1
                        </dd>
                      )}
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Property Price
                      </dt>
                      {editing ? (
                        <>
                          <input
                            type="number"
                            id="default-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          ></input>
                        </>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          $620,000
                        </dd>
                      )}
                    </div>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Property Type
                      </dt>

                      {editing ? (
                        <select
                          id="default"
                          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Select a Property Type</option>
                          <option value="US">Property Type 1</option>
                          <option value="CA">Property Type 2</option>
                          <option value="FR">Property Type 3</option>
                          <option value="DE">Property Type 4</option>
                        </select>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          Residential
                        </dd>
                      )}
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Floor Plans
                      </dt>
                      {editing ? (
                        <input
                          class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="large_size"
                          type="file"
                          placeholder="Upload"
                        ></input>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          <ul
                            role="list"
                            className="divide-y divide-gray-200 rounded-md border border-gray-200"
                          >
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  floor_plants_1.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  floor_plans_2.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      )}
                    </div>
                    <div className="bg-gray-700  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Legal Documents
                      </dt>

                      {editing ? (
                        <input
                          class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="large_size"
                          type="file"
                        ></input>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          <ul
                            role="list"
                            className="divide-y divide-gray-200 rounded-md border border-gray-200"
                          >
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  Legal_document_1.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  legal_document_1.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="project-details-right-shssdd">
              <div className="bg-gray-800 shadow-xl shadow sm:rounded-lg">
                <div>
                  <dl>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Payment Documents
                      </dt>

                      {editing ? (
                        <input
                          class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="large_size"
                          type="file"
                        ></input>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          <ul
                            role="list"
                            className="divide-y divide-gray-200 rounded-md border border-gray-200"
                          >
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  Legal_document_1.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      )}
                    </div>
                    <div className="bg-gray-700  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Project Location
                      </dt>

                      {editing ? (
                        <div>
                          <input
                            type="text"
                            id="default-input"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          ></input>
                        </div>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          1987 Morningview Lane, Steamboat Rock
                        </dd>
                      )}
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Supporting Documents
                      </dt>

                      {editing ? (
                        <input
                          class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="large_size"
                          type="file"
                        ></input>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          <ul
                            role="list"
                            className="divide-y divide-gray-200 rounded-md border border-gray-200"
                          >
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  supporting_doucment_1.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                              <div className="flex w-0 flex-1 items-center">
                                <PaperClipIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 w-0 flex-1 truncate">
                                  supporting_document_2.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-lime-500 hover:text-lime-900"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      )}
                    </div>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Assigend Agent
                      </dt>

                      {editing ? (
                        <select
                          id="default"
                          class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Select a Agent</option>
                          <option value="US">Agent 1</option>
                          <option value="CA">Agent 2</option>
                          <option value="FR">Agent 3</option>
                          <option value="DE">Agent 4</option>
                        </select>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          Agent 1
                        </dd>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-gray-800 shadow-xl shadow-xl sm:rounded-lg">
                <div className="px-4 flex justify-between py-5 mt-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-white">
                    Clients
                  </h3>

                  <Popup
                    trigger={() => (
                      <HiUserAdd className="text-2xl cursor-pointer hover:text-emerald-600  text-white" />
                    )}
                    modal
                  >
                    {(close) => {
                      return (
                        <div class="rounded-lg bg-white p-8 shadow-2xl">
                          <div className="flex justify-center">
                            <h2 class="text-lg font-bold">Add A Client</h2>
                          </div>

                          <div class="flex justify-center mt-5">
                            <div class="mb-3 xl:w-96">
                              <select
                                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                placeholder="Testing"
                              >
                                <option value="5">Select</option>
                                <option value="1">Client 1</option>
                                <option value="2">Client 2</option>
                                <option value="3">Client 3</option>
                              </select>
                            </div>
                          </div>

                          <div class="mt-8 flex items-center justify-end text-xs">
                            <button
                              type="button"
                              class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                            >
                              Add
                            </button>
                            <button
                              type="button"
                              onClick={close}
                              class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                            >
                              Go Back
                            </button>
                          </div>
                        </div>
                      );
                    }}
                  </Popup>
                </div>
              </div>
              <div class="overflow-x-auto shadow-xl">
                <table class="min-w-full divide-y divide-gray-200 text-sm">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-grey-800">
                        Name
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-grey-800">
                        Address
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-grey-800">
                        Status
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-grey-800">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody class="bg-gray-700 rounded">
                    <tr>
                      <td class=" whitespace-nowrap px-4 py-2 font-medium text-white opacity-70">
                        John Doe
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        123 Parkway Drive
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <strong class="rounded bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                          Status 2
                        </strong>
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <div className="flex">
                          <Link to={"/client/1"}>
                            <button
                              type="button"
                              class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Details
                            </button>
                          </Link>

                          <Popup
                            trigger={() => (
                              <FaTrashAlt className="text-2xl ml-2 relative text-white cursor-pointer hover:text-slate-500" />
                            )}
                            modal
                          >
                            {(close) => {
                              return (
                                <div class="rounded-lg bg-white p-8 shadow-2xl">
                                  <h2 class="text-lg font-bold">
                                    Are you sure you want to delete this client?
                                  </h2>

                                  <div class="mt-8 flex items-center justify-end text-xs">
                                    <button
                                      type="button"
                                      class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                                    >
                                      Yes, I'm sure
                                    </button>
                                    <button
                                      type="button"
                                      onClick={close}
                                      class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                                    >
                                      No, go back
                                    </button>
                                  </div>
                                </div>
                              );
                            }}
                          </Popup>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class=" whitespace-nowrap px-4 py-2 font-medium text-white opacity-70">
                        Mike Steven
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        456 Parkway Drive
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <strong class="rounded bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                          Status 4
                        </strong>
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <div className="flex">
                          <Link to={"/client/1"}>
                            <button
                              type="button"
                              class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Details
                            </button>
                          </Link>

                          <Popup
                            trigger={() => (
                              <FaTrashAlt className="text-2xl ml-2 relative text-white cursor-pointer hover:text-slate-500" />
                            )}
                            modal
                          >
                            {(close) => {
                              return (
                                <div class="rounded-lg bg-white p-8 shadow-2xl">
                                  <h2 class="text-lg font-bold">
                                    Are you sure you want to delete this client?
                                  </h2>

                                  <div class="mt-8 flex items-center justify-end text-xs">
                                    <button
                                      type="button"
                                      class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                                    >
                                      Yes, I'm sure
                                    </button>
                                    <button
                                      type="button"
                                      onClick={close}
                                      class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                                    >
                                      No, go back
                                    </button>
                                  </div>
                                </div>
                              );
                            }}
                          </Popup>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class=" whitespace-nowrap px-4 py-2 font-medium text-white opacity-70">
                        Samantha Cole
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        789 Parkway Drive
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <strong class="rounded bg-gray-800 px-3 py-1.5 text-xs font-medium text-white">
                          Status 3
                        </strong>
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-white">
                        <div className="flex">
                          <Link to={"/client/1"}>
                            <button
                              type="button"
                              class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Details
                            </button>
                          </Link>

                          <Popup
                            trigger={() => (
                              <FaTrashAlt className="text-2xl ml-2 relative text-white cursor-pointer hover:text-slate-500" />
                            )}
                            modal
                          >
                            {(close) => {
                              return (
                                <div class="rounded-lg bg-white p-8 shadow-2xl">
                                  <h2 class="text-lg font-bold">
                                    Are you sure you want to delete this client?
                                  </h2>

                                  <div class="mt-8 flex items-center justify-end text-xs">
                                    <button
                                      type="button"
                                      class="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                                    >
                                      Yes, I'm sure
                                    </button>
                                    <button
                                      type="button"
                                      onClick={close}
                                      class="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                                    >
                                      No, go back
                                    </button>
                                  </div>
                                </div>
                              );
                            }}
                          </Popup>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-800 mt-8 mb-8 rounded shadow-xl shadow sm:rounded-lg">
                <div>
                  <dl>
                    <div
                      className={
                        editing
                          ? "bg-gray-700 rounded  px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6"
                          : "bg-gray-700 rounded  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                      }
                    >
                      <dt className="text-sm font-medium text-white opacity-70">
                        Additional Comments
                      </dt>
                      {editing ? (
                        <div className="w-full">
                          <textarea
                            id="message"
                            rows="4"
                            class="block h-150px p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur"
                          ></textarea>
                        </div>
                      ) : (
                        <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </dd>
                      )}
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetails;
