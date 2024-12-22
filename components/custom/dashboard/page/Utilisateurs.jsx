"use client";
import { GlobalContext } from "@/lib/GlobalState";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Trash, ShieldPlus } from "lucide-react";
import { handleAction } from "@/app/actions/handleActions";

export const Utilisateurs = () => {
  const { me } = useContext(GlobalContext);
  const [listUsers, setListUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/dashboard/recupListUsers", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Redirection");
        }

        const data = await res.json();
        console.log(data);
        setListUsers(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const action = async (name, user) => {
    const result = await handleAction(name, user);
    console.log(result);
  };

  const dataOpts = [
    {
      name: "grade",
      icon: ShieldPlus,
    },
    {
      name: "delete",
      icon: Trash,
    },
  ];

  if (loading)
    return (
      <div className="relative h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p className="pl-3">Chargement</p>
      </div>
    );

  return (
    <div className="w-full">
      <h1 className="m-[.5vh]">Utilisateurs</h1>
      <div className="params"></div>
      <ul className="listUsers">
        {listUsers.map((user, index) => {
          return (
            <li
              key={index}
              className="w-full flex justify-between items-center"
            >
              <p>{user.username}</p>
              <div className="options flex items-center">
                {user.options.map((opts, i) => {
                  const selectedOpts = dataOpts.find(
                    (data) => data.name == opts
                  );
                  return (
                    <div
                      key={i}
                      className="option"
                      onClick={() => action(selectedOpts.name, user)}
                    >
                      <selectedOpts.icon />
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
