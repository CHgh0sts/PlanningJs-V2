"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isTempPassword, setIsTempPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [btnLogin, setBtnLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setBtnLogin(true);

    try {
      const res = await fetch("/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erreur lors de la connexion. Vérifiez vos identifiants.");

      if (data.isTempPassword) {
        setIsTempPassword(true);
        setBtnLogin(false);
        return;
      }
      router.push("/");
    } catch (error) {
      setError(error.message);
      setBtnLogin(false);
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const res = await fetch("/api/account/validateLogin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, confirmPassword }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erreur lors de la mise à jour du mot de passe");

      router.push("/");
    } catch (error) {
      setPasswordError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {isTempPassword ? (
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Changer le mot de passe</h2>
          {passwordError && <p className="text-red-500 text-center">{passwordError}</p>}
          <Input
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full border-gray-300 rounded-md mb-4"
          />
          <Input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border-gray-300 rounded-md mb-4"
          />
          <Button
            onClick={handlePasswordChange}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Mettre à jour le mot de passe
          </Button>
        </div>
      ) : (
        <div className="bg-white p-8 dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border-gray-300 rounded-md"
            />
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-gray-300 rounded-md pr-10"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </div>
            </div>
            <Button
              disabled={btnLogin}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
            >
              {!btnLogin ? "Se connecter" : <AiOutlineLoading3Quarters className="animate-spin" />}
            </Button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-200">
              Pas encore de compte ? <a href="/register" className="text-blue-500 hover:underline">Créer un compte</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
