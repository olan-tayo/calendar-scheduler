import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  ArrowBack,
  ArrowForwardIos,
  Close,
  ExpandLess,
  ExpandMore,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Search,
} from "@mui/icons-material";
import DrawerComponent from "../../components/Drawers/drawers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const localizer = momentLocalizer(moment);

const Calander = () => {
  const time = [
    { key: "day", value: "Day" },
    { key: "week", value: "Week" },
    { key: "month", value: "Month" },
  ];

  const clients = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      name: "Tayo John",
      email: "tayojohn@gmail.com",
    },
  ];

  const services = [
    {
      type: "Massage",
      servicesOffered: [
        {
          service: "Leg and calming sounds",
          time: "1",
          time_type: "hr",
          amount: "100000",
        },
      ],
    },
    {
      type: "Hair",
      servicesOffered: [
        {
          service: "Hair cut",
          time: "30",
          time_type: "mins",
          amount: "5000",
        },
        {
          service: "Plaiting",
          time: "5",
          time_type: "hr",
          amount: "20000",
        },
      ],
    },
  ];

  const view = JSON.parse(localStorage.getItem("myView"));
  // let allEvents = [JSON.parse(localStorage.getItem("myevents"))];
  const [hoveredSlot, setHoveredSlot] = useState(null);
  const [events, setEvents] = useState([]);
  const [toggleView, setToggleView] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [showDrawer, setShowDrawer] = useState(false);
  const [modalView, setModalView] = useState("appointment");
  const [event, setEvent] = useState({ client: {}, service: {} });
  const [selectedEvent, setSelectedEvent] = useState();
  const [currentDate, setCurrentDate] = useState(moment());
  const [showFilter, setShowFilter] = useState(false);

  const handleNavigate = (date, view) => {
    setCurrentDate(date);
  };

  const handleToday = () => {
    setCurrentDate(moment());
  };

  const handleNext = (view) => {
    setCurrentDate(currentDate.clone().add(1, view?.key));
  };

  const handleBack = (view) => {
    setCurrentDate(currentDate.clone().subtract(1, view?.key));
  };

  const handleSelectView = (selectedView) => {
    localStorage.setItem(
      "myView",
      JSON.stringify({
        key: selectedView,
        value: time.find((item) => item.key === selectedView)?.value,
      })
    );
    setToggleView(false);
    window.location.reload();
  };

  const getCurrentDay = (date) => {
    if (moment(date).isSame(moment(), "day")) {
      return {
        className: "current-day-div",
        date: "date-text",
        day: "day-text",
      };
    }
    return {};
  };

  const handleSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setShowDrawer(true);
    setTooltipPosition({ top: slotInfo.y, left: slotInfo.x });
    setHoveredSlot(slotInfo);
  };

  const handleTooltipClose = () => {
    setSelectedSlot(null);
  };

  // const slotPropGetter = (date, resourceId, resourceIndex) => {
  //   if (hoveredSlot && resourceId === 0) {
  //     // Assuming resourceId 0 represents the main resource
  //     const start = moment(hoveredSlot.start).startOf("hour");
  //     const end = moment(hoveredSlot.end).endOf("hour");

  //     if (moment(date).isBetween(start, end, null, "[]")) {
  //       return {
  //         style: {
  //           backgroundColor: "rgba(0, 123, 255, 0.5)", // Set your preferred background color
  //           color: "white", // Set the text color
  //         },
  //       };
  //     }
  //   }
  //   return {};
  // };

  const Event = ({ event }) => (
    <div className="myEvent" onClick={() => handleSelectEvent(event)}>
      <strong>{` ${event?.client?.name}`}</strong>
      <p>{event?.service?.service}</p>
    </div>
  );

  const handleSelectEvent = (event) => {
    setShowDrawer(true);
    setModalView("booked");
    setSelectedEvent(event);
  };

  const handleAddClient = (name, email) => {
    setEvent((prev) => ({
      ...prev,
      client: {
        name,
        email,
      },
    }));
    setModalView("appointment");
  };

  const handleAddService = (service, time, time_type, amount) => {
    setEvent((prev) => ({
      ...prev,
      service: {
        service,
        time,
        time_type,
        amount,
      },
    }));
    setModalView("appointment");
  };

  const handleSaveEvent = () => {
    const value = {
      start: selectedSlot?.start,
      end: moment(selectedSlot?.start)
        .clone()
        ?.add(
          event?.service?.time,
          `${event?.service?.time_type === "hr" ? "hour" : "minutes"}`
        ),
      service: event?.service,
      client: event?.client,
    };

    setEvents((prev) => {
      const updatedEvents = [...prev, value];
      localStorage.setItem("myevents", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
    setEvent({ client: {}, service: {} });
    setShowDrawer(false);
  };

  useEffect(() => {
    if (!view) {
      localStorage.setItem(
        "myView",
        JSON.stringify({
          key: "week",
          value: "Week",
        })
      );
    }
  }, [view]);

  return (
    <>
      <div className="w-full relative ">
        <div className="hidden lg:block">
          <div className="bg-[#f2f2f7] h-[72px] w-full flex justify-between items-center px-[40px] py-[16px]">
            <div>
              <div className="cursor-pointer bg-white text-sm text-black h-[34px] rounded-[40px] border-black border-[1px] w-full px-[9px] flex gap-[15px] items-center">
                <p>Aleph Salon</p>
                <ExpandMore style={{ fontSize: "20px", fontWeight: 400 }} />
              </div>
            </div>

            {/*  */}
            <div>
              <div className="h-[40px] w-full px-2 flex  border-[1px] bg-white border-[#bfbfbf] text-sm rounded-[24px] cursor-pointer">
                <div className="px-2 border-r-[1px] border-r-[#bfbfbf] flex items-center">
                  <KeyboardArrowLeft
                    onClick={() => handleBack(view)}
                    style={{
                      color: "101928",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  />
                </div>
                <div className="px-5 border-r-[1px] font-medium tetx-[15px] border-r-[#bfbfbf] flex items-center">
                  <p>Today</p>
                </div>
                <div
                  className="px-5 border-r-[1px] font-medium tetx-[15px] border-r-[#bfbfbf] flex items-center"
                  onClick={handleToday}
                >
                  <p>{moment(currentDate).format("MMM DD, YYYY")}</p>
                </div>
                <div className="px-2  flex items-center">
                  <KeyboardArrowRight
                    onClick={() => handleNext(view)}
                    style={{
                      color: "101928",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[30px]">
              {/* SETTINGS */}
              <div className="rounded-full flex justify-center items-center bg-white w-[40px] h-[40px] border-[1px] border-[#bfbfbf]">
                <div className="w-[24px] h-[24px] ">
                  <svg
                    fill="#000"
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

              {/* VIEW */}
              <div className="relative">
                <div
                  onClick={() => setToggleView(!toggleView)}
                  className="cursor-pointer bg-white text-sm text-black h-[34px] rounded-[40px] border-[#bfbfbf] border-[1px] w-[100px] px-[9px] flex justify-center gap-[15px] items-center"
                >
                  <p className="capitalize">{view?.value || "Week"}</p>
                  {toggleView ? (
                    <ExpandLess style={{ fontSize: "20px", fontWeight: 400 }} />
                  ) : (
                    <ExpandMore style={{ fontSize: "20px", fontWeight: 400 }} />
                  )}
                </div>

                {toggleView && (
                  <div className="absolute bg-[#000] w-[130px] rounded-[8px] mt-1 px-4 py-1 text-white z-20 cursor-pointer">
                    {time?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-[5px] py-3"
                          onClick={() => handleSelectView(item.key)}
                        >
                          {item?.value}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ADD APPOINTMENTS */}
              <div className="cursor-pointer bg-black text-sm text-white h-[34px] rounded-[40px] border-black border-[1px] w-[80px] px-[9px] flex gap-[15px] items-center">
                <p>Add</p>
                <ExpandMore style={{ fontSize: "20px", fontWeight: 400 }} />
              </div>
            </div>
          </div>

          {/* DAY VIEW */}
          {view?.key === "day" && (
            <div className="bg-white flex flex-col justify-center items-center p-[10px] w-full h-[130px]">
              <div className="bg-[#e7e8ff] h-[68px] w-[68px] font-semibold flex justify-center items-center text-[#6950f3] text-2xl leading-[32px] rounded-full">
                <p className="">TO</p>
              </div>
              <p className="pt-2 text-xs font-semibold">Tfaweya Omotade</p>
            </div>
          )}
        </div>

        <div className="flex items-center lg:hidden justify-between my-4 px-5">
          <MoreVert style={{ fontSize: "18px" }} />
          <div className="font-bold text-[10px] gap-1  flex items-center">
            <p>{moment(currentDate).format("MMM DD, YYYY")}</p>
            <ExpandMore style={{ fontSize: "16px" }} />
          </div>
          <div
            className="w-[15px] h-[15px]"
            onClick={() => setShowFilter(true)}
          >
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5.25 3a.75.75 0 0 1 .75.75V12h1.5a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 3 12h1.5V3.75A.75.75 0 0 1 5.25 3ZM12 3a.75.75 0 0 1 .75.75V7.5h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5V3.75A.75.75 0 0 1 12 3Zm6.75 0a.75.75 0 0 1 .75.75V15H21a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5H18V3.75a.75.75 0 0 1 .75-.75ZM12 10.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75ZM5.25 15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm13.5 3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="">
          <div className="relative">
            <Calendar
              localizer={localizer}
              events={events}
              onSelectEvent={handleSelectEvent}
              startAccessor="start"
              endAccessor="end"
              date={currentDate.toDate()}
              onNavigate={handleNavigate}
              selectable
              defaultView={view?.key || "week"}
              toolbar={null}
              timeslots={4}
              step={15}
              onSelectSlot={(slotInfo) => handleSelect(slotInfo)}
              // onSelectEvent={() => handleTooltipClose()}
              onView={() => handleTooltipClose()}
              components={{
                event: Event,
                week: {
                  header: (props) => (
                    <div
                      className={`py-[5px] lg:py-[10px] text-[#878c93] border-none border-b-none outline-none  items-center flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] ${
                        getCurrentDay(props.date).className
                      }`}
                    >
                      <div className={` ${getCurrentDay(props.date).date}`}>
                        <p
                          className={` text-[14px] lg:text-[23px] font-medium leading-[23px]  `}
                        >
                          {" "}
                          {moment(props.date).format("DD")}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`${
                            getCurrentDay(props.date).day
                          } hidden lg:block font-bold text-[6px] lg:text-sm`}
                        >
                          {moment(props.date).format("dddd")}
                        </p>

                        <p
                          className={`${
                            getCurrentDay(props.date).day
                          } block lg:hidden font-bold text-[6px] lg:text-sm`}
                        >
                          {moment(props.date).format("ddd")}
                        </p>
                      </div>
                    </div>
                  ),
                },
                dayWrapper: ({ children }) => <div>{children}</div>,
                timeSlotWrapper: ({ children }) => (
                  <div
                    style={{
                      height: "20px",
                      border: 0,
                      fontSize: "14px",
                    }}
                  >
                    {children}
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>

      <DrawerComponent
        showIcons={
          modalView === "client" || modalView === "services" ? false : true
        }
        show={showDrawer}
        showDrawer={() => {
          setShowDrawer(false);
          setEvent({ client: {}, service: {} });
          setModalView("appointment");
        }}
      >
        {modalView === "client" ? (
          <div className=" py-[16px]">
            <div className="px-[32px]">
              <ArrowBack
                onClick={() => setModalView("appointment")}
                style={{ fontSize: "24px" }}
              />
            </div>
            <h1 className="pb-[24px] px-[32px]  mt-[20px] font-semibold text-[24px]">
              Select Client
            </h1>

            <div className="px-[32px]">
              <div className="flex px-[14px] gap-2 border-[1px] rounded-[8px] border-[#bfbfbf] h-[48px] py-[12px] items-center ">
                <Search style={{ fontSize: "20px", color: "#757676" }} />
                <input
                  className="border-none outline-none w-full text-[#757676] text-sm"
                  placeholder="Search client or leave empty for walk-in"
                />
              </div>
            </div>

            <div className="flex px-[32px]  justify-center items-center py-3 cursor-pointer gap-1">
              <AddCircleOutlineIcon
                style={{ fontSize: "18px", color: "#6950f3" }}
              />
              <p className="text-sm text-[#6950f3]">Create new client</p>
            </div>

            <div className="border-[0.5px]" />

            <div>
              {clients?.map((client, index) => {
                return (
                  <div
                    key={index}
                    className=" flex items-center gap-2 my-3 mt-6 px-[32px] cursor-pointer"
                    onClick={() => handleAddClient(client?.name, client?.email)}
                  >
                    <div className="bg-[#e7e8ff] h-[58px] w-[58px] font-medium flex justify-center items-center text-[#6950f3] text-2xl leading-[32px] rounded-full">
                      <p className="">{client?.name?.charAt(0)}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#000]">
                        {client?.name}
                      </p>
                      <p className="text-sm text-[#757676]"> {client?.email}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : modalView === "services" ? (
          <div className=" py-[16px]">
            <div className="px-[32px]">
              <ArrowBack
                onClick={() => setModalView("appointment")}
                style={{ fontSize: "24px" }}
              />
            </div>
            <h1 className="pb-[24px] px-[32px]  mt-[20px] font-semibold text-[24px]">
              Select Services
            </h1>

            <div className="px-[32px]">
              <div className="flex px-[14px] gap-2 border-[1px] rounded-[8px] border-[#bfbfbf] h-[48px] py-[12px] items-center ">
                <Search style={{ fontSize: "20px", color: "#757676" }} />
                <input
                  className="border-none outline-none w-full text-[#757676] text-sm"
                  placeholder="Search client or leave empty for walk-in"
                />
              </div>
            </div>

            <div className="border-[0.5px] mt-4" />

            <div className="cursor-pointer">
              {services?.map((service, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center gap-3 px-[32px] mt-[20px]">
                      <p className="font-semibold text-[16px]">
                        {service?.type}
                      </p>
                      <div className="flex justify-center items-center bg-[#f8f8fb] w-[20px] h-[20px] rounded-full text-xs leading-[14px]">
                        <p>{service?.servicesOffered?.length}</p>
                      </div>
                    </div>
                    {service?.servicesOffered?.map((data, offeredIndex) => {
                      return (
                        <div
                          className="px-[32px] mt-4"
                          key={offeredIndex}
                          onClick={() =>
                            handleAddService(
                              data?.service,
                              data?.time,
                              data?.time_type,
                              data?.amount
                            )
                          }
                        >
                          <div className="border-[1px] px-[15px]  border-[#bfbfbf] rounded-[8px] py-[20px] border-l-[#6950f3] flex justify-between  border-l-[5px]">
                            <div>
                              <p className="text-[#0d1619] text-sm font-semibold">
                                {data?.service}
                              </p>
                              <p className="text-[#757676] text-sm font-normal">
                                {data?.time}
                                {data?.time_type}
                              </p>
                            </div>
                            <div>
                              <p className="text-[#0d1619] text-sm font-semibold">
                                NGN {Number(data?.amount)?.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        ) : modalView === "booked" ? (
          <div className=" w-full h-screen relative">
            <div className=" w-full">
              <div className="bg-[#3093e8] h-[130px] w-full px-5 py-5">
                <div className="flex lg:hidden justify-end  flex-end  w-full">
                  <Close
                    style={{ fontSize: "25px", color: "#FFFFFF" }}
                    onClick={() => {
                      setShowDrawer(false);
                      setModalView("appointment");
                    }}
                  />
                </div>
                <h1 className="pb-[28px] font-semibold text-[24px] text-white">
                  Booked
                </h1>
              </div>

              <div className="px-[32px] py-4">
                {/* SELECT A CLIENT */}
                <div
                  className="mt-[-15%] bg-white  cursor-pointer border-[1px] rounded-[8px] p-[16px] w-full flex items-center justify-between border-[#bfbfbf]"
                  onClick={
                    selectedEvent?.client?.name
                      ? null
                      : () => setModalView("client")
                  }
                >
                  {selectedEvent?.client?.name ? (
                    <div className="flex gap-3  items-center">
                      <div className="bg-[#e7e8ff] h-[58px] w-[58px] font-medium flex justify-center items-center text-[#6950f3] text-2xl leading-[32px] rounded-full">
                        <p className="">
                          {selectedEvent?.client?.name?.charAt(0)}
                        </p>
                      </div>
                      <div className="">
                        <p className="font-semibold text-sm">
                          {selectedEvent?.client?.name}
                        </p>
                        <p className="text-sm">
                          {selectedEvent?.client?.email}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3  items-center">
                      <div className="text-[#6950f3] flex justify-center items-center bg-[#e7e8ff] w-[64px] h-[64px] rounded-full">
                        <div className="w-[30px] h-[30px]">
                          <svg
                            fill="#6950f3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 3.75a5.25 5.25 0 0 0-.078 10.5h.156A5.25 5.25 0 0 0 12 3.75Zm3.463 11.045a6.75 6.75 0 1 0-6.925 0 11.25 11.25 0 0 0-6.281 5.08.75.75 0 1 0 1.299.75 9.75 9.75 0 0 1 16.888 0 .75.75 0 1 0 1.3-.75 11.25 11.25 0 0 0-6.281-5.08Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="">
                        <p className="font-semibold text-sm">Select a client</p>
                        <p className="text-sm">Leave empty for walk in</p>
                      </div>
                    </div>
                  )}

                  <div>
                    {!selectedEvent?.client?.name && (
                      <div className="w-[24px] h-[24px]">
                        <svg
                          fill="#000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 4a.75.75 0 0 1 .75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5A.75.75 0 0 1 12 4Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm ">
                        {moment(selectedEvent?.start)?.format("dddd") +
                          "," +
                          " " +
                          moment(selectedEvent?.start)?.format("ll")}
                      </p>
                      <ExpandMore style={{ fontSize: "24px" }} />
                    </div>
                    <p className="text-sm text-[#757676]">Doesn't repeat</p>
                  </div>
                  <div>
                    <button className="text-[101928] rounded-[24px] border-[#d5d7da] outline-none text-sm border-[1px] px-[12px] py-[6px]">
                      Edit{" "}
                    </button>
                  </div>
                </div>

                {/*  SELECT A SERVICE */}
                {selectedEvent?.service?.service ? (
                  <div className="border-[1px] px-[15px] mt-6  border-[#bfbfbf] rounded-[8px] py-[20px] border-l-[#6950f3] flex justify-between  border-l-[5px]">
                    <div>
                      <p className="text-[#0d1619] text-sm font-semibold">
                        {selectedEvent?.service?.service}
                      </p>
                      <p className="text-[#757676] text-sm font-normal">
                        {selectedEvent?.service?.time +
                          selectedEvent?.service?.time_type}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#0d1619] text-sm font-semibold">
                        NGN{" "}
                        {Number(
                          selectedEvent?.service?.amount
                        )?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setModalView("services")}
                    className="flex justify-between items-center mt-6 border-[1px]  text-sm font-medium rounded-[4px] border-[#bfbfbf] px-[16px] py-[12px] text-[#757676]"
                  >
                    <p>Add a service</p>
                    <ArrowForwardIos style={{ fontSize: "12px" }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className=" w-full h-screen relative">
            <div className="px-[32px] py-4 w-full">
              <div className="flex lg:hidden justify-end  flex-end py-3 w-full">
                <Close
                  style={{ fontSize: "25px" }}
                  onClick={() => setShowDrawer(false)}
                />
              </div>
              <h1 className="pb-[24px] font-semibold text-[24px]">
                New appointment
              </h1>

              {/* SELECT A CLIENT */}
              <div
                className="border-[1px] cursor-pointer border-[#bfbfbf] rounded-[8px] p-[16px] w-full flex items-center justify-between"
                onClick={
                  event?.client?.name ? null : () => setModalView("client")
                }
              >
                {event?.client?.name ? (
                  <div className="flex gap-3  items-center">
                    <div className="bg-[#e7e8ff] h-[58px] w-[58px] font-medium flex justify-center items-center text-[#6950f3] text-2xl leading-[32px] rounded-full">
                      <p className="">{event?.client?.name?.charAt(0)}</p>
                    </div>
                    <div className="">
                      <p className="font-semibold text-sm">
                        {event?.client?.name}
                      </p>
                      <p className="text-sm">{event?.client?.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3  items-center">
                    <div className="text-[#6950f3] flex justify-center items-center bg-[#e7e8ff] w-[64px] h-[64px] rounded-full">
                      <div className="w-[30px] h-[30px]">
                        <svg
                          fill="#6950f3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 3.75a5.25 5.25 0 0 0-.078 10.5h.156A5.25 5.25 0 0 0 12 3.75Zm3.463 11.045a6.75 6.75 0 1 0-6.925 0 11.25 11.25 0 0 0-6.281 5.08.75.75 0 1 0 1.299.75 9.75 9.75 0 0 1 16.888 0 .75.75 0 1 0 1.3-.75 11.25 11.25 0 0 0-6.281-5.08Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="">
                      <p className="font-semibold text-sm">Select a client</p>
                      <p className="text-sm">Leave empty for walk in</p>
                    </div>
                  </div>
                )}

                <div>
                  {!event?.client?.name && (
                    <div className="w-[24px] h-[24px]">
                      <svg
                        fill="#000"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 4a.75.75 0 0 1 .75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5A.75.75 0 0 1 12 4Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm ">
                      {moment(selectedSlot?.start)?.format("dddd") +
                        "," +
                        " " +
                        moment(selectedSlot?.start)?.format("ll")}
                    </p>
                    <ExpandMore style={{ fontSize: "24px" }} />
                  </div>
                  <p className="text-sm text-[#757676]">Doesn't repeat</p>
                </div>
                <div>
                  <button className="text-[101928] rounded-[24px] border-[#d5d7da] outline-none text-sm border-[1px] px-[12px] py-[6px]">
                    Edit{" "}
                  </button>
                </div>
              </div>

              {/*  SELECT A SERVICE */}
              {event?.service?.service ? (
                <div className="border-[1px] px-[15px] mt-6  border-[#bfbfbf] rounded-[8px] py-[20px] border-l-[#6950f3] flex justify-between  border-l-[5px]">
                  <div>
                    <p className="text-[#0d1619] text-sm font-semibold">
                      {event?.service?.service}
                    </p>
                    <p className="text-[#757676] text-sm font-normal">
                      {event?.service?.time}
                      {event?.service?.time_type}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#0d1619] text-sm font-semibold">
                      NGN {Number(event?.service?.amount)?.toLocaleString()}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setModalView("services")}
                  className="flex justify-between items-center mt-6 border-[1px]  text-sm font-medium rounded-[4px] border-[#bfbfbf] px-[16px] py-[12px] text-[#757676]"
                >
                  <p>Add a service</p>
                  <ArrowForwardIos style={{ fontSize: "12px" }} />
                </div>
              )}
            </div>

            <div className="absolute z-70 bottom-0 border-t-[1px] p-6 border-t-[#e7e8e9] w-full">
              <div className="flex items-center justify-between">
                <p className="text-[#0d1619] font-semibold tetx-sm">Total</p>
                <p className="text-[#0d1619] font-semibold tetx-sm">
                  {event?.service?.amount
                    ? "NGN" +
                      " " +
                      Number(event?.service?.amount)?.toLocaleString() +
                      "(" +
                      event?.service?.time +
                      event?.service?.time_type +
                      ")"
                    : " Free min(0)"}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 gap-4 cursor-pointer">
                <div className="w-1/2">
                  <button className="outline-none bg-white text-[#0d1619] w-full rounded-[8px] h-[48px] font-semibold text-sm border-[1px] border-[#bfbfbf]">
                    {" "}
                    Checkout
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    className="outline-none bg-[#0d1619] text-[#fff] w-full rounded-[8px] h-[48px] font-semibold text-sm border-[1px] border-[#bfbfbf]"
                    onClick={handleSaveEvent}
                  >
                    {" "}
                    Save
                  </button>
                </div>
                <button className="outline-none"></button>
              </div>
            </div>
          </div>
        )}
      </DrawerComponent>

      <div className="block lg:hidden">
        <DrawerComponent
          showIcons={false}
          show={showFilter}
          showDrawer={() => {
            setShowFilter(false);
            setShowDrawer(false);
          }}
        >
          <div className="  py-[16px]">
            <div className="flex lg:hidden justify-end px-[16px]  flex-end  w-full">
              <Close
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setShowFilter(false);
                }}
              />
            </div>
            <h1 className="px-[28px] mt-[20px] font-semibold text-[23px]">
              Calander View
            </h1>
            <div className="px-[28px] flex items-center gap-8 mt-4 mb-[59px]">
              {/* DAY */}
              <div
                className="flex items-center flex-col gap-2"
                onClick={() => handleSelectView("day")}
              >
                <div
                  className={`${
                    view?.key === "day" ? "bg-[#6950f3]" : "bg-[white]"
                  } h-[44px] w-[44px] rounded-full border-[1px] border-[#d5d7da] flex justify-center items-center`}
                >
                  <div className="w-[20px] h-[20px]">
                    <svg
                      fill={`${view?.key === "day" ? "#FFFFFF" : "#000"}  `}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 3.75Zm0 4.5a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-7.5Zm16.5 0h-15v7.5h15v-7.5ZM3 20.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>

                <p>Day</p>
              </div>

              {/* WEEK */}
              <div
                className="flex items-center flex-col gap-2"
                onClick={() => handleSelectView("week")}
              >
                <div
                  className={`${
                    view?.key === "week" ? "bg-[#6950f3]" : "bg-[white]"
                  } h-[44px] w-[44px] rounded-full border-[1px] border-[#d5d7da] flex justify-center items-center`}
                >
                  <div className="w-[20px] h-[20px]">
                    <svg
                      fill={`${view?.key === "week" ? "#FFFFFF" : "#000"}  `}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25Zm6 0h-4.5v13.5h4.5V5.25Zm1.5 0v13.5h4.5V5.25h-4.5Zm6 0v13.5h4.5V5.25h-4.5Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>

                <p>Week</p>
              </div>

              {/* Month */}
              <div
                className="flex items-center flex-col gap-2"
                onClick={() => handleSelectView("month")}
              >
                <div
                  className={`${
                    view?.key === "month" ? "bg-[#6950f3]" : "bg-[white]"
                  } h-[44px] w-[44px] rounded-full border-[1px] border-[#d5d7da] flex justify-center items-center`}
                >
                  <div className="w-[20px] h-[20px]">
                    <svg
                      fill={`${view?.key === "month" ? "#FFFFFF" : "#000"}  `}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 5.25a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25Zm4.5 0h-3v13.5h3V5.25Zm1.5 0v13.5h3V5.25h-3Zm4.5 0v13.5h3V5.25h-3Zm4.5 0v13.5h3V5.25h-3Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>

                <p>Month</p>
              </div>
            </div>

            <h1 className="px-[28px] mb-6 mt-[20px] font-semibold text-[23px]">
              Team Members
            </h1>

            <div className="bg-[#e7e8ff] p-4 flex items-center gap-3">
              <div className="bg-[#e7e8ff] border-[3px] border-[#FFF] h-[44px] w-[44px] font-semibold flex justify-center items-center text-[#6950f3] rounded-full">
                <p className="text-sm">TO</p>
              </div>

              <p className="text-base font-semibold">Tfaweya Omotade</p>
            </div>
          </div>
        </DrawerComponent>
      </div>
    </>
  );
};

export default Calander;
