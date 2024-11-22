"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/custom/Container";
import { TopBar } from "@/components/custom/TopBar/TopBar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GlobalContext } from "@/lib/GlobalState";

export default function Home() {
  const { me, setMe, listUsers, setListUsers } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/users", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Redirection");
        }

        const data = await res.json();
        setListUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  }, [router]);

  if (loading)
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p className="pl-3">Chargement</p>
      </div>
    );
  return (
    <>
      <TopBar />
      <Container />
    </>
  );
}
