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
import { CreateUser } from "./CreateUser";
import { CreateUserExterieur } from "./CreateUserExterieur";
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

export const EditEventBox = () => {
  const { toast } = useToast();
  const {
    me,
    setEditEventConfig,
    editEventConfig,
    listUsers,
    listEvents,
    setListEvents,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(editEventConfig?.title);
  const [address, setAddress] = useState("");
  const [isFullDay, setIsFullDay] = useState(false);
  const [selectedUser, setSelectedUser] = useState(
    me || { id: 0, username: "Utilisateur inconnu", color: "#000" }
  );
  const [selectedUsers, setSelectedUsers] = useState([me]);
  const [multipleUsers, setMultipleUsers] = useState(false);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreateUserExterieurOpen, setIsCreateUserExterieurOpen] =
    useState(false);
  const [availableUsers, setAvailableUsers] = useState([]);
  const [startDateTimeChange, setStartDateTimeChange] = useState(
    editEventConfig?.debutTime
  );
  const [endDateTimeChange, setEndDateTimeChange] = useState(
    editEventConfig?.finTime
  );

  function setDebutAtInput(value) {
    setEditEventConfig({ ...editEventConfig, debutAt: value });
  }

  function setFinAtInput(value) {
    setEditEventConfig({ ...editEventConfig, finAt: value });
  }

  function setDescription(value) {
    setEditEventConfig({ ...editEventConfig, subtitle: value });
  }
  const deleteEventInDataBase = async (params, setListEvent) => {
    try {
      const res = await fetch(`/api/events/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!res.ok)
        throw new Error("Erreur lors de la suppression de l'événement");

      const deletedEvent = await res.json();

      setListEvents(() => listEvents.filter((event) => event.id !== params.id));

      toast({
        variant: "success",
        title: "Événement Supprimé",
        description: "L'événement à été supprimé avec succès.",
      });

      return deletedEvent;
    } catch (error) {
      toast({
        variant: "error",
        title: "Événement non Supprimé",
        description: "L'événement n'a pas été supprimé suis a une erreur.",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let userIds;
    if (multipleUsers) {
      userIds = selectedUsers.map((user) => user.id).join("/");
    } else {
      userIds = selectedUser.id.toString();
    }

    const eventData = {
      id: editEventConfig?.id,
      title,
      description: event.target.description.value,
      startDate: `${editEventConfig?.debutAt}T${startDateTimeChange}:00`,
      endDate: `${editEventConfig?.finAt}T${endDateTimeChange}:00`,
      isFullDay,
      userId: userIds,
      address,
    };

    console.log(eventData);

    try {
      const res = await fetch("/api/events", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.error || "Erreur lors de la modification de l'événement."
        );

      toast({
        variant: "success",
        title: "Événement modifié",
        description: "Les modifications ont été enregistrées avec succès.",
      });

      setListEvents((prevEvents) =>
        prevEvents.map((event) => (event.id === data.id ? data : event))
      );
    } catch (error) {
      toast({
        variant: "error",
        title: "Échec de la modification",
        description:
          "Une erreur est survenue lors de la modification de l'événement.",
      });
    }

    setEditEventConfig(false);
  };
  function closeEditEvent(event) {
    event.preventDefault();
    setEditEventConfig(false);
  }
  function deleteEvent(e, event) {
    e.preventDefault();
    deleteEventInDataBase({
      id: event.id,
    });
    setEditEventConfig(false);
  }
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
    if (!editEventConfig) {
      setTitle("");
      setAddress("");
      setSelectedUser(
        me || { id: 0, username: "Utilisateur inconnu", color: "#000" }
      );
    } else {
      setTitle(editEventConfig?.title || "");
      setAddress(editEventConfig?.address || "");
    }
    setStartDateTimeChange(editEventConfig?.debutTime);
    setEndDateTimeChange(editEventConfig?.finTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editEventConfig]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setAvailableUsers(
      listUsers.filter(
        (user) => !selectedUsers.some((selected) => selected.id === user.id)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multipleUsers]);

  return (
    <>
      <Dialog open={editEventConfig} onOpenChange={setEditEventConfig}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier un événement</DialogTitle>
            <DialogDescription>
              Veuillez remplacer les détails de votre événement.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <div className="relative flex items-center">
                  <Input
                    id="title"
                    className=""
                    name="title"
                    placeholder="Titre de l'événement"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Adresse (facultatif)</Label>
                <div className="relative flex items-center">
                  <Input
                    id="address"
                    className=""
                    name="address"
                    placeholder="Adresse de l'événement"
                    value={address || ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Description de l'événement (facultatif)"
                    value={editEventConfig?.subtitle || ""}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
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
                    <Label>Utilisateurs</Label>
                    <Select onValueChange={handleUserSelection}>
                      <SelectTrigger>
                        <SelectValue>Ajouter des utilisateurs</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Utilisateurs</SelectLabel>
                          {availableUsers.map((user) => (
                            <SelectItem key={user.id} value={user.id || ""}>
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
                          style={{ borderColor: user.color, "--c": user.color }}
                          key={user.id}
                          className={`selectedUser flex items-center space-x-2`}
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
                        <SelectValue>
                          <div className="flex items-center">
                            <div
                              className="w-4 h-4 rounded-full mr-2"
                              style={{
                                backgroundColor: selectedUser?.color || "#000",
                              }}
                            ></div>
                            {selectedUser?.username ||
                              "Sélectionner un utilisateur"}
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Utilisateurs</SelectLabel>
                          {listUsers.map((user) => (
                            <SelectItem key={user.id} value={user.id || ""}>
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
                <div className="flex items-center justify-between w-full">
                  <Label htmlFor="startDate">Date de début</Label>
                  <Input
                    id="startDate"
                    className="col-span-3 w-[70%] justify-around mr-2"
                    name="startDate"
                    type="date"
                    required
                    value={editEventConfig?.debutAt || ""}
                    onChange={(e) => setDebutAtInput(e.target.value)}
                  />
                </div>
                {!isFullDay && (
                  <div>
                    <Input
                      id="debutTime"
                      name="debutTime"
                      type="time"
                      required
                      value={startDateTimeChange}
                      onChange={(e) => setStartDateTimeChange(e.target.value)}
                      onBlur={(e) => handleStartDateTimeBlur(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                {!isFullDay && (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <Label htmlFor="endDate">Date de fin</Label>
                      <Input
                        id="endDate"
                        className="col-span-3 w-[70%] justify-around mr-2"
                        name="endDate"
                        type="date"
                        required
                        value={editEventConfig?.finAt || ""}
                        onChange={(e) => setFinAtInput(e.target.value)}
                        min={editEventConfig?.debutAt}
                      />
                    </div>
                    <div>
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
                  </>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="secondary"
                onClick={(event) => closeEditEvent(event)}
              >
                Annuler
              </Button>
              <Button
                variant="destructive"
                onClick={(e) => deleteEvent(e, editEventConfig)}
              >
                Supprimer l&apos;événement
              </Button>
              <Button type="submit">Modifer l&apos;événement</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <CreateUser
        isOpen={isCreateUserOpen}
        onClose={() => setIsCreateUserOpen(false)}
      />
      <CreateUserExterieur
        isOpen={isCreateUserExterieurOpen}
        onClose={() => setIsCreateUserExterieurOpen(false)}
        setUserExterieur={(data) => setUserExterieurInEvent(data)}
      />
    </>
  );
};
