import React, { useState, useEffect } from "react";
import "./styles/project.css";
import Cosmo from "./img/cosmo.png";
import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContextProvider";
import { toast } from "react-toastify";

import { getDocs, collection} from "firebase/firestore";
import { db } from "../firebase-config";


function Project() {
  const [products, setProjects] = useState(true);
  const [users, setUsers] = useState(true);
  const navigate = useNavigate();
  
  const { logout, userId } = UserAuth();
  const projectCollectionRef = collection(db, `Users/${userId}/projects`);
  const [allProjects, setAllProjects] = useState([]);

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
      navigate('/');
    } catch (err) {}
  }

  useEffect(() => {
    async function getProjects() {
      let arr = [];
      const docsSnap = await getDocs(projectCollectionRef);

      docsSnap.forEach(function (doc) {
        arr.push({ id: doc.id, ...doc.data() });
      });

      setAllProjects(arr)

    }

    getProjects();
  }, [])

  // console.log(allProjects)


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
          <h1 className="view-project-head-tiewewft">All Projects</h1>
          <Link to={"/newproject"}>
            <button
              type="button"
              class="py-3 px-5 mr-8 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add New +
            </button>
          </Link>
        </div>
        <div className="i3hfeoihfoiefho">
          <div className="view-project-body orgjrtopjgrpogjrpojrpojrtop">
            {allProjects.length > 0 ? (
              allProjects.map((project) => (
                <div className="iojuioijoefwijo mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="w-full erreergerggr rounded-t-lg"
                      src={Cosmo}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 wefwefwefew text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.projectName}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {project.projectLocation}
                    </p>
                    <Link
                      to={`/project/${project.id}`}
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
              ))
            ) : (
              <div className="ioewioeieoiooij">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 300"
                  width="406"
                  height="306"
                  class="illustration styles_illustrationTablet__1DWOa"
                >
                  <g
                    id="_296_empty_inbox_flatline"
                    data-name="#296_empty_inbox_flatline"
                  >
                    <path
                      d="M261,88.14H158.22v80.42H287.93V113C287.93,99.29,275.87,88.14,261,88.14Z"
                      fill="#68e1fd"
                    ></path>
                    <path
                      d="M287.93,169H158.22a.46.46,0,0,1-.45-.46V88.14a.45.45,0,0,1,.45-.45H261c15.1,0,27.39,11.37,27.39,25.34v55.53A.47.47,0,0,1,287.93,169Zm-129.25-.92H287.47V113c0-13.47-11.87-24.43-26.47-24.43H158.68Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M185.15,114v54.53H131.29V114a25.71,25.71,0,0,1,6.82-17.51,25.83,25.83,0,0,1,19.07-8.38h2.3a25.91,25.91,0,0,1,24,16.65,23.23,23.23,0,0,1,.94,3,.07.07,0,0,1,0,0,1.29,1.29,0,0,1,.07.31A25.37,25.37,0,0,1,185.15,114Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M185.15,169.07H131.29a.51.51,0,0,1-.5-.5V114a26.4,26.4,0,0,1,26.39-26.39h2.3a26.42,26.42,0,0,1,24.44,17,22.83,22.83,0,0,1,1,3h0v0a1.77,1.77,0,0,1,.08.4,25.14,25.14,0,0,1,.69,5.93v54.54A.5.5,0,0,1,185.15,169.07Zm-53.36-1h52.86V114a24.8,24.8,0,0,0-.67-5.77,1.16,1.16,0,0,0,0-.24l0-.11h0A24.71,24.71,0,0,0,183,105a25.44,25.44,0,0,0-23.52-16.33h-2.29A25.35,25.35,0,0,0,131.79,114Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M131.3,168.56h53.85a0,0,0,0,1,0,0v47.72a24.54,24.54,0,0,1-24.54,24.54h-4.78a24.54,24.54,0,0,1-24.54-24.54V168.56A0,0,0,0,1,131.3,168.56Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M160.61,241.28h-4.77a25,25,0,0,1-25-25V168.56a.47.47,0,0,1,.46-.46h53.85a.47.47,0,0,1,.46.46v47.72A25,25,0,0,1,160.61,241.28ZM131.75,169v47.26a24.11,24.11,0,0,0,24.09,24.08h4.77a24.1,24.1,0,0,0,24.08-24.08V169Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M171.53,212.29H144.92a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h26.61a.5.5,0,0,1,.5.5A.5.5,0,0,1,171.53,212.29Z"
                      fill="#d1d3d4"
                    ></path>
                    <circle
                      cx="214.06"
                      cy="123.45"
                      r="5.15"
                      fill="#fff"
                    ></circle>
                    <path
                      d="M214.06,129.05a5.61,5.61,0,1,1,5.6-5.6A5.61,5.61,0,0,1,214.06,129.05Zm0-10.29a4.69,4.69,0,1,0,4.69,4.69A4.69,4.69,0,0,0,214.06,118.76Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M214.06,118.76a.47.47,0,0,1-.46-.46V54.94a.46.46,0,0,1,.46-.45.45.45,0,0,1,.45.45V118.3A.46.46,0,0,1,214.06,118.76Z"
                      fill="#231f20"
                    ></path>
                    <polygon
                      points="232.99 59.73 214.06 68.25 214.06 54.94 232.99 54.94 232.99 59.73"
                      fill="#fff"
                    ></polygon>
                    <path
                      d="M214.06,68.75a.5.5,0,0,1-.27-.08.48.48,0,0,1-.23-.42V54.94a.5.5,0,0,1,.5-.5H233a.51.51,0,0,1,.5.5v4.78a.51.51,0,0,1-.3.46L214.26,68.7A.46.46,0,0,1,214.06,68.75Zm.5-13.31v12l17.93-8.07v-4ZM233,59.72h0Z"
                      fill="#231f20"
                    ></path>
                    <rect
                      x="203.13"
                      y="168.56"
                      width="21.7"
                      height="5.18"
                      fill="#fff"
                    ></rect>
                    <path
                      d="M224.83,174.19h-21.7a.46.46,0,0,1-.46-.45v-5.18a.47.47,0,0,1,.46-.46h21.7a.47.47,0,0,1,.46.46v5.18A.46.46,0,0,1,224.83,174.19Zm-21.24-.91h20.78V169H203.59Z"
                      fill="#231f20"
                    ></path>
                    <polyline
                      points="206.62 246.23 206.62 173.74 219.68 173.74 219.68 246.23"
                      fill="#fff"
                    ></polyline>
                    <path
                      d="M219.68,246.69a.46.46,0,0,1-.45-.46v-72H207.07v72a.46.46,0,1,1-.91,0V173.74a.46.46,0,0,1,.46-.46h13.06a.46.46,0,0,1,.46.46v72.49A.46.46,0,0,1,219.68,246.69Z"
                      fill="#231f20"
                    ></path>
                    <polygon
                      points="206.62 185.06 219.68 194.67 219.68 173.74 206.62 173.74 206.62 185.06"
                      fill="#231f20"
                    ></polygon>
                    <path
                      d="M219.68,195.17a.5.5,0,0,1-.29-.09l-13.07-9.61a.51.51,0,0,1-.2-.4V173.74a.5.5,0,0,1,.5-.5h13.06a.5.5,0,0,1,.5.5v20.93a.49.49,0,0,1-.27.45A.46.46,0,0,1,219.68,195.17Zm-12.56-10.36,12.06,8.88V174.24H207.12Z"
                      fill="#231f20"
                    ></path>
                    <path
                      d="M162.84,136.21h-.09l-1-.18a.5.5,0,1,1,.17-1l1,.17a.51.51,0,0,1,.4.59A.49.49,0,0,1,162.84,136.21Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M94.88,169.61a.48.48,0,0,1-.2,0,.5.5,0,0,1-.26-.66c.27-.62.56-1.23.86-1.84a.49.49,0,0,1,.67-.22.5.5,0,0,1,.23.67c-.3.59-.58,1.19-.84,1.79A.5.5,0,0,1,94.88,169.61Zm1.8-3.58a.55.55,0,0,1-.25-.07.51.51,0,0,1-.19-.68c.34-.59.69-1.17,1.06-1.74a.5.5,0,0,1,.84.54c-.36.56-.7,1.12-1,1.69A.49.49,0,0,1,96.68,166Zm2.17-3.38a.55.55,0,0,1-.3-.09.51.51,0,0,1-.11-.7c.4-.55.81-1.09,1.24-1.61a.5.5,0,0,1,.7-.08.5.5,0,0,1,.08.7c-.42.52-.82,1-1.21,1.58A.49.49,0,0,1,98.85,162.65Zm21.85-.07h0a6.37,6.37,0,0,1-2.1-.53.5.5,0,0,1,.4-.92,5.19,5.19,0,0,0,1.77.45.49.49,0,0,1,.46.53A.49.49,0,0,1,120.7,162.58Zm2-.24a.5.5,0,0,1-.15-1,3.87,3.87,0,0,0,1.51-.88.5.5,0,0,1,.71,0,.51.51,0,0,1,0,.71,4.88,4.88,0,0,1-1.92,1.12Zm-5.62-1.3a.46.46,0,0,1-.32-.11,8.9,8.9,0,0,1-1.47-1.53.51.51,0,0,1,.1-.7.49.49,0,0,1,.7.1,8.41,8.41,0,0,0,1.3,1.36.49.49,0,0,1,.07.7A.49.49,0,0,1,117.06,161Zm8.24-1.45h-.08a.51.51,0,0,1-.42-.57,2.38,2.38,0,0,0,0-.46,3.88,3.88,0,0,0-.23-1.27.5.5,0,1,1,1-.33,5.09,5.09,0,0,1,.28,1.6,4.44,4.44,0,0,1,0,.62A.5.5,0,0,1,125.3,159.59Zm-23.93-.05a.55.55,0,0,1-.34-.13.5.5,0,0,1,0-.71c.45-.5.93-1,1.41-1.47a.5.5,0,0,1,.7.72c-.47.46-.93.93-1.37,1.42A.5.5,0,0,1,101.37,159.54Zm13.29-1.67a.5.5,0,0,1-.46-.29,8.64,8.64,0,0,1-.63-2,.5.5,0,0,1,1-.18,7.46,7.46,0,0,0,.55,1.8.5.5,0,0,1-.25.66A.51.51,0,0,1,114.66,157.87Zm-10.41-1.13a.5.5,0,0,1-.32-.88c.53-.44,1.07-.87,1.62-1.25a.49.49,0,0,1,.69.12.5.5,0,0,1-.12.7c-.52.36-1,.77-1.55,1.2A.48.48,0,0,1,104.25,156.74Zm19.88-.88a.49.49,0,0,1-.4-.2,6.71,6.71,0,0,0-1.22-1.22l-.11-.08a.5.5,0,0,1-.1-.7.51.51,0,0,1,.7-.11l.12.09a7.54,7.54,0,0,1,1.4,1.42.49.49,0,0,1-.39.8Zm-16.6-1.42a.49.49,0,0,1-.44-.26.51.51,0,0,1,.19-.68,18.57,18.57,0,0,1,1.84-.92.5.5,0,0,1,.4.91c-.58.26-1.17.55-1.75.88A.42.42,0,0,1,107.53,154.44ZM114,154h0a.51.51,0,0,1-.47-.53,11.48,11.48,0,0,1,.35-2.07.5.5,0,0,1,.61-.36.52.52,0,0,1,.36.36.49.49,0,0,1,.35-.15h.32a14.43,14.43,0,0,1,1.75.1.51.51,0,0,1,.44.56.5.5,0,0,1-.56.43,14.57,14.57,0,0,0-1.63-.09h-.3a.52.52,0,0,1-.46-.27,10.49,10.49,0,0,0-.23,1.56A.5.5,0,0,1,114,154Zm7-.54a.54.54,0,0,1-.22,0,10.67,10.67,0,0,0-1.79-.68.5.5,0,0,1,.27-1,12.8,12.8,0,0,1,2,.75.5.5,0,0,1,.23.66A.51.51,0,0,1,121,153.42Zm-9.79-.58a.49.49,0,0,1-.48-.36.5.5,0,0,1,.33-.62,14.05,14.05,0,0,1,2-.46.5.5,0,0,1,.16,1,15.24,15.24,0,0,0-1.89.44ZM115,150.1a.54.54,0,0,1-.21,0,.5.5,0,0,1-.25-.66,14,14,0,0,1,1-1.82.5.5,0,0,1,.85.53,14.86,14.86,0,0,0-.92,1.7A.49.49,0,0,1,115,150.1Zm2.11-3.4a.51.51,0,0,1-.31-.11.5.5,0,0,1-.08-.71c.41-.52.87-1,1.35-1.54a.5.5,0,0,1,.72.7,19.38,19.38,0,0,0-1.29,1.47A.52.52,0,0,1,117.09,146.7Zm3.17-3.07-.39-.32-.33-.38c.56-.48,1.06-.89,1.57-1.29a.5.5,0,0,1,.7.09.49.49,0,0,1-.09.7C121.23,142.82,120.74,143.21,120.26,143.63Zm2.79-2.26a.52.52,0,0,1-.42-.22.51.51,0,0,1,.14-.7c.56-.38,1.13-.74,1.72-1.08a.5.5,0,0,1,.68.17.51.51,0,0,1-.17.69q-.85.5-1.68,1.05A.46.46,0,0,1,123.05,141.37Zm3.45-2a.51.51,0,0,1-.45-.27.5.5,0,0,1,.22-.67c.61-.31,1.22-.6,1.84-.88a.51.51,0,0,1,.66.26.5.5,0,0,1-.26.66c-.6.26-1.2.55-1.78.85A.64.64,0,0,1,126.5,139.33Zm3.67-1.62a.5.5,0,0,1-.18-1c.63-.24,1.27-.46,1.92-.67a.5.5,0,0,1,.63.32.51.51,0,0,1-.33.63c-.63.2-1.25.42-1.87.65A.33.33,0,0,1,130.17,137.71Zm3.81-1.24a.49.49,0,0,1-.48-.36.51.51,0,0,1,.35-.62c.65-.17,1.31-.34,2-.48a.5.5,0,0,1,.6.38.49.49,0,0,1-.38.59c-.65.15-1.29.3-1.93.48Zm25.9-.76h-.08l-2-.28a.49.49,0,0,1-.43-.55.51.51,0,0,1,.56-.44l2,.28a.5.5,0,0,1-.07,1Zm-22-.11a.5.5,0,0,1-.09-1c.66-.12,1.33-.22,2-.32a.51.51,0,0,1,.57.43.5.5,0,0,1-.43.56l-2,.31Zm18-.41h-.06l-2-.19a.5.5,0,1,1,.08-1c.67.05,1.34.11,2,.19a.5.5,0,0,1,.44.55A.49.49,0,0,1,155.9,135.19Zm-14-.14a.5.5,0,0,1-.05-1c.67-.07,1.35-.13,2-.17a.48.48,0,0,1,.53.47.5.5,0,0,1-.46.53c-.67,0-1.33.1-2,.16Zm10-.18h0c-.66,0-1.33-.06-2-.08a.5.5,0,0,1-.49-.51.53.53,0,0,1,.51-.49c.68,0,1.35,0,2,.08a.51.51,0,0,1,.48.53A.5.5,0,0,1,151.9,134.87Zm-6-.08a.5.5,0,0,1,0-1l2,0h0a.5.5,0,0,1,.5.5.49.49,0,0,1-.49.5c-.67,0-1.33,0-2,0Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M93.77,172.47l-.16,0a.5.5,0,0,1-.31-.63c.11-.32.22-.64.34-1a.5.5,0,0,1,.64-.29.5.5,0,0,1,.3.64q-.18.47-.33.93A.5.5,0,0,1,93.77,172.47Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M150.19,121.27a.51.51,0,0,1-.49-.41.5.5,0,0,1,.4-.58A5.11,5.11,0,0,0,151,120a.5.5,0,0,1,.65.28.51.51,0,0,1-.28.65,6.3,6.3,0,0,1-1.05.3Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M148.23,121.34h0a12.19,12.19,0,0,1-2-.39.5.5,0,0,1,.26-1,11.49,11.49,0,0,0,1.86.35.5.5,0,0,1,.45.55A.49.49,0,0,1,148.23,121.34Zm-3.83-1a.51.51,0,0,1-.17,0l-1.86-.67a.5.5,0,1,1,.34-.94l1.86.67a.5.5,0,0,1-.17,1ZM140.68,119a.51.51,0,0,1-.17,0l-1.86-.7a.49.49,0,0,1-.29-.64.5.5,0,0,1,.65-.29l1.85.69a.5.5,0,0,1,.29.64A.48.48,0,0,1,140.68,119ZM137,117.61a.41.41,0,0,1-.19,0c-.61-.24-1.23-.49-1.84-.75a.51.51,0,0,1-.27-.65.52.52,0,0,1,.66-.27c.6.26,1.21.5,1.82.74a.5.5,0,0,1,.28.65A.49.49,0,0,1,137,117.61Zm-3.65-1.53a.45.45,0,0,1-.2,0l-1.81-.83a.5.5,0,0,1-.24-.67.51.51,0,0,1,.67-.24c.59.29,1.18.56,1.78.82a.5.5,0,0,1-.2,1Zm-3.57-1.7a.46.46,0,0,1-.23-.06c-.59-.3-1.18-.61-1.76-.94a.49.49,0,0,1-.19-.68.5.5,0,0,1,.68-.19c.57.32,1.15.63,1.73.93a.49.49,0,0,1,.21.67A.5.5,0,0,1,129.77,114.38Zm-3.45-1.93a.59.59,0,0,1-.26-.07c-.57-.35-1.13-.71-1.69-1.08a.5.5,0,0,1-.13-.7.49.49,0,0,1,.69-.13q.81.54,1.65,1a.5.5,0,0,1-.26.93ZM123,110.24a.47.47,0,0,1-.3-.1l-.6-.46c-.33-.25-.66-.51-1-.78a.5.5,0,0,1,.64-.77c.32.26.63.52,1,.76l.59.45a.5.5,0,0,1-.3.9Zm-3-2.53a.51.51,0,0,1-.34-.14c-.49-.46-1-.93-1.42-1.42a.49.49,0,0,1,0-.7.5.5,0,0,1,.71,0c.44.47.9.93,1.38,1.37a.5.5,0,0,1,0,.71A.49.49,0,0,1,120,107.71Zm-2.71-2.88a.48.48,0,0,1-.38-.18c-.43-.51-.85-1-1.24-1.58a.51.51,0,0,1,.11-.7.5.5,0,0,1,.7.11c.38.52.78,1,1.19,1.53a.51.51,0,0,1-.06.71A.54.54,0,0,1,117.29,104.83Zm-2.32-3.2a.51.51,0,0,1-.43-.23c-.36-.57-.7-1.16-1-1.75a.5.5,0,0,1,.89-.46c.3.56.62,1.12,1,1.68a.5.5,0,0,1-.16.69A.48.48,0,0,1,115,101.63Zm-1.85-3.49a.5.5,0,0,1-.46-.3q-.41-.95-.72-1.89a.5.5,0,1,1,.94-.32c.2.6.44,1.21.7,1.81a.51.51,0,0,1-.26.66A.71.71,0,0,1,113.12,98.14Zm-1.26-3.75a.49.49,0,0,1-.48-.38,19.91,19.91,0,0,1-.38-2,.49.49,0,0,1,.43-.56.5.5,0,0,1,.56.42c.09.63.21,1.27.36,1.9a.51.51,0,0,1-.37.6Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M111.32,90.46a.5.5,0,0,1-.5-.48c0-.34,0-.68,0-1a.47.47,0,0,1,.5-.49.5.5,0,0,1,.5.5c0,.33,0,.65,0,1a.5.5,0,0,1-.48.52Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M112.46,76.74a19.28,19.28,0,0,0,5.07-21.68s-7,.18-9.29,8.35S112.46,76.74,112.46,76.74Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M112.46,77.24a.45.45,0,0,1-.31-.11c-.07,0-6.71-5.45-4.4-13.85s9.69-8.72,9.77-8.72a.52.52,0,0,1,.48.33,19.92,19.92,0,0,1-5.23,22.24A.45.45,0,0,1,112.46,77.24Zm4.73-21.65c-1.42.16-6.61,1.19-8.47,8s2.52,11.39,3.74,12.53A18.58,18.58,0,0,0,117.19,55.59Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M113.35,81.93a.51.51,0,0,1-.47-.32c-4-10.78,3.87-26.13,4.2-26.78a.51.51,0,0,1,.68-.21.5.5,0,0,1,.21.67c-.08.16-8,15.61-4.15,26a.49.49,0,0,1-.29.64A.57.57,0,0,1,113.35,81.93Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M100.19,178.43a19.29,19.29,0,0,1,5.07,21.68s-7-.17-9.29-8.35S100.19,178.43,100.19,178.43Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M105.26,200.61h0c-.07,0-7.44-.28-9.76-8.72s4.32-13.8,4.39-13.85a.5.5,0,0,1,.63,0,19.94,19.94,0,0,1,5.22,22.25A.5.5,0,0,1,105.26,200.61Zm-5.07-21.52a12.47,12.47,0,0,0-3.74,12.53c1.87,6.77,7.06,7.81,8.47,8A18.86,18.86,0,0,0,100.19,179.09Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M105.26,200.61a.5.5,0,0,1-.44-.27c-.34-.65-8.17-16-4.2-26.78a.5.5,0,0,1,.64-.29.5.5,0,0,1,.3.64c-3.82,10.37,4.07,25.82,4.15,26a.5.5,0,0,1-.22.67A.46.46,0,0,1,105.26,200.61Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M104.14,118.17a19.29,19.29,0,0,1-22.25.83s1.51-6.87,10-7.52S104.14,118.17,104.14,118.17Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M92.39,122.64a20.39,20.39,0,0,1-10.77-3.21.49.49,0,0,1-.22-.53c0-.08,1.69-7.25,10.42-7.92s12.72,6.88,12.76,7a.49.49,0,0,1-.12.61A20.42,20.42,0,0,1,92.39,122.64Zm-9.92-3.87a18.57,18.57,0,0,0,21-.73A12.47,12.47,0,0,0,91.9,112C84.9,112.51,82.89,117.41,82.47,118.77Z"
                      fill="#d1d3d4"
                    ></path>
                    <path
                      d="M108.57,120.44a.48.48,0,0,1-.26-.07c-9.44-5.73-26.11-.94-26.28-.89a.5.5,0,0,1-.28-1c.7-.2,17.25-5,27.08,1a.5.5,0,0,1-.26.92Z"
                      fill="#d1d3d4"
                    ></path>
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
