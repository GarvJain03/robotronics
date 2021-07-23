import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <span class="ml-3 text-xl">Classcord</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900" href="#mission">
            Our Mission
          </a>
          <a class="mr-5 hover:text-gray-900" href="#team">
            About Us
          </a>
          {/* <a class="mr-5 hover:text-gray-900" href="#">
            Third Link
          </a> */}
          {/* <a class="mr-5 hover:text-gray-900" href="#">
            Fourth Link
          </a> */}
        </nav>
        <Link to="/student">
          <button class="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 mr-5">
            Student
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
        <Link to="/teacher">
          <button class="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 ">
            Teacher
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
