"use client";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import "@/public/css/style.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Eye, EyeOff } from "lucide-react";
import { GlobalContext } from "@/lib/GlobalState";
import { TopBarControl } from "@/components/custom/dashboard/TopBarControl";

export default function Profil() {
  const router = useRouter();
  const { me, setMe } = useContext(GlobalContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [passwordError, setPasswordError] = useState(null);

  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");

  const handlePasswordSubmit = () => {
    console.log("handlePasswordSubmit");
  };
  const handleCancel = () => {
    setUsername(me.username);
    setColor(me.color);
    setIsEditing(!isEditing);
  };
  const handleEditUser = async () => {
    if (isEditing) {
      const dateUpdateUser = {
        username: username,
        color: color,
      };
      console.log(dateUpdateUser);
      try {
        const res = await fetch(`/api/account/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dateUpdateUser),
        });

        if (!res.ok) {
          throw new Error("Erreur lors de la mise à jour du profil");
        }

        const updatedUser = await res.json();
        setMe({
          ...me,
          color: updatedUser.color,
          username: updatedUser.username,
        });
        setIsEditing(false);
      } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
      }
    }
    setIsEditing(!isEditing);
  };
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (me) {
      setUsername(me.username);
      setColor(me.color);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me]);
  if (loading)
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p className="pl-3">Chargement</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <TopBarControl />
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isEditing ? "Modifier votre Profil" : "Mon Profil"}
        </h1>
        {isEditing ? (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white">
                    Nom d&apos;utilisateur
                  </label>
                  <Input
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="mb-4">
            <p>Username: {username}</p>
          </div>
        )}
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                Couleur
              </label>
              <Input
                name="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full border-gray-300 rounded-md"
              />
            </div>
          </>
        ) : (
          <div className="mb-4">
            <p className="flex items-center">
              Couleur:
              <span
                className="w-[2vh] h-[2vh] spanColor"
                style={{ background: color }}
              ></span>
            </p>
          </div>
        )}
        <div className="flex items-center mb-4 w-full justify-between">
          <p className="mr-[1vh]">Mot de passe: </p>
          <Button variant="outline" onClick={() => setIsPasswordChanging(true)}>
            Modifer mon mot de passe
          </Button>
        </div>

        <div className="flex">
          {isEditing && (
            <Button
              variant="secondary"
              className="w-[50%] mr-[.5vh]"
              onClick={() => handleCancel()}
            >
              Annuler
            </Button>
          )}
          <Button
            className={isEditing ? "w-[50%] ml-[.5vh]" : "w-full"}
            onClick={() => handleEditUser()}
          >
            {!isEditing ? "Modifier" : "Sauvgarder"}
          </Button>
        </div>
      </div>

      <Dialog open={isPasswordChanging} onOpenChange={setIsPasswordChanging}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Changer le mot de passe</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit}>
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            <div className="mb-4 relative w-full">
              <label className="block text-gray-700 dark:text-white">
                Mot de passe actuel
              </label>
              <div className="relative w-full">
                <Input
                  name="currentPassword"
                  type={showPassword.currentPassword ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      currentPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full border-gray-300 rounded-md pr-10"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      currentPassword: !prev.currentPassword,
                    }))
                  }
                >
                  {showPassword.currentPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 relative w-full">
              <label className="block text-gray-700 dark:text-white">
                Nouveau mot de passe
              </label>
              <div className="relative w-full">
                <Input
                  name="newPassword"
                  type={showPassword.newPassword ? "text" : "password"}
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      newPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full border-gray-300 rounded-md pr-10"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      newPassword: !prev.newPassword,
                    }))
                  }
                >
                  {showPassword.newPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 relative w-full">
              <label className="block text-gray-700 dark:text-white">
                Confirmer le nouveau mot de passe
              </label>
              <div className="relative w-full">
                <Input
                  name="confirmPassword"
                  type={showPassword.confirmPassword ? "text" : "password"}
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full border-gray-300 rounded-md pr-10"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confirmPassword: !prev.confirmPassword,
                    }))
                  }
                >
                  {showPassword.confirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Changer le mot de passe
              </Button>
              <Button
                className="bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700"
                variant="secondary"
                onClick={() => setIsPasswordChanging(false)}
              >
                Annuler
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
