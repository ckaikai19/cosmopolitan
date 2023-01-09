import React, { useState, useEffect } from "react";
import "./styles/client.css";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import Popup from "reactjs-popup";
import Logo from "./img/logo.png";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "./AuthContextProvider";
import { toast } from "react-toastify";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function DeletePop(docid) {
  const { id, pid } = useParams();
  const navigate = useNavigate();
  const { userId } = UserAuth();

  async function deleteClient() {
    const clientDoc = doc(
      db,
      `Users/${userId}/projects/${pid}/subUsers/${id}/documents`,
      docid.docid
    );

    try {
      await deleteDoc(clientDoc);
      toast.info("Document Deleted", {
        position: "top-right",
        autoClose: 4581,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(`/project/${pid}`);
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

function Client() {
  const [editing, setEditing] = useState(false);
  const [products, setProjects] = useState(true);
  const [users, setUsers] = useState(true);
  const [clientData, setClientData] = useState(null);
  const { pid, id } = useParams();
  const navigate = useNavigate();
  const { logout, userId } = UserAuth();
  const clientDocumentRef = doc(
    db,
    `Users/${userId}/projects/${pid}/subUsers`,
    id
  );
  const [statusComment, setStatusComment] = useState(null);
  const [clientStatus, setClientStatus] = useState("0");
  const [uploadDocumentUrl, setUploadDocumentUrl] = useState(null);
  const [uploadDocumentName, setUploadDocumentName] = useState(null);
  const [documentComment, setDocumentComment] = useState("");
  const clientSpecificDocumentRef = collection(
    db,
    `Users/${userId}/projects/${pid}/subUsers/${id}/documents`
  );
  const allClientsDcumentRef = collection(
    db,
    `Users/${userId}/projects/${pid}/subUsers/${id}/documents`
  );
  const [listClientDoc, setListClientDoc] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null)

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

  function uploadFile(doucmentFile) {
    setUploadDocumentName(doucmentFile.name);
    const imageRef = ref(storage, `documents/${doucmentFile.lastModified}`);
    uploadBytes(imageRef, doucmentFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUploadDocumentUrl(url);
      });
    });
  }
  async function uploadDoc() {
    if (uploadDocumentUrl && uploadDocumentName && documentComment) {
      try {
        await addDoc(clientSpecificDocumentRef, {
          name: uploadDocumentName,
          url: uploadDocumentUrl,
          comment: documentComment,
        });
        toast.info("Document Added", {
          position: "top-right",
          autoClose: 4581,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // window.location.reload();
        navigate(`/project/${pid}`);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("ihewfiofewiofwe");
    }
  }

  async function updateStatus(){
    if(selectedStatus && statusComment){

      try{
        const subUserDoc =  doc(db, `Users/${userId}/projects/${pid}/subUsers`, id);
        const newFields = { status: selectedStatus, comment: statusComment };
        await updateDoc(subUserDoc, newFields);
        toast.info("Status Updated", {
          position: "top-right",
          autoClose: 4581,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(`/project/${pid}`);

      } catch (err) {
        console.log(err)
      }
    } else{
      toast.error("Select a status and fill comment", {
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

  useEffect(() => {
    async function getClient() {
      const docSnap = await getDoc(clientDocumentRef);
      setClientData(docSnap.data());
      setStatusComment(docSnap.data().comment);
      setClientStatus(docSnap.data().status);
    }

    async function getDocuments() {
      let arr = [];
      const docsSnap = await getDocs(allClientsDcumentRef);
      docsSnap.forEach(function (doc) {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setListClientDoc(arr);
    }
    getClient();
    getDocuments();
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
          <h1 className="view-project-head-tiewewft">
            {clientData ? clientData.name : "Client"}
          </h1>
          {/* <h1 className="view-project-head-butt">Edit</h1> */}
        </div>

        <div className="project-details-contststs">
          <div className="uihewfoiwehfoiwe">
            <div className="project-details-left-shssdd">
              <div className="bg-gray-800 shadow-xl mb-8  shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-white">
                    Client Details
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                    Personal details and descriptions.
                  </p>
                </div>
                <div>
                  <dl>
                    <div className=" bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Client Name
                      </dt>
                      <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                        {clientData ? clientData.name : "......."}
                      </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Home Address
                      </dt>
                      <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                        {clientData ? clientData.address : "no Address"}
                      </dd>
                    </div>

                    <div className="bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-white opacity-70">
                        Email Address
                      </dt>
                      <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                        {clientData ? clientData.email : "no email"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className=" project-details-right-shssdd">
              <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-white">
                    Status
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                    Tracking the clients status
                  </p>
                </div>
                <div>
                  {editing ? (
                    <div className=" flex">
                      <div class="flex relative top-1 justify-center">
                        <div class="mb-3 xl:w-56">
                          <select
                            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            onChange={(event) =>
                              setSelectedStatus(event.target.value)
                            }
                          >
                            <option selected>Update Status</option>
                            <option value={1}>Offer</option>
                            <option value={2}>Negotiation</option>
                            <option value={3}>Due diligence</option>
                            <option value={4}>Closing</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateStatus()}
                        class="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditing(false)}
                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditing(true)}
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
              <div className="bg-gray-700 shadow p-8 rounded ">
                <ol class="items-center justify-center sm:flex">
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class={
                          clientStatus === "1"
                            ? "flex z-10 justify-center items-center w-6 h-6 bg-light-green rounded-full ring-0 ring-white dark:bg-emerald-500 sm:ring-8 dark:ring-gray-900 shrink-0"
                            : "flex z-10 justify-center items-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-900 shrink-0"
                        }
                      ></div>
                      <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-white"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Offer
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        The client makes an offer
                      </time>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class={
                          clientStatus === "2"
                            ? "flex z-10 justify-center items-center w-6 h-6 bg-light-green rounded-full ring-0 ring-white dark:bg-emerald-500 sm:ring-8 dark:ring-gray-900 shrink-0"
                            : "flex z-10 justify-center items-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-900 shrink-0"
                        }
                      ></div>
                      <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-white"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Negotiation
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        the seller's agent has negotiate the terms
                      </time>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class={
                          clientStatus === "3"
                            ? "flex z-10 justify-center items-center w-6 h-6 bg-light-green rounded-full ring-0 ring-white dark:bg-emerald-500 sm:ring-8 dark:ring-gray-900 shrink-0"
                            : "flex z-10 justify-center items-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-900 shrink-0"
                        }
                      ></div>
                      <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-white"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Due diligence
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        the client has conducted due diligence on the property
                      </time>
                    </div>
                  </li>
                  <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                      <div
                        class={
                          clientStatus === "4"
                            ? "flex z-10 justify-center items-center w-6 h-6 bg-light-green rounded-full ring-0 ring-white dark:bg-emerald-500 sm:ring-8 dark:ring-gray-900 shrink-0"
                            : "flex z-10 justify-center items-center w-6 h-6 bg-gray-800 rounded-full ring-0 ring-white dark:bg-gray-800 sm:ring-8 dark:ring-gray-900 shrink-0"
                        }
                      ></div>
                      <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-white"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Closing
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        The client and seller sign the final paperwork and the
                        property changes hands.
                      </time>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-800 shadow px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white opacity-70">
                  Status Comments
                </dt>
                {editing ? (
                  <div className="w-full">
                    <textarea
                      id="message"
                      rows="4"
                      value={statusComment ? statusComment : "no commetn"}
                      onChange={(event) => setStatusComment(event.target.value)}
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
                    {clientData ? clientData.comment : "no comment"}
                  </dd>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" opjwefopfqweoewojojp">
          <div className=" coiowejiewje">
            <div className="px-4 shadow flex justify-between bg-gray-800 py-5 rounded sm:px-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-white">
                  Client Document
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-white opacity-70">
                  All Documents related to the client
                </p>
              </div>
              <div>
                <Popup
                  trigger={() => (
                    <button
                      type="button"
                      class="text-white bg-white hover:bg-white focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-800"
                    >
                      Add File
                    </button>
                  )}
                  modal
                >
                  {(close) => {
                    return (
                      <div className="ewiohfwoeifhewoi">
                        <div
                          id="editUserModal"
                          tabIndex={-1}
                          aria-hidden="true"
                          className="  overflow-y-auto overflow-x-hidden  justify-center items-center  w-full md:inset-0 h-modal md:h-full"
                        >
                          <div className="relative w-full  h-full md:h-auto">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              {/* Modal header */}
                              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  Add Document
                                </h3>
                                <button
                                  type="button"
                                  onClick={close}
                                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-modal-toggle="editUserModal"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                              {/* Modal body */}
                              <div className="p-6 space-y-2">
                                <dt className="text-sm font-medium text-white opacity-70">
                                  Upload Document
                                </dt>
                                <input
                                  class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                  id="large_size"
                                  type="file"
                                  onChange={(event) =>
                                    uploadFile(event.target.files[0])
                                  }
                                ></input>

                                <dt className="text-sm mt-8 pt-8 font-medium text-white opacity-70">
                                  Document Comment
                                </dt>
                                <div className="w-full">
                                  <textarea
                                    id="message"
                                    rows="4"
                                    onChange={(event) => {
                                      setDocumentComment(event.target.value);
                                    }}
                                    class="block h-150px p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Add any additional comments about the document"
                                  ></textarea>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button
                                  type="submit"
                                  onClick={() => uploadDoc()}
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  Upload
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Popup>
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
                      Comment
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listClientDoc
                    ? listClientDoc.map((document) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <BsFillFileEarmarkTextFill className="w-10 text-gray-200 h-10 rounded-full" />
                            <div className="pl-3">
                              <div className="text-base font-semibold">
                                {document.name}
                              </div>
                            </div>
                          </th>
                          <td className="py-4 px-6">{document.comment}</td>

                          <td className="py-4 px-6">
                            <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                              <a href={document.url}>
                                <button class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                                  View
                                </button>
                              </a>

                              <DeletePop docid={document.id} />
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
  );
}
export default Client;
