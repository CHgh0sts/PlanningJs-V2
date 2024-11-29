"use client";
import React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "@/lib/GlobalState";
import { Event } from "@/components/custom/Evenement/Event";
export const Day = () => {
  const {
    actualDate,
    listUsers,
    listEvents,
    setListEvents,
    idUserList,
    setAddEventConfig,
    changeSize,
    setChangeSize,
  } = useContext(GlobalContext);
  const [calendarData, setCalendarData] = useState([]);
  const offsetYRef = useRef(0);

  const updateEventDate = async (eventId, newDate) => {
    try {
      console.log(newDate);
      const res = await fetch(`/api/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: newDate, updateWithDrag: true }),
      });
      if (!res.ok)
        throw new Error(
          "Erreur lors de la mise à jour de la date de l'événement"
        );
      const updatedEvent = await res.json();
      return updatedEvent;
    } catch (error) {
      console.error(error);
    }
  };
  const renderHourLabels = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <div
          key={`label-hour-${i}`}
          className="flex text-[.65rem] flex-col justify-center items-center h-[10vh] border-t border-gray-300"
        >
          <div>{i}:00</div>
        </div>
      );
    }
    return hours;
  };
  const renderTimeSlots = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <div
          key={`hour-${i}`}
          className="flex flex-col border-t border-gray-300 dark:border-gray-600 h-[5vh]"
        >
          <div className="half-hour h-1/2 border-b border-gray-200 dark:border-gray-700"></div>
          <div className="half-hour h-1/2"></div>
        </div>
      );
    }
    return hours;
  };
  const fetchEvents = async (date) => {
    const baseDate = new Date(date);

    const currentDay = baseDate.getDay();
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    const firstDayOfWeek = new Date(baseDate);
    firstDayOfWeek.setDate(baseDate.getDate() + diffToMonday);
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    let startDate = firstDayOfWeek.toISOString().split("T")[0];
    let endDate = lastDayOfWeek.toISOString().split("T")[0];

    const res = await fetch(
      `/api/events?startDate=${startDate}&endDate=${endDate}`
    );

    if (!res.ok) {
      console.error(
        "Erreur lors de la récupération des événements:",
        res.statusText
      );
      return [];
    }

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Erreur lors du parsing JSON:", error);
      return [];
    }
  };
  const recupEvents = async () => {
    const listEvents = await fetchEvents(actualDate);
    setListEvents(listEvents);
  };
  const handleDragStart = (event) => {
    const eventBox = event.target.getBoundingClientRect();
    offsetYRef.current = event.clientY - eventBox.top;
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = async (event, newDay) => {
    const eventId = event.dataTransfer.getData("eventId");
    const oldDay = parseInt(event.dataTransfer.getData("oldDay"), 10);
    const newDate = new Date(
      Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), newDay)
    );

    let hour = 0;
    let minutes = 0;
    const hoursContainer =
      event.currentTarget.querySelector(".hours-container");
    if (hoursContainer) {
      const rect = hoursContainer.getBoundingClientRect();
      const offsetY = event.clientY - rect.top - offsetYRef.current;
      const totalHeight = rect.height;
      const totalSlots = 48;
      const slot = Math.floor((offsetY / totalHeight) * totalSlots);
      hour = Math.floor(slot / 2);
      minutes = (slot % 2) * 30;
    }
    if (hour >= 24) {
      hour = 0;
      minutes = 0;
    }
    if (hour < 0) {
      hour = 0;
      minutes = 0;
    }
    if (minutes < 0) minutes *= -1;

    console.log(`${hour}:${minutes}`);
    const newDateString =
      newDate.toISOString().split("T")[0] +
      `T${hour.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:00.000Z`;
    let updatedEvent = await updateEventDate(eventId, newDateString);

    recupEvents();
  };
  const generateDayView = async (date) => {
    const startOfDay = new Date(date);
    const currentDate = new Date();
    const today = new Date();

    const isToday =
      startOfDay.getFullYear() === today.getFullYear() &&
      startOfDay.getMonth() === today.getMonth() &&
      startOfDay.getDate() === today.getDate();

    return [
      {
        date: startOfDay,
        day: startOfDay.getDate(),
        weekday: startOfDay.toLocaleDateString("fr-FR", { weekday: "long" }),
        isCurrentMonth: true,
        isToday,
        events: [],
      },
    ];
  };

  const handleClick = async (dayInfo) => {
    let hour = 0;
    let minutes = 0;
    const hoursContainer =
      event.currentTarget.querySelector(".hours-container");
    if (hoursContainer) {
      const rect = hoursContainer.getBoundingClientRect();
      const offsetY = event.clientY - rect.top - offsetYRef.current;
      const totalHeight = rect.height;
      const totalSlots = 48;
      const slot = Math.floor((offsetY / totalHeight) * totalSlots);
      hour = Math.floor(slot / 2);
      minutes = (slot % 2) * 30;
    }
    if (hour >= 24) {
      hour = 0;
      minutes = 0;
    }
    if (hour < 0) {
      hour = 0;
      minutes = 0;
    }
    if (minutes < 0) minutes *= -1;

    const addEventInDate = new Date(
      Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), dayInfo.day)
    )
      .toISOString()
      .split("T")[0];

    const configEvent = {
      title: "",
      debutAt: addEventInDate,
      finAt: addEventInDate,
      debutTime: `${hour < 10 ? "0" + hour : hour}:${
        minutes < 10 ? "0" + minutes : minutes
      }`,
      finTime: `${
        minutes == 30
          ? hour < 10
            ? "0" + (hour + 1)
            : hour + 1
          : hour < 10
          ? "0" + hour
          : hour
      }:${minutes == 30 ? "00" : "30"}`,
    };
    if (!changeSize) setAddEventConfig(configEvent);
  };
  useEffect(() => {
    if (actualDate) {
      generateDayView(actualDate).then(setCalendarData);
    }
  }, [actualDate]);

  return (
    <div className="p-1 w-full h-[88vh] flex">
      <div className="flex relative w-full h-full overflow-x-hidden">
        <div className="listHeure w-[3rem] flex flex-col">
          {renderHourLabels()}
        </div>
        <div className={`grid grid-cols-1 h-full w-full`}>
          {calendarData.map((dayInfo, index) => (
            <div
              key={index}
              className={`border border-gray-100 dark:border-gray-700 flex flex-col ${
                dayInfo.isCurrentMonth
                  ? "bg-white text-black dark:bg-gray-950 dark:text-white"
                  : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragStart={(e) => handleDragStart(e)}
              onDrop={(event) => handleDrop(event, dayInfo.day)}
              onClick={
                dayInfo.isCurrentMonth
                  ? (event) => handleClick(dayInfo, event)
                  : undefined
              }
            >
              <div
                className={`flex dayNumber notMonth${
                  dayInfo.isToday ? " inDay" : ""
                }`}
              >
                <p>
                  {dayInfo.weekday.charAt(0).toUpperCase() +
                    dayInfo.weekday.slice(1)}{" "}
                  {dayInfo.day}
                </p>
              </div>
              <div className="hours-container flex-grow overflow-auto relative">
                {renderTimeSlots()}
                <div className="absolute inset-0 overflow-hidden">
                  {listEvents.map((event, eventIndex) => {
                    const eventDate = new Date(event.debutAt);
                    const dayDate = new Date(dayInfo.date);
                    const idUserInEvent = event.userId.split("/");
                    let isUser = false;
                    idUserInEvent.forEach((id) => {
                      if (idUserList.includes(parseInt(id))) isUser = true;
                    });

                    const isSameDay =
                      eventDate.getFullYear() === dayDate.getFullYear() &&
                      eventDate.getMonth() === dayDate.getMonth() &&
                      eventDate.getDate() === dayDate.getDate() &&
                      isUser;

                    if (isSameDay) {
                      const eventDebut = new Date(event.debutAt);
                      const eventFin = new Date(event.finAt);
                      const listIdUser = event.userId.split("/");
                      let user = [];
                      listIdUser.forEach((userIdInEvent) => {
                        listUsers.map((userInList) => {
                          if (userInList.id == userIdInEvent)
                            user.push(userInList);
                        });
                      });

                      const top =
                        (eventDebut.getHours() + eventDebut.getMinutes() / 60) *
                        5;
                      const duration =
                        (eventFin.getTime() - eventDebut.getTime()) /
                        (1000 * 60 * 60);
                      const height = duration * 5;
                      const formattedHour = eventDebut
                        .getHours()
                        .toString()
                        .padStart(2, "0");
                      const formattedMinutes = eventDebut
                        .getMinutes()
                        .toString()
                        .padStart(2, "0");

                      return (
                        <Event
                          style={{
                            top: `${top}vh`,
                            height: `${height}vh`,
                            zIndex: 50 - duration * 2,
                            "--c": user.length > 1 ? "gray" : user[0].color,
                          }}
                          key={eventIndex}
                          eventKey={event.id}
                          event={event}
                          formattedHour={formattedHour}
                          formattedMinutes={formattedMinutes}
                          eventIndex={eventIndex}
                          heightEditable={true}
                          localDebutAt={eventDebut}
                          localFinAt={eventFin}
                          className={`event editable absolute left-0 w-full overflow-x-hidden`}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
