"use client";
import "@/public/css/style.css";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/lib/GlobalState";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { IoIosMenu } from "react-icons/io";
import { InfoProfil } from "./infoProfil";

export const TopBar = () => {
  const { leftBar, setLeftBar, isMobile } = useContext(GlobalContext);
  const router = useRouter();

  return (
    <div
      className={`topBar fixed top-0 left-0 z-10 bg-white dark:bg-black w-full ${
        isMobile ? "h-[4.5vh]" : "h-[5vh]"
      } flex items-center justify-between`}
    >
      <div className="flex items-center w-[30vh]">
        <button className="btn-menu" onClick={() => setLeftBar(!leftBar)}>
          <IoIosMenu />
        </button>
      </div>
      <div className="mr-4 flex items-center">
        <ThemeToggle />
        <InfoProfil />
      </div>
    </div>
  );
};
