"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "@/lib/GlobalState";
import { Event } from "@/components/custom/Evenement/Event";

export const Month = () => {
  const {
    actualDate,
    setAddEventConfig,
    setListEvents,
    listEvents,
    listUsers,
    idUserList,
  } = useContext(GlobalContext);
  const [calendarData, setCalendarData] = useState([]);
  const [nbtLigne, setNbtLigne] = useState(5);
  const offsetYRef = useRef(0);
  const [startDrop, setStartDrop] = useState(false);
  const [dragOverDay, setDragOverDay] = useState(null);

  const generateMonthView = async (date) => {
    const today = new Date();
    const firstDayOfMonth = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), 1)
    );
    const lastDayOfMonth = new Date(
      Date.UTC(date.getFullYear(), date.getMonth() + 1, 0)
    );

    const daysBefore = (firstDayOfMonth.getUTCDay() + 6) % 7;
    let daysAfter = 42 - (daysBefore + lastDayOfMonth.getUTCDate());
    while (daysAfter >= 7) daysAfter -= 7;

    const afterDays = [];
    for (let i = 1; i <= daysAfter; i++) {
      afterDays.push(
        new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, i))
      );
    }

    setNbtLigne((daysBefore + lastDayOfMonth.getUTCDate() + daysAfter) / 7);

    const calendarDays = [];

    const previousMonthLastDay = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), 0)
    ).getUTCDate();
    for (let i = daysBefore; i > 0; i--) {
      calendarDays.push({
        day: previousMonthLastDay - i + 1,
        isCurrentMonth: false,
        events: [],
      });
    }
    for (let i = 1; i <= lastDayOfMonth.getUTCDate(); i++) {
      const isToday =
        i === today.getUTCDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
      const currentDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), i)
      );
      calendarDays.push({
        date: currentDate,
        day: i,
        isCurrentMonth: true,
        isToday,
        events: [],
      });
    }
    for (let i = 1; i <= daysAfter; i++) {
      calendarDays.push({
        day: i,
        isCurrentMonth: false,
        events: [],
      });
    }
    return calendarDays;
  };

  const updateEventDate = async (eventId, newDate) => {
    try {
      const formattedNewDate = newDate.toISOString();
      const res = await fetch(`/api/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: formattedNewDate }),
      });
      if (!res.ok)
        throw new Error("Erreur lors de la mise à jour de l'événement");
      const updatedEvent = await res.json();
      return updatedEvent;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEvents = async (date) => {
    const baseDate = new Date(date);

    const firstDayOfMonth = new Date(
      Date.UTC(actualDate.getUTCFullYear(), actualDate.getUTCMonth(), 1)
    );
    const lastDayOfMonth = new Date(
      Date.UTC(actualDate.getUTCFullYear(), actualDate.getUTCMonth() + 1, 0)
    );
    const startDate = firstDayOfMonth.toISOString().split("T")[0];
    const endDate = lastDayOfMonth.toISOString().split("T")[0];

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

  const handleClick = async (dayInfo) => {
    const addEventInDate = new Date(
      Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), dayInfo.day)
    )
      .toISOString()
      .split("T")[0];

    const configEvent = {
      title: "",
      debutAt: addEventInDate,
      finAt: addEventInDate,
      debutTime: "00:00",
      finTime: "00:30",
    };
    setAddEventConfig(configEvent);
  };

  const handleDragStart = (event) => {
    setStartDrop(true);
    const eventBox = event.target.getBoundingClientRect();
    offsetYRef.current = event.clientY - eventBox.top;
  };

  const handleDragOver = (event, day) => {
    event.preventDefault();
    setDragOverDay(day);
    setStartDrop(false);
  };

  const handleDrop = async (event, newDay) => {
    event.preventDefault();
    setDragOverDay(null);
    const eventId = event.dataTransfer.getData("eventId");
    const newDate = new Date(
      Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), newDay)
    );
    await updateEventDate(eventId, newDate);
    recupEvents();
  };

  useEffect(() => {
    if (actualDate) {
      generateMonthView(actualDate).then(setCalendarData);
    }
  }, [actualDate]);

  return (
    <div className="p-1 w-full h-[88vh] flex">
      <div className="flex relative w-full h-[87vh] flex-col">
        <div className={`grid grid-cols-7 grid-rows-${nbtLigne} h-full w-full`}>
          {calendarData.map((dayInfo, index) => (
            <div
              key={index}
              className={`border min-h-[14vh] h-full border-gray-100 dark:border-gray-600 flex flex-col ${
                dayInfo.isCurrentMonth
                  ? "bg-white text-black dark:bg-gray-950 dark:text-white"
                  : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-400"
              } ${
                dragOverDay === dayInfo.day && dayInfo.isCurrentMonth
                  ? "border-[var(--colorSite)] dark:border-[var(--colorSite)]"
                  : ""
              }`}
              onDragOver={(e) => handleDragOver(e, dayInfo.day)}
              onDrop={(e) => handleDrop(e, dayInfo.day)}
              onClick={
                dayInfo.isCurrentMonth
                  ? (event) => handleClick(dayInfo, event)
                  : undefined
              }
            >
              <div className={`dayNumber${dayInfo.isToday ? " inDay" : ""}`}>
                {dayInfo.day}
              </div>
              <div className="events-container mt-1 overflow-x-hidden max-h-[13vh]">
                {listEvents
                  .filter((event) => {
                    const eventDate = new Date(event.debutAt);
                    const dayDate = new Date(dayInfo.date);
                    const idUserInEvent = event.userId.split("/");
                    let isUser = false;
                    idUserInEvent.forEach((id) => {
                      if (idUserList.includes(parseInt(id))) isUser = true;
                    });
                    return (
                      eventDate.getUTCFullYear() === dayDate.getUTCFullYear() &&
                      eventDate.getUTCMonth() === dayDate.getUTCMonth() &&
                      eventDate.getUTCDate() === dayDate.getUTCDate() &&
                      isUser
                    );
                  })
                  .slice(0, 2)
                  .map((event, eventIndex) => {
                    const eventDebut = new Date(event.debutAt);
                    const listIdUser = event.userId.split("/");
                    let user = [];
                    listIdUser.forEach((userIdInEvent) => {
                      listUsers.map((userInList) => {
                        if (userInList.id == userIdInEvent)
                          user.push(userInList);
                      });
                    });
                    const formattedHour = eventDebut
                      .getUTCHours()
                      .toString()
                      .padStart(2, "0");
                    const formattedMinutes = eventDebut
                      .getUTCMinutes()
                      .toString()
                      .padStart(2, "0");
                    return (
                      <Event
                        style={{
                          "--c": user.length > 1 ? "gray" : user[0].color,
                        }}
                        key={eventIndex}
                        eventKey={event.id}
                        event={event}
                        formattedHour={formattedHour}
                        formattedMinutes={formattedMinutes}
                        eventIndex={eventIndex}
                        className={`event${
                          event.fullDay ? " fullDay" : ""
                        } p-1 mb-1 rounded`}
                      />
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
