"use client";
import { LeftBarControl } from "@/components/custom/dashboard/LeftBarControl";
import { TopBarControl } from "@/components/custom/dashboard/TopBarControl";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import "@/public/css/style.css";
import { GlobalContext } from "@/lib/GlobalState";
import { Utilisateurs } from "@/components/custom/dashboard/page/Utilisateurs";

export default function Dashboard() {
  const { me, setMe, pageDashboard } = useContext(GlobalContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("/api/account/me", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Redirection");
        }

        const data = await res.json();
        setMe(data.user);
      } catch (err) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading)
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p className="pl-3">Chargement</p>
      </div>
    );
  return (
    <>
      <TopBarControl />
      <div className="flex w-full mt-[5vh] containerDashboard">
        <LeftBarControl me={me} />
        {pageDashboard == "Utilisateurs" && <Utilisateurs />}
      </div>
    </>
  );
}
