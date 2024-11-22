"use client";
import React, { useEffect } from "react";
import { CallendarTopBar } from "./CallendarTopBar";
import { useContext } from "react";
import { GlobalContext } from "@/lib/GlobalState";
import { Month } from "./view/Month";
import { Week } from "./view/Week";
import { Day } from "./view/Day";

import { AddEventBox } from "@/components/custom/Evenement/AddEventBox";
import { EditEventBox } from "@/components/custom/Evenement/EditEventBox";

export const Callendar = () => {
  const { typeView, setListEvents, actualDate } = useContext(GlobalContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const claimEventsList = async () => {
      const firstDayOfMonth = new Date(
        Date.UTC(actualDate.getUTCFullYear(), actualDate.getUTCMonth(), 1)
      );
      const lastDayOfMonth = new Date(
        Date.UTC(actualDate.getUTCFullYear(), actualDate.getUTCMonth() + 1, 0)
      );

      const startDate = firstDayOfMonth.toISOString().split("T")[0];
      const endDate = lastDayOfMonth.toISOString().split("T")[0];
      try {
        const url = `/api/events?startDate=${startDate}&endDate=${endDate}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok)
          throw new Error(
            data.error || "Erreur lors de la recuperation des l'events."
          );
        setListEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    claimEventsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualDate, typeView]);
  return (
    <>
      <div className="boxCallendar">
        <CallendarTopBar />
        {typeView === "month" && <Month />}
        {typeView === "week" && <Week />}
        {typeView === "day" && <Day />}
      </div>
      <AddEventBox />
      <EditEventBox />
    </>
  );
};
