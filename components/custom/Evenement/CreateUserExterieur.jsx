"use client";
import { useState, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/lib/GlobalState";
import { useToast } from "@/hooks/use-toast";

export const CreateUserExterieur = ({ isOpen, onClose, setUserExterieur }) => {
  const { listUsers, setListUsers } = useContext(GlobalContext);
  const { toast } = useToast();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const [tempPassword, setTempPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  const handleCreateUser = async () => {
    try {
      const res = await fetch("/api/usersExterieur", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
        }),
      });
      if (!res.ok)
        throw new Error("Erreur lors de la création de l'utilisateur");

      const data = await res.json();
      console.log(data);
      toast({
        variant: "success",
        title: "Utilisateur extérieur crée",
      });
      setUserExterieur(data);
    } catch (error) {
      toast({
        variant: "error",
        title: "Utilisateur extérieur non crée",
      });
    }
  };

  const handleCopyPassword = () => {
    if (tempPassword) {
      navigator.clipboard.writeText(tempPassword).then(() => {
        alert("Mot de passe copié dans le presse-papiers");
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer un nouvel utilisateur exterieur</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              <div className="w-[50%] mr-[.5vh]">
                <Label htmlFor="nom">Nom de l&apos;utilisateur</Label>
                <Input
                  id="nom"
                  name="nom"
                  placeholder="Nom de l'utilisateur"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
              <div className="w-[50%] ml-[.5vh]">
                <Label htmlFor="prenom">Prenom de l&apos;utilisateur</Label>
                <Input
                  id="prenom"
                  name="prenom"
                  placeholder="Prenom de l'utilisateur"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email de l'utilisateur"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={onClose}>
              Annuler
            </Button>
            <Button onClick={handleCreateUser}>Créer l&apos;utilisateur</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
