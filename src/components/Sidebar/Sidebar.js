import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();
  return (
    <div>
      <div className="h-[90vh] bg-[#101928] p-3  flex-col justify-between w-[72px] hidden lg:flex">
        <div className="flex flex-col gap-[14px] items-center py-1">
          <Link to="/home">
            <div
              className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px] ${
                location.pathname.includes("home") ? "bg-[#6950f3]" : null
              }`}
            >
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.989 2.905a1.5 1.5 0 0 1 2.022 0l7.51 6.825A1.528 1.528 0 0 1 21 10.816V19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8.684A1.528 1.528 0 0 1 3.48 9.73l7.51-6.825Zm-6.487 7.924L12 4l7.498 6.83.002 8.67h-15l.002-8.67Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>

          <Link to="/calender">
            <div
              className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px] ${
                location.pathname.includes("calender") ? "bg-[#6950f3]" : null
              }`}
            >
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 1.5a.75.75 0 0 1 .75.75V3h7.5v-.75a.75.75 0 0 1 1.5 0V3h2.25A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h2.25v-.75a.75.75 0 0 1 .75-.75Zm-.75 3H4.5v3h15v-3h-2.25v.75a.75.75 0 0 1-1.5 0V4.5h-7.5v.75a.75.75 0 0 1-1.5 0V4.5ZM19.5 9h-15v10.5h15V9Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.359 1.692a1.5 1.5 0 0 1 1.35.412l9.784 9.785a1.49 1.49 0 0 1 0 2.125l-8.479 8.48a1.49 1.49 0 0 1-2.125 0l-9.784-9.785a1.5 1.5 0 0 1-.413-1.35v-.003l1.51-7.565a.75.75 0 0 1 .589-.589l7.565-1.51h.003Zm.288 1.472L4.575 4.575l-1.41 7.072 9.787 9.788 8.483-8.483-9.787-9.787Z"
                clip-rule="evenodd"
              ></path>
              <path d="M7.875 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path>
              <path
                fill-rule="evenodd"
                d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M1.94 4.94A1.5 1.5 0 0 1 3 4.5h6A3.75 3.75 0 0 1 12 6a3.746 3.746 0 0 1 3-1.5h6A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5h-6a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 9 19.5H3A1.5 1.5 0 0 1 1.5 18V6c0-.398.158-.78.44-1.06Zm9.31 13.81A3.75 3.75 0 0 0 9 18H3V6h6a2.25 2.25 0 0 1 2.25 2.25v10.5Zm1.5 0A3.75 3.75 0 0 1 15 18h6V6h-6a2.25 2.25 0 0 0-2.25 2.25v10.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.5A1.5 1.5 0 0 1 3.5 3h17A1.5 1.5 0 0 1 22 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 19.5v-15Zm18.5 0h-17v15h17v-15ZM12 9a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 12 9Zm2.572 4.979a3.75 3.75 0 1 0-5.145 0 5.834 5.834 0 0 0-.67.317c-.939.522-1.665 1.289-1.97 2.22a.75.75 0 0 0 1.426.467c.16-.488.577-.99 1.273-1.376C10.18 15.222 11.066 15 12 15c.934 0 1.82.222 2.514.607.696.387 1.113.888 1.273 1.376a.75.75 0 0 0 1.426-.466c-.305-.932-1.031-1.7-1.97-2.221a5.84 5.84 0 0 0-.67-.317Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M21.133 2.14a1.5 1.5 0 0 0-1.59.204A17.338 17.338 0 0 1 12.973 5.8c-1.81.492-2.815.482-2.783.48l-3.939.008a4.5 4.5 0 0 0-.596 8.96L6.76 19.69a1.5 1.5 0 0 0 2.288.88l1.027-.68a1.491 1.491 0 0 0 .675-1.258v-3.29l.039.005c.523.06 1.278.183 2.183.429 1.81.492 4.215 1.48 6.572 3.455A1.5 1.5 0 0 0 22 18.087V3.488a1.5 1.5 0 0 0-.867-1.348ZM7.21 15.288l1.005 4.035 1.035-.687v-3.348H7.21Zm-.96-1.5h3v-6h-3a3 3 0 0 0 0 6Zm4.5-6.047v6.093l.211.023a16.42 16.42 0 0 1 2.405.472 18.814 18.814 0 0 1 7.134 3.747V3.5a18.815 18.815 0 0 1-7.134 3.747 16.428 16.428 0 0 1-2.616.494Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 3.75a.75.75 0 0 1 .75.75v10.19l4.72-4.72a.75.75 0 0 1 1.06 0L12 12.44l5.69-5.69h-1.94a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V7.81l-6.22 6.22a.75.75 0 0 1-1.06 0L9 11.56l-5.25 5.25v1.94H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-15A.75.75 0 0 1 3 3.75Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px]`}
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.788 1.996a.75.75 0 0 1 .617.07l2.192 1.316c.269-.012.538-.012.807 0l2.183-1.307a.75.75 0 0 1 .61-.071 10.368 10.368 0 0 1 3.861 2.223.75.75 0 0 1 .245.567l-.043 2.548c.148.228.284.463.407.704l2.223 1.236a.75.75 0 0 1 .367.492c.327 1.465.33 2.983.01 4.449a.75.75 0 0 1-.37.496l-2.23 1.235a7.636 7.636 0 0 1-.407.704l.043 2.548a.75.75 0 0 1-.245.567 10.5 10.5 0 0 1-3.846 2.231.75.75 0 0 1-.617-.07l-2.192-1.316a9.003 9.003 0 0 1-.806 0l-2.184 1.307a.75.75 0 0 1-.61.071 10.368 10.368 0 0 1-3.861-2.223.75.75 0 0 1-.245-.567l.043-2.543a8.25 8.25 0 0 1-.407-.71l-2.222-1.235a.75.75 0 0 1-.368-.492 10.312 10.312 0 0 1-.01-4.449.75.75 0 0 1 .37-.496l2.23-1.235c.123-.242.259-.477.407-.704l-.043-2.548a.75.75 0 0 1 .245-.567 10.5 10.5 0 0 1 3.846-2.231Zm-2.585 3.12.04 2.437a.75.75 0 0 1-.134.442 6.15 6.15 0 0 0-.527.91.75.75 0 0 1-.315.339l-2.134 1.181a8.812 8.812 0 0 0 .008 3.15l2.127 1.182a.75.75 0 0 1 .313.335c.153.323.33.634.532.929a.75.75 0 0 1 .13.435l-.04 2.428A8.868 8.868 0 0 0 8.94 20.46l2.084-1.247a.75.75 0 0 1 .439-.105c.357.026.717.026 1.074 0a.75.75 0 0 1 .44.105l2.09 1.255a9 9 0 0 0 2.73-1.584l-.04-2.437a.75.75 0 0 1 .134-.442c.202-.288.378-.593.527-.91a.75.75 0 0 1 .316-.339l2.133-1.181a8.811 8.811 0 0 0-.008-3.15l-2.127-1.182a.75.75 0 0 1-.314-.337 6.144 6.144 0 0 0-.527-.91.75.75 0 0 1-.135-.443l.041-2.437A8.868 8.868 0 0 0 15.06 3.54l-2.084 1.247a.75.75 0 0 1-.439.105 7.528 7.528 0 0 0-1.074 0 .75.75 0 0 1-.44-.105l-2.09-1.255a9 9 0 0 0-2.73 1.584ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div
          className={`cursor-pointer  p-2  rounded-[8px] flex justify-center items-center w-[45px] h-[45px] pb-6`}
        >
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 18a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 18Z"></path>
            <path
              fill-rule="evenodd"
              d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.458-4.993a3.375 3.375 0 1 1 2.042 6.409v.084a.75.75 0 0 1-1.5 0v-.75A.75.75 0 0 1 12 12a1.875 1.875 0 1 0-1.875-1.875.75.75 0 0 1-1.5 0 3.375 3.375 0 0 1 2.083-3.118Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
