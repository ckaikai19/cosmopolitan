import React, { useState, useEffect } from "react";
import "./styles/projectDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContextProvider";
import { toast } from "react-toastify";
import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function NewUser() {
  const [products, setProjects] = useState(true);
  const [users, setUsers] = useState(true);
  const navigate = useNavigate();
  const { logout, userId } = UserAuth();
  const [allProjects, setAllProjects] = useState([]);
  const projectCollectionRef = collection(db, `Users/${userId}/projects`);
  const [role, setRole] = useState(null);
  const [assigedProject, setAssignedProject] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [comment, setComment] = useState(null);

  const subUserCollectionRef = collection(
    db,
    `Users/${userId}/projects/${assigedProject}/subUsers`
  );

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
    async function getProjects() {
      const docsSnap = await getDocs(projectCollectionRef);
      let arr = [];

      docsSnap.forEach(function (doc) {
        arr.push({ id: doc.id, ...doc.data() });
      });

      setAllProjects(arr);
    }

    getProjects();
  }, []);

  async function createUser() {
    if (role && assigedProject && name && email && address) {
      if (role === "Client") {
        try {
          await addDoc(subUserCollectionRef, {
            name,
            role,
            address,
            email,
            status,
            comment,
            assigedProject,
          });
          toast.info("User Created", {
            position: "top-right",
            autoClose: 4581,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate("/allusers");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await addDoc(subUserCollectionRef, {
            name,
            role,
            address,
            email,
            assigedProject,
          });
          toast.info("User Created", {
            position: "top-right",
            autoClose: 4581,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate("/allusers");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.error("Must fill all inputs", {
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
          <h1 className="view-project-head-tiewewft">Sub-User</h1>
          {/* <h1 className="view-project-head-butt">Edit</h1> */}
        </div>

        <div className="project-details-contststs">
          <div className="coiowejiewje">
            <div className="project-details-left-shssdd">
              <div className="bg-gray-800 shadow-xl  shadow sm:rounded-lg">
                <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-white">
                      Create a new sub-user
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                      The sub-user's details and documentation
                    </p>
                  </div>
                  <div>
                    <div>
                      <button
                        type="button"
                        onClick={() => createUser()}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Create Sub-User
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <dl>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Role
                      </dt>

                      <select
                        id="default"
                        onChange={(event) => setRole(event.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Select a role</option>
                        <option value="Client">Client</option>
                        <option value="Agent">Agent</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Builder">Builder</option>
                      </select>
                    </div>
                    <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Assign to a project
                      </dt>

                      <select
                        id="default"
                        onChange={(event) =>
                          setAssignedProject(event.target.value)
                        }
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Select a project</option>
                        {allProjects.length != 0
                          ? allProjects.map((project) => (
                              <option value={project.id}>
                                {project.projectName}
                              </option>
                            ))
                          : null}
                      </select>
                    </div>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Full Name
                      </dt>
                      <div>
                        <input
                          type="text"
                          onChange={(event) => setName(event.target.value)}
                          id="default-input"
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
                          id="default-input"
                          onChange={(event) => setEmail(event.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                      </>
                    </div>

                    <div className="px-4 bg-gray-700 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Address
                      </dt>
                      <>
                        <input
                          type="text"
                          id="default-input"
                          onChange={(event) => setAddress(event.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></input>
                      </>
                    </div>
                    {role === "Client" ? (
                      <>
                        <div className="  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-white opacity-70">
                            Status
                          </dt>

                          <select
                            id="default"
                            onChange={(event) => setStatus(event.target.value)}
                            class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Set a status</option>
                            <option value={1}>Offer</option>
                            <option value={2}>Negotiation</option>
                            <option value={3}>Due diligence</option>
                            <option value={4}>Closing</option>
                          </select>
                        </div>
                        <div className="bg-gray-700  rounded  px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-white opacity-70">
                            Status Comments
                          </dt>
                          <div className="w-full">
                            <textarea
                              id="message"
                              rows="4"
                              onChange={(event) =>
                                setComment(event.target.value)
                              }
                              class="block h-150px p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Add a comment about the current status of the client"
                            ></textarea>
                          </div>
                        </div>
                      </>
                    ) : null}
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
export default NewUser;
