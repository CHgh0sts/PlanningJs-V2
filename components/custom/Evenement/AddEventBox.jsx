"use client";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/lib/GlobalState";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreateUser } from "./CreateUser";

export const AddEventBox = () => {
  const { toast } = useToast();

  const {
    me,
    setAddEventConfig,
    addEventConfig,
    listUsers,
    listEvents,
    setListEvents,
    typeView,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(addEventConfig?.title);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const [isFullDay, setIsFullDay] = useState(false);
  const [selectedUser, setSelectedUser] = useState(
    me || { id: 0, username: "Utilisateur inconnu", color: "#000" }
  );
  const [selectedUsers, setSelectedUsers] = useState([me]);
  const [multipleUsers, setMultipleUsers] = useState(false);
  const [availableUsers, setAvailableUsers] = useState([]);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [startDateTimeChange, setStartDateTimeChange] = useState(
    addEventConfig?.debutTime
  );
  const [endDateTimeChange, setEndDateTimeChange] = useState(
    addEventConfig?.finTime
  );
  function closeAddEvent(event) {
    event.preventDefault();
    setAddEventConfig(false);
  }

  function setDebutAtInput(value) {
    setAddEventConfig({
      title: title,
      debutAt: value,
      finAt: addEventConfig?.finAt,
      debutTime: addEventConfig?.debutTime,
      finTime: addEventConfig?.finTime,
    });
  }
  function setFinAtInput(value) {
    setAddEventConfig({
      debutAt: addEventConfig?.debutAt,
      finAt: value,
      debutTime: addEventConfig?.debutTime,
      finTime: addEventConfig?.finTime,
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    let userIds;
    if (multipleUsers) {
      userIds = selectedUsers.map((user) => user.id).join("/");
    } else {
      userIds = selectedUser.id.toString();
    }

    const eventData = {
      title: title,
      description: event.target.description.value,
      startDate: `${addEventConfig?.debutAt}T${startDateTimeChange}:00`,
      endDate: `${addEventConfig?.finAt}T${endDateTimeChange}:00`,
      isFullDay,
      userId: userIds,
      address: address,
      typeView: typeView,
    };
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Erreur lors de la creation de l'event.");
      toast({
        variant: "success",
        title: "Événement crée",
        description: "L'evenement à été crée avec succès.",
      });
      setListEvents([...listEvents, data]);
    } catch (error) {
      toast({
        variant: "error",
        title: "Événement crée",
        description: "La creation de l'evenement à rencomtré un problème.",
      });
    }
    setAddEventConfig(false);
  };
  const handleUserSelection = (userId) => {
    const userSelected = listUsers.find((u) => u.id === userId);
    if (
      userSelected &&
      !selectedUsers.some((user) => user.id === userSelected.id)
    ) {
      setSelectedUsers([...selectedUsers, userSelected]);
      setAvailableUsers(
        availableUsers.filter((user) => user.id !== userSelected.id)
      );
    }
  };
  const handleRemoveUser = (userId) => {
    const userRemoved = selectedUsers.find((user) => user.id === userId);
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
    setAvailableUsers([...availableUsers, userRemoved]);
  };
  function validMinuteInterval(params) {
    const timeSplit = params.split(":");
    if (timeSplit[1] == "00" || timeSplit[1] == "30")
      return timeSplit.join(":");
    const minute = parseInt(timeSplit[1]);
    const hour = parseInt(timeSplit[0]);
    if (!minute || (minute && minute < 15))
      return `${hour < 10 ? "0" + hour : hour}:00`;
    if (!minute || (minute && minute >= 45))
      return `${
        hour < 22 ? (hour + 1 < 10 ? "0" + (hour + 1) : hour + 1) : "00"
      }:00`;
    if (minute && minute >= 15 && minute < 45)
      return `${hour < 10 ? "0" + hour : hour}:30`;
  }
  function difTime(time1, time2) {
    const split1 = time1.split(":");
    const split2 = time2.split(":");

    return (
      parseInt(split2[0]) * 60 +
      parseInt(split2[1]) -
      (parseInt(split1[0]) * 60 + parseInt(split1[1]))
    );
  }
  function handleStartDateTimeBlur(params) {
    const rearengedTimeStart = validMinuteInterval(params);
    const rearengedTimeEnd = validMinuteInterval(endDateTimeChange);

    const ditTimeValue = difTime(rearengedTimeStart, rearengedTimeEnd);
    if (ditTimeValue < 30) {
      const rearengedTimeStartSplit = rearengedTimeStart.split(":");
      const hour = parseInt(rearengedTimeStartSplit[0]);
      const newEndTime =
        rearengedTimeStartSplit[1] == "00"
          ? `${hour < 10 ? "0" + hour : hour}:30`
          : `${hour + 1 < 10 ? "0" + (hour + 1) : hour + 1}:00`;
      setEndDateTimeChange(newEndTime);
    }
    setStartDateTimeChange(rearengedTimeStart);
  }
  function handleEndDateTimeBlur(params) {
    const rearengedTimeStart = validMinuteInterval(startDateTimeChange);
    const rearengedTimeEnd = validMinuteInterval(params);

    const ditTimeValue = difTime(rearengedTimeStart, rearengedTimeEnd);
    if (ditTimeValue < 30) {
      const rearengedTimeEndSplit = rearengedTimeEnd.split(":");
      const hour = parseInt(rearengedTimeEndSplit[0]);
      const newEndTime =
        rearengedTimeEndSplit[1] == "00"
          ? `${hour - 1 < 10 ? "0" + (hour - 1) : hour - 1}:30`
          : `${hour < 10 ? "0" + hour : hour}:00`;
      setStartDateTimeChange(newEndTime);
    }
    setEndDateTimeChange(rearengedTimeEnd);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!addEventConfig) {
      setTitle("");
      setAddress("");
      setSelectedUser(
        me || { id: 0, username: "Utilisateur inconnu", color: "#000" }
      );
    }
    setStartDateTimeChange(addEventConfig?.debutTime);
    setEndDateTimeChange(addEventConfig?.finTime);
  }, [addEventConfig]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setAvailableUsers(
      listUsers.filter(
        (user) => !selectedUsers.some((selected) => selected.id === user.id)
      )
    );
  }, [multipleUsers]);

  return (
    <>
      <Dialog open={addEventConfig} onOpenChange={setAddEventConfig}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un événement</DialogTitle>
            <DialogDescription>
              Veuillez remplir les détails de votre événement.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Titre de l'événement"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Adresse (facultatif)</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Adresse de l'événement"
                  value={address || ""}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description de l'événement (facultatif)"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Separator />
              <div>
                {me.listDroits && me.listDroits.includes(1) && (
                  <div className="flex items-center justify-between w-full space-x-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="multipleUsers"
                        checked={multipleUsers}
                        onCheckedChange={setMultipleUsers}
                      />
                      <Label htmlFor="multipleUsers">Mode groupe</Label>
                    </div>
                    <Button
                      className="createUser text-blue-500 hover:text-blue-700"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsCreateUserOpen(true);
                      }}
                    >
                      + Créer un utilisateur
                    </Button>
                  </div>
                )}
                {multipleUsers ? (
                  <div>
                    <Label htmlFor="selectUsersList">Utilisateurs</Label>
                    <Select
                      id="selectUsersList"
                      onValueChange={handleUserSelection}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Ajouter des utilisateurs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Utilisateurs</SelectLabel>
                          {availableUsers.map((user) => (
                            <SelectItem key={user.id} value={user.id}>
                              <div className="flex items-center">
                                <div
                                  className="w-4 h-4 rounded-full mr-2"
                                  style={{ backgroundColor: user.color }}
                                ></div>
                                {user.username}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <div className="userSelectedBox mt-2 flex w-full">
                      {selectedUsers.map((user) => (
                        <div
                          key={user.id}
                          style={{ borderColor: user.color }}
                          className="selectedUser flex items-center space-x-2"
                        >
                          <span>{user.username}</span>
                          <Button
                            className="deleteUserSelected"
                            onClick={() => handleRemoveUser(user.id)}
                          >
                            X
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="userSelect">Utilisateur</Label>
                    <Select
                      id="userSelect"
                      value={selectedUser?.id || ""}
                      onValueChange={(value) => {
                        const userSelected = listUsers.find(
                          (u) => u.id === value
                        );
                        if (userSelected) {
                          setSelectedUser(userSelected);
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un utilisateur">
                          <div className="flex items-center">
                            <div
                              className="w-4 h-4 rounded-full mr-2"
                              style={{
                                backgroundColor: selectedUser?.color || "#000",
                              }}
                            ></div>
                            {selectedUser?.username || ""}
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Utilisateurs</SelectLabel>
                          {listUsers.map((user) => (
                            <SelectItem key={user.id} value={user.id}>
                              <div className="flex items-center">
                                <div
                                  className="w-4 h-4 rounded-full mr-2"
                                  style={{ backgroundColor: user.color }}
                                ></div>
                                {user.username}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <Button
                  className="createUser text-blue-500 hover:text-blue-700"
                  onClick={(e) => e.preventDefault()}
                >
                  Ajouter un intervenant extérieur
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fullDay"
                  checked={isFullDay}
                  onCheckedChange={(checked) => setIsFullDay(checked === true)}
                />
                <Label htmlFor="fullDay">Journée entière</Label>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="startDate">Date de début</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  required
                  value={addEventConfig?.debutAt || ""}
                  onChange={(e) => setDebutAtInput(e.target.value)}
                />
                {!isFullDay && (
                  <Input
                    id="debutTime"
                    name="debutTime"
                    type="time"
                    required
                    value={startDateTimeChange}
                    onChange={(e) => setStartDateTimeChange(e.target.value)}
                    onBlur={(e) => handleStartDateTimeBlur(e.target.value)}
                  />
                )}
              </div>
              {!isFullDay && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="endDate">Date de fin</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    required
                    value={addEventConfig?.finAt || ""}
                    onChange={(e) => setFinAtInput(e.target.value)}
                    min={addEventConfig?.debutAt}
                  />
                  <Input
                    id="finTime"
                    name="finTime"
                    type="time"
                    required
                    value={endDateTimeChange}
                    onChange={(e) => setEndDateTimeChange(e.target.value)}
                    onBlur={(e) => handleEndDateTimeBlur(e.target.value)}
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button
                variant="secondary"
                onClick={(event) => closeAddEvent(event)}
              >
                Annuler
              </Button>
              <Button type="submit">Ajouter l&apos;événement</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <CreateUser
        isOpen={isCreateUserOpen}
        onClose={() => setIsCreateUserOpen(false)}
      />
    </>
  );
};
