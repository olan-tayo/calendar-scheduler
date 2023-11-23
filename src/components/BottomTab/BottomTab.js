import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomTab = () => {
  let location = useLocation();
  return (
    <div className="w-full block lg:hidden">
      <div
        style={{
          boxShadow: " 0 20px 80px 0 #0d161905, 0 20px 90px 0 #0d161929",
        }}
        className="absolute z-30 bottom-0 bg-white h-[58px] w-full flex items-center justify-between px-6 "
      >
        <div className="">
          {" "}
          <Link to="/calendar">
            <div
              className={`cursor-pointer rounded-[8px] flex justify-center items-center w-[30px] h-[30px] ${
                location.pathname.includes("calendar") ? "bg-[#6950f3]" : null
              }`}
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 3h-2.25v-.75a.75.75 0 1 0-1.5 0V3h-7.5v-.75a.75.75 0 0 0-1.5 0V3H4.5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Zm0 4.5h-15v-3h2.25v.75a.75.75 0 0 0 1.5 0V4.5h7.5v.75a.75.75 0 1 0 1.5 0V4.5h2.25v3Z"></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="">
          {" "}
          <div
            className={`cursor-pointer rounded-[8px] flex justify-center items-center w-[30px] h-[30px]  `}
          >
            <svg
              fill="#000"
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
        </div>
        <div className="">
          {" "}
          <div
            className={`cursor-pointer rounded-[8px] flex justify-center items-center w-[30px] h-[30px]  `}
          >
            <svg
              fill="#000"
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
        </div>
        <div className="">
          {" "}
          <div
            className={`cursor-pointer rounded-[8px] flex justify-center items-center w-[30px] h-[30px]  `}
          >
            <NotificationsOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
        <div className="">
          {" "}
          <div
            className={`cursor-pointer rounded-[8px] flex justify-center items-center w-[30px] h-[30px]  `}
          >
            <MenuOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
