"use client";
import "@/public/css/style.css";
import { useContext } from "react";
import { GlobalContext } from "@/lib/GlobalState";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { InfoProfil } from "@/components/custom/TopBar/infoProfil";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TopBarControl = () => {
  const { isMobile } = useContext(GlobalContext);
  return (
    <div
      className={`topBar fixed top-0 left-0 z-10 bg-white dark:bg-black w-full ${
        isMobile ? "h-[4.5vh]" : "h-[5vh]"
      } flex items-center justify-between`}
    >
      <div>
        <Link href="/" passHref>
          <Button variant="secondary" className="backButton">
            Retour
          </Button>
        </Link>
      </div>
      <div className="mr-4 flex items-center">
        <ThemeToggle />
        <InfoProfil />
      </div>
    </div>
  );
};
