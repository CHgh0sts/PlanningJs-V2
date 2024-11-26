"use client";
import { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { GlobalContext } from "@/lib/GlobalState";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LeftBar = () => {
  const {
    actualDate,
    setActualDate,
    me,
    listUsers,
    setListUsers,
    setIdUserList,
    isMobile,
    leftBar,
  } = useContext(GlobalContext);
  const [searchUser, setSearchUser] = useState("");
  const [activeUsers, setActiveUsers] = useState({});

  const recupListUser = async () => {
    try {
      const res = await fetch(`/api/userSearch?username=${searchUser}`);
      if (!res.ok) {
        setListUsers([]);
        return;
      }
      const data = await res.json();
      let users = [];

      for (let userRecup of data.users) {
        if (!users.some((u) => u.id === userRecup.id) && !userRecup.exterieur) {
          users.push(userRecup);
        }
      }
      setListUsers(users);

      const initialActiveUsers = {};
      users.forEach((_, index) => {
        initialActiveUsers[index] = true;
      });
      setActiveUsers(initialActiveUsers);
      setIdUserList(users.map((user) => user.id));
    } catch (error) {
      setListUsers([]);
    }
  };
  const toggleActive = (indexUser, userId) => {
    setActiveUsers((prev) => ({
      ...prev,
      [indexUser]: !prev[indexUser],
    }));

    if (!activeUsers[indexUser]) {
      setIdUserList((prev) => [...prev, userId]);
    } else {
      setIdUserList((prev) => prev.filter((id) => id !== userId));
    }
  };
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const searchListUser = async () => {
      await recupListUser();
    };
    if (me) {
      searchListUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUser, me]);

  return (
    <div
      className={`dark:bg-gray-950 ${leftBar ? "LeftBar open" : "LeftBar"}
      ${isMobile ? " mobileMode" : ""}`}
    >
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="w-[29vh]">
              {actualDate.toLocaleString("default", { month: "long" })}{" "}
              {actualDate.getFullYear()}
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <Calendar
              mode="single"
              selected={actualDate}
              onSelect={handleSelectDate}
              initialFocus
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="w-[29vh]">Listes des Utilisateurs</p>
          </AccordionTrigger>
          <AccordionContent>
            <Input
              type="search"
              placeholder="Rechercher un utilisateur ..."
              className="m-auto mt-1 mb-1 w-[95%]"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
            {listUsers.map((user, indexUser) => (
              <div
                key={`user_${indexUser}`}
                className={`user ${activeUsers[indexUser] ? "active" : ""}`}
                style={{ "--c": user?.color }}
              >
                <p>{user.username}</p>
                <Label htmlFor={`checkbox_${indexUser}`}>
                  <Input
                    className="w-[fit-content]"
                    type="checkbox"
                    id={`checkbox_${indexUser}`}
                    checked={activeUsers[indexUser]}
                    onChange={() => toggleActive(indexUser, user.id)}
                  />
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
