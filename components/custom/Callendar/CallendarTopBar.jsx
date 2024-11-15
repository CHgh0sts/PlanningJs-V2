"use client";
import { useContext, useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { GlobalContext } from "@/lib/GlobalState";
import { Button } from "@/components/ui/button";
export const CallendarTopBar = () => {
  const {
    actualDate,
    setActualDate,
    typeView,
    setTypeView,
    isMobile,
    setLeftBar,
  } = useContext(GlobalContext);

  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const [saveTypeView, setSaveTypeView] = useState("month");

  const handlePrevPeriod = () => {
    if (typeView === "month") {
      const prevMonthDate = new Date(
        actualDate.setMonth(actualDate.getMonth() - 1)
      );
      setActualDate(new Date(prevMonthDate));
    } else if (typeView === "week") {
      const prevWeekDate = new Date(
        actualDate.setDate(actualDate.getDate() - 7)
      );
      setActualDate(new Date(prevWeekDate));
    } else if (typeView === "day") {
      const prevDayDate = new Date(
        actualDate.setDate(actualDate.getDate() - 1)
      );
      setActualDate(new Date(prevDayDate));
    }
  };

  const handleNextPeriod = () => {
    if (typeView === "month") {
      const nextMonthDate = new Date(
        actualDate.setMonth(actualDate.getMonth() + 1)
      );
      setActualDate(new Date(nextMonthDate));
    } else if (typeView === "week") {
      const nextWeekDate = new Date(
        actualDate.setDate(actualDate.getDate() + 7)
      );
      setActualDate(new Date(nextWeekDate));
    } else if (typeView === "day") {
      const nextDayDate = new Date(
        actualDate.setDate(actualDate.getDate() + 1)
      );
      setActualDate(new Date(nextDayDate));
    }
  };

  const formatWeekRange = (date) => {
    const startOfWeek = new Date(date);
    const dayOfWeek = startOfWeek.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const formatDate = (date) => {
      return `${date.getDate().toString().padStart(2, "0")}/${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
    };

    return `de ${formatDate(startOfWeek)} au ${formatDate(endOfWeek)}`;
  };

  useEffect(() => {
    if (isMobile) {
      setSaveTypeView(typeView);
      setTypeView("day");
      setLeftBar(false);
    } else {
      setTypeView(saveTypeView);
      setLeftBar(true);
    }
  }, [isMobile]);

  return (
    <div className={`topBarCallendar dark:bg-black flex items-center p-6`}>
      <div className="left">
        <Button
          onClick={() => setActualDate(new Date())}
          className="btn btn-icon inDay"
        >
          Aujourd'hui
        </Button>
        <Button
          variant="secondary"
          onClick={handlePrevPeriod}
          className="btn btn-icon"
        >
          <ChevronUp />
        </Button>
        <Button
          variant="secondary"
          onClick={handleNextPeriod}
          className="btn btn-icon"
        >
          <ChevronDown />
        </Button>
        {typeView === "month" && (
          <span className="month">
            {mois[actualDate.getMonth()]} {actualDate.getFullYear()}
          </span>
        )}
        {typeView === "week" && (
          <span className="week">{formatWeekRange(actualDate)}</span>
        )}
        {typeView === "day" && (
          <span className="day">
            {`${actualDate.getDate().toString().padStart(2, "0")}/${(
              actualDate.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}/${actualDate.getFullYear()}`}
          </span>
        )}
      </div>
      <div className="right">
        {!isMobile && (
          <>
            <Button
              variant="secondary"
              className={`btn-view ${typeView === "month" ? "active" : ""}`}
              onClick={() => setTypeView("month")}
            >
              Mois
            </Button>
            <Button
              variant="secondary"
              className={`btn-view ${typeView === "week" ? "active" : ""}`}
              onClick={() => setTypeView("week")}
            >
              Semaine
            </Button>
            <Button
              variant="secondary"
              className={`btn-view ${typeView === "day" ? "active" : ""}`}
              onClick={() => setTypeView("day")}
            >
              Jour
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
