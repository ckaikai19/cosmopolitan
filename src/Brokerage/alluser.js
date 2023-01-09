import React, { useState, useEffect } from "react";
import "./styles/projectDetails.css";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import Popup from "reactjs-popup";
import { UserAuth } from "./AuthContextProvider";
import { toast } from "react-toastify";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

function DeletePop({userIID, assProject}) {
  const navigate = useNavigate();
  const { userId } = UserAuth();

  async function deleteClient() {
    const clientDoc = doc(
      db,
      `Users/${userId}/projects/${assProject}/subUsers`,
      userIID
    );

    try {
      await deleteDoc(clientDoc);
      toast.info("Client Deleted", {
        position: "top-right",
        autoClose: 4581,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/project");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Popup
      trigger={() => (
        <button class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
          Delete
        </button>
      )}
      modal
    >
      {(close) => {
        return (
          <div class="rounded-lg bg-gray-700 p-8 shadow-2xl">
            <h2 class="text-lg font-bold text-gray-200">
              Are you sure you want to delete this client?
            </h2>

            <div class="mt-8 flex items-center justify-end text-xs">
              <button
                type="button"
                onClick={() => deleteClient()}
                class="rounded bg-gray-800 px-4 py-2 font-medium text-gray-200"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                onClick={close}
                class="ml-2 rounded bg-gray-800 px-4 py-2 font-medium text-gray-200"
              >
                No, go back
              </button>
            </div>
          </div>
        );
      }}
    </Popup>
  );
}

function AllUser() {
  const [products, setProjects] = useState(true);
  const [users, setUsers] = useState(true);
  const navigate = useNavigate();
  const { logout, userId } = UserAuth();
  const projectDocumentsRef = collection(db, `Users/${userId}/projects`);
  const [allUsers, setAllUsers] = useState([]);

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

  useEffect(() => {
    async function getClients() {
      let projectsArr = [];
      let usersArr = [];
      const projectSnap = await getDocs(projectDocumentsRef);

      projectSnap.forEach(function (doc) {
        projectsArr.push({ id: doc.id, ...doc.data() });
      });

      projectsArr.forEach(async function (project) {
        const subUserCollectionRef = collection(
          db,
          `Users/${userId}/projects/${project.id}/subUsers`
        );
        const usersSnap = await getDocs(subUserCollectionRef);

        usersSnap.forEach(function (doc) {
          usersArr.push({ id: doc.id, ...doc.data() });
        });

        setAllUsers(usersArr);
      });

    }

    getClients();
  }, []);


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
          <h1 className="view-project-head-tiewewft">User Page</h1>
          {/* <h1 className="view-project-head-butt">Edit</h1> */}
        </div>

        <div className="project-details-contststs">
          <div className="coiowejiewje">
            <div className="project-details-left-shssdd">
              <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-white">
                    All User's
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                    All users created
                  </p>
                </div>
                <div>
                  <Link to={"/newuser"}>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Add New
                    </button>
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Email
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Address
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Role
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Project Assigned
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.length > 0
                      ? allUsers.map((user) => (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                              scope="row"
                              className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <FaRegUserCircle className="w-10 text-gray-200 h-10 rounded-full" />
                              <div className="pl-3">
                                <div className="text-base font-semibold">
                                  {user.name}
                                </div>
                              </div>
                            </th>
                            <td className="py-4 px-6">{user.email}</td>
                            <td className="py-4 px-6">{user.address}</td>
                            <td className="py-4 px-6">{user.role}</td>
                            <td className="py-4 px-6">{user.assigedProject}</td>
                            <td className="py-4 px-6">
                              <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                                <DeletePop userIID={user.id} assProject={user.assigedProject}/>
                              </span>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllUser;
