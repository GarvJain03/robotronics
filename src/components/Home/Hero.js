import React from "react";
import Banner from "./../../assets/undraw_education_f8ru.svg";
function Hero() {
  return (
    <section class="text-gray-600 body-font" style={{ height: "80vh" }}>
      <div
        style={{ height: "100%" }}
        class="container mx-auto flex px-5 py-auto md:flex-row flex-col items-center"
      >
        <div
          style={{ height: "70%" }}
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium my-auto  text-gray-900 leading-loose"
            style={{
              height: "50",
              lineHeight: "50px",
            }}
          >
            <span class="text-white bg-green-500 p-2 rounded underline saksham-white ">
              Classcord
            </span>
            &nbsp;is India's first free education platform
          </h1>
          <p class="mb-8 leading-relaxed">
            Classcord is a revolutionary platform designed for students by
            understanding students problem. Every student with a device can now
            get free access to education by our volunteers.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Student
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Teacher
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}

          <img
            src={Banner}
            alt="alt"
            class="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
