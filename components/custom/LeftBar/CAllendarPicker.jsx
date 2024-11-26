"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { fr } from "date-fns/locale";

export const LeftBar = () => {
  const { actualDate, setActualDate } = useContext(GlobalContext);

  const handleSelectDate = (date) => {
    if (date) {
      const currentDate = new Date();
      const updatedDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
      );
      setActualDate(updatedDate);
    }
  };
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {actualDate ? (
            <div className="titleSelect relative w-[29vh]">
              {actualDate.toLocaleString("default", { month: "long" })}{" "}
              {actualDate.getFullYear()}
            </div>
          ) : (
            <Skeleton className="flex w-[8vh] h-[1.5vh]" />
          )}
        </AccordionTrigger>
        <AccordionContent>
          <Calendar
            mode="single"
            selected={actualDate}
            onSelect={handleSelectDate}
            initialFocus
            className="w-full"
            locale={fr}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
