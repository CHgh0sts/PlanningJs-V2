"use client";
import { GlobalContext } from "@/lib/GlobalState";
import { useContext, useEffect } from "react";
import {
  Calendar1,
  Building,
  UsersRound,
  BookMarked,
  ShieldPlus,
  Settings,
} from "lucide-react";

export const LeftBarControl = ({ me }) => {
  const leftData = [
    {
      icon: Calendar1,
      title: "Evenements",
      droit: [-1],
    },
    {
      icon: Building,
      title: "Societes",
      droit: [4, 5],
    },
    {
      icon: UsersRound,
      title: "Utilisateurs",
      droit: [1, 6, 3, 4],
    },
    {
      icon: BookMarked,
      title: "Droits",
      droit: [7, 8],
    },
    {
      icon: ShieldPlus,
      title: "Grades",
      droit: [9, 10],
    },
    {
      icon: Settings,
      title: "Parametres",
      droit: [0],
    },
  ];

  const handleChangePageDashboard = (val) => {
    console.log(val);
    setPageDashboard(val);
  };

  const { isMobile, setPageDashboard } = useContext(GlobalContext);

  return (
    <div
      className={`dark:bg-gray-950 relative LeftBarControl${
        isMobile ? " mobileMode" : ""
      }`}
    >
      <ul className="relative pt-[1vh]">
        {leftData.map((data, index) => {
          const hasAccess =
            data.droit.includes(-1) ||
            me.listDroits.includes(0) ||
            data.droit.some((droit) => me.listDroits.includes(droit));

          if (!hasAccess) return null;

          return (
            <li
              key={index}
              className="flex items-center mt-[1.5vh] mb-[1.5vh] hover:text-blue-500 cursor-pointer"
              onClick={() => handleChangePageDashboard(data.title)}
            >
              <p className="notWhiteFill mr-[1vh]">
                <data.icon />
              </p>
              <p>{data.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
