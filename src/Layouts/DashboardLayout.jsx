import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   return (
      <>
         <button
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg
               className="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <Link
                        to="/profile"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20">
                           <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="ms-3">My Profile</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/enrolled-courses"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 20 18">
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"
                           />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Enrolled Courses
                        </span>
                     </Link>
                  </li>
                  <hr />
                  <li>
                     <Link
                        to="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20">
                           <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Home
                        </span>
                     </Link>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20">
                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                           <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                           <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Sign Out
                        </span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>

         <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default DashboardLayout;