import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "@/lib/GlobalState";

export const Event = ({ ...props }) => {
  const { typeView, listEvents, setListEvents, setEditEventConfig } =
    useContext(GlobalContext);
  const [changeSize, setChangeSize] = useState(false);
  const mouseMoveType = useRef(null);
  const offsetYRef = useRef(0);
  const {
    eventIndex,
    className,
    event,
    formattedHour,
    formattedMinutes,
    style,
    heightEditable,
    eventKey,
    localDebutAt,
    localFinAt,
  } = props;

  const updateTimeEvent = async (params) => {
    try {
      const res = await fetch(`/api/eventsUpdate`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      if (!res.ok)
        throw new Error("Erreur lors de la mise à jour de l'événement");
      const updatedEvent = await res.json();
      await setListEvents((prevList) =>
        prevList.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
      return updatedEvent;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const updateTime = async (params) => {
    try {
      const res = await fetch(`/api/eventsUpdateTime`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      if (!res.ok)
        throw new Error("Erreur lors de la mise à jour de l'événement");
      const updatedEvent = await res.json();
      return updatedEvent;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const handleMouseMove = async (e) => {
    const hoursContainer = document.querySelector(".hours-container");
    if (!hoursContainer) return;

    const rect = hoursContainer.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const totalHeight = rect.height;
    const totalSlots = 48;
    const slot = Math.floor((offsetY / totalHeight) * totalSlots);
    let hour = Math.floor(slot / 2);
    let minutes = (slot % 2) * 30;

    if (hour >= 24) hour = 23;
    if (hour < 0) hour = 0;
    if (minutes < 0) minutes = 0;

    let currentDebutAt = localDebutAt;
    let currentFinAt = localFinAt;

    if (mouseMoveType.current === "Top") {
      currentDebutAt.setUTCHours(hour);
      currentDebutAt.setUTCMinutes(minutes);

      if (currentFinAt - currentDebutAt < 30 * 60 * 1000) {
        currentFinAt.setUTCHours(
          minutes == 30 ? (hour < 23 ? hour + 1 : 23) : hour
        );
        currentFinAt.setUTCMinutes(minutes == 30 ? 0 : 30);
      }
      const updatedEvent = {
        ...event,
        debutAt: currentDebutAt.toISOString(),
        finAt: currentFinAt.toISOString(),
      };
      await setListEvents((prevList) =>
        prevList.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    }
    if (mouseMoveType.current === "Bottom") {
      currentFinAt.setUTCHours(hour);
      currentFinAt.setUTCMinutes(minutes);

      if (currentFinAt - currentDebutAt < 30 * 60 * 1000) {
        currentDebutAt.setUTCHours(
          minutes == 30 ? hour : hour > 0 ? hour - 1 : 0
        );
        currentDebutAt.setUTCMinutes(minutes == 30 ? 0 : 30);
      }
      const updatedEvent = {
        ...event,
        debutAt: currentDebutAt.toISOString(),
        finAt: currentFinAt.toISOString(),
      };
      await setListEvents((prevList) =>
        prevList.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    }
  };
  const handleMouseDown = (e) => {
    setChangeSize(true);
    mouseMoveType.current = e.target.classList[1];
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    setTimeout(() => setChangeSize(false), 0);

    updateTime({
      id: event.id,
      debutAt: localDebutAt,
      finAt: localFinAt,
    });
  };
  const handleDragStart = (e, eventData) => {
    const eventBox = e.target.getBoundingClientRect();
    offsetYRef.current = e.clientY - eventBox.top;

    e.dataTransfer.setData("eventId", eventData.id);
    const eventDate = new Date(eventData.date);
    if (!isNaN(eventDate)) {
      e.dataTransfer.setData("oldDay", eventDate.getUTCDate());
    }
    document.querySelectorAll(".event").forEach((el) => {
      if (el !== e.target) {
        el.classList.add("notDrag");
      } else {
        el.classList.add("isDrag");
      }
    });
  };
  const handleDragEnd = () => {
    document.querySelectorAll(".event").forEach((el) => {
      el.classList.remove("notDrag");
      el.classList.remove("isDrag");
    });
  };
  const handleDoubleClickEvent = (e, event) => {
    e.stopPropagation();
    console.log("event Dbl Click", e);
  };
  const handleClickEvent = (e, eventTarget) => {
    e.stopPropagation();

    const debutAt = new Date(
      Date.UTC(
        new Date(eventTarget.debutAt).getUTCFullYear(),
        new Date(eventTarget.debutAt).getUTCMonth(),
        new Date(eventTarget.debutAt).getUTCDate(),
        new Date(eventTarget.debutAt).getUTCHours(),
        new Date(eventTarget.debutAt).getUTCMinutes(),
        new Date(eventTarget.debutAt).getUTCSeconds()
      )
    );

    const finAt = new Date(
      Date.UTC(
        new Date(eventTarget.finAt).getUTCFullYear(),
        new Date(eventTarget.finAt).getUTCMonth(),
        new Date(eventTarget.finAt).getUTCDate(),
        new Date(eventTarget.finAt).getUTCHours(),
        new Date(eventTarget.finAt).getUTCMinutes(),
        new Date(eventTarget.finAt).getUTCSeconds()
      )
    );

    const configEvent = {
      id: eventTarget.id,
      title: eventTarget.title,
      address: eventTarget.address,
      subtitle: eventTarget.subtitle,
      debutAt: debutAt.toISOString().split("T")[0],
      finAt: finAt.toISOString().split("T")[0],
      debutTime: `${debutAt.getUTCHours().toString().padStart(2, "0")}:${debutAt
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}`,
      finTime: `${finAt.getUTCHours().toString().padStart(2, "0")}:${finAt
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}`,
    };

    setEditEventConfig(configEvent);
    if (changeSize) setChangeSize(false);
  };
  const handleDrop = async (e, newDay) => {
    const eventId = e.dataTransfer.getData("eventId");
    const newDate = new Date(
      Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), newDay)
    );

    let updatedEvent = await updateTimeEvent({
      id: eventId,
      date: newDate.toISOString(),
    });

    recupEvents();
  };
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div
      id={event.id}
      style={style}
      key={eventIndex}
      className={className}
      draggable="true"
      onDragStart={(e) => handleDragStart(e, event)}
      onDragEnd={handleDragEnd}
      onDoubleClick={(e) => handleClickEvent(e, event)}
      onClick={(e) => e.stopPropagation()}
    >
      {heightEditable && (
        <div
          className="btnSize Top"
          draggable="false"
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleMouseDown(e);
          }}
        ></div>
      )}
      <p>
        {!event.fullDay && (
          <span>
            {formattedHour}h{formattedMinutes} -{" "}
          </span>
        )}
        {event.title}
      </p>
      {heightEditable && (
        <div
          className="btnSize Bottom"
          draggable="false"
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleMouseDown(e);
          }}
        ></div>
      )}
    </div>
  );
};
