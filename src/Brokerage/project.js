import React, {useState} from 'react'
import './styles/project.css';
import Cosmo from './img/cosmo.png';
import { GiHouse } from "react-icons/gi";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { RiCloseCircleFill } from "react-icons/ri";
import Popup from "reactjs-popup";
import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Project() {
    const [products, setProjects] = useState(true);
    const [users, setUsers] = useState(true);

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
                  class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
                  class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
                  <Link to={"/"}>
                    <button
                      type="button"
                      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      Log out
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="view-project-container">
        <div className="view-project-head-gduiuewfguewifgeif">
          <h1 className="view-project-head-tiewewft">All Projects</h1>
          <Link to={"/newuser"}>
            <h1 className="view-project-head-butt">Add New</h1>
          </Link>
        </div>

        <div className="view-project-body">
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="w-full rounded-t-lg" src={Cosmo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Testing 1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uploaded 3 days ago
              </p>
              <Link
                to={`/project/1`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Project;