import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, LayoutDashboard } from "lucide-react";
import { GlobalContext } from "@/lib/GlobalState";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Cookies from "js-cookie";

export const InfoProfil = ({ ...props }) => {
  const { me, isMobile } = useContext(GlobalContext);
  const router = useRouter();

  if (!me) {
    return <Skeleton className="flex w-[4vh] h-[4vh] rounded-[3vh]" />;
  }

  const { username, color } = me;

  const formatUsername = (username) => username.slice(0, 2).toUpperCase();

  const handleLogout = async () => {
    await fetch("/api/account/logout", {
      method: "GET",
      credentials: "include",
    });
    router.push("/login");
  };

  const handleProfil = () => {
    router.push("/profil");
  };
  const handleDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`btnProfil${isMobile ? " mobileMode" : ""}`}
        style={{ background: color }}
      >
        <p className="dark:text-black">{formatUsername(username)}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="myProfil" onClick={handleProfil}>
          <User /> Mon Profil
        </DropdownMenuItem>
        {me.listDroits.includes(5) && (
          <DropdownMenuItem className="myProfil" onClick={handleDashboard}>
            <LayoutDashboard /> Dashboard
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="logOut" onClick={handleLogout}>
          <LogOut /> Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
