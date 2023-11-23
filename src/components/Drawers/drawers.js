import React from "react";
import "./drawer.css";
// import close_icon from '../../assets/icons/close.svg'
import { CSSTransition } from "react-transition-group";

const DrawerComponent = ({ show, showDrawer, showIcons, children }) => {
  return (
    <>
      <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div
          className="drawer fixed  
          inset-0 bg-opacity-50 z-70 opacity-0
           overflow-y-auto h-full w-full transition-all duration-[0.3s]"
        >
          <div className="flex gap-6 transition-all h-screen w-full md:w-[810px] duration-[0.3s] z-[2000] fixed top-0 right-0 lg:-right-60">
            <div className="hidden lg:block mt-4">
              <div className="icon-bg" onClick={showDrawer}>
                <div className="w-[25px] h-[25px]">
                  <svg
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="icon-bg mt-[30px]">
                <div className="w-[25px] h-[25px]">
                  <svg
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.97 3.97a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97ZM5.25 15a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06L7.94 15H5.25Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="icon-bg mt-[30px]">
                <div className="w-[25px] h-[25px]">
                  <svg
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 1.125a.75.75 0 0 1 .75.75v1.156a9.002 9.002 0 0 1 8.22 8.219h1.155a.75.75 0 0 1 0 1.5h-1.156a9.002 9.002 0 0 1-8.219 8.22v1.155a.75.75 0 0 1-1.5 0v-1.156a9.002 9.002 0 0 1-8.22-8.219H1.876a.75.75 0 0 1 0-1.5h1.156a9.002 9.002 0 0 1 8.219-8.22V1.876a.75.75 0 0 1 .75-.75Zm-.75 3.412a7.502 7.502 0 0 0-6.713 6.713h1.088a.75.75 0 0 1 0 1.5H4.537a7.503 7.503 0 0 0 6.713 6.713v-1.088a.75.75 0 0 1 1.5 0v1.088a7.503 7.503 0 0 0 6.713-6.713h-1.088a.75.75 0 0 1 0-1.5h1.088a7.503 7.503 0 0 0-6.713-6.713v1.088a.75.75 0 0 1-1.5 0V4.537ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div
              style={{
                "box-shadow": "0 4px 8px 0 #0d161905, 0 12px 20px 0 #0d161929",
              }}
              className="drawer-content w-full h-screen  lg:w-[500px] overflow-y-auto  bg-white"
            >
              <div className="flex">
                {showIcons && (
                  <div className=" hidden lg:flex py-4 border-r-[#e7e8e9] border-r-[1px] w-[130px] h-screen  flex-col items-center gap-6">
                    {/* INFO */}
                    <div className="flex flex-col gap-[2px] items-center">
                      <div className="bg-icon bg-[#6950f3]">
                        <div className="h-[24px] w-[24px]">
                          <svg
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25Zm18 0H3.75v13.5h16.5V5.25ZM8.634 9.75a1.5 1.5 0 0 0-.113 2.996 3.857 3.857 0 0 1 .226 0 1.5 1.5 0 0 0-.113-2.996Zm2.104 3.64a3 3 0 1 0-4.206 0 3.75 3.75 0 0 0-1.53 2.175.75.75 0 0 0 1.453.371 2.25 2.25 0 0 1 2.056-1.688 2.976 2.976 0 0 0 .247 0 2.25 2.25 0 0 1 2.056 1.688.75.75 0 1 0 1.453-.372 3.75 3.75 0 0 0-1.53-2.175ZM13.5 10.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="drawer-text text-sm text-[#6950f3]">Info</p>
                    </div>

                    {/* NOTES */}
                    <div className="flex flex-col gap-[2px] items-center">
                      <div className="bg-icon bg-[#f2f2f7]">
                        <div className="h-[24px] w-[24px]">
                          <svg
                            fill="#0d1619"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.5 1.5a.75.75 0 0 1 .75.75V3h3v-.75a.75.75 0 0 1 1.5 0V3h3v-.75a.75.75 0 0 1 1.5 0V3h1.5a1.5 1.5 0 0 1 1.5 1.5v14.25a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.5A1.5 1.5 0 0 1 5.25 3h1.5v-.75a.75.75 0 0 1 .75-.75Zm-.75 3h-1.5v14.25a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.5h-1.5v.75a.75.75 0 0 1-1.5 0V4.5h-3v.75a.75.75 0 0 1-1.5 0V4.5h-3v.75a.75.75 0 0 1-1.5 0V4.5Zm1.5 7.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="drawer-text text-sm text-[#0d1619]">
                        Notes
                      </p>
                    </div>

                    {/* FORMS */}
                    <div className="flex flex-col gap-[2px] items-center">
                      <div className="bg-icon bg-[#f2f2f7]">
                        <div className="h-[24px] w-[24px]">
                          <svg
                            fill="#0d1619"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.19 2.69a1.5 1.5 0 0 1 1.06-.44h9a.75.75 0 0 1 .53.22l5.25 5.25c.141.14.22.331.22.53v12a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75c0-.398.158-.78.44-1.06Zm9.31 1.06H5.25v16.5h13.5V9h-4.5a.75.75 0 0 1-.75-.75v-4.5ZM15 4.81l2.69 2.69H15V4.81Zm-6.75 7.94A.75.75 0 0 1 9 12h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3A.75.75 0 0 1 9 15h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="drawer-text text-sm text-[#0d1619]">
                        Forms
                      </p>
                    </div>

                    {/* ACTIVITY */}
                    <div className="flex flex-col gap-[2px] items-center">
                      <div className="bg-icon bg-[#f2f2f7]">
                        <div className="h-[24px] w-[24px]">
                          <svg
                            fill="#0d1619"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 6a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 12 6Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="drawer-text text-sm text-[#0d1619]">
                        Activity
                      </p>
                    </div>
                  </div>
                )}

                <div className="w-full h-full">{children}</div>
              </div>

              {/* drawer body */}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default DrawerComponent;
