"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Dumbbell, User, Home } from "lucide-react";

type Props = {
  onClose?: () => void;
};

export default function Sidebar({ onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    // si usás supabase u otra cosa, ponelo aquí
    // await supabase.auth.signOut();
    router.push("/login");
    onClose?.();
  }

  const links = [
    { href: "/dashboard", label: "Inicio", icon: <Home size={16} /> },
    { href: "/dashboard/my-routines", label: "Mis rutinas", icon: <Dumbbell size={16} /> },
    { href: "/dashboard/profile", label: "Perfil", icon: <User size={16} /> },
  ];

  return (
    <nav className="flex flex-col h-full">
      <div className="p-5 border-b border-contraste3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-acento1 text-white font-bold">
            AG
          </div>
          <span className="font-semibold text-lg tracking-wide">Aye García</span>
        </div>

        {/* Este botón es redundante con el X del layout, pero no molesta */}
        <button
          onClick={() => onClose?.()}
          className="md:hidden text-contraste4 hover:text-acento1"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
      </div>

      <ul className="flex-1 mt-6 space-y-1 px-2">
        {links.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={() => onClose?.()}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors ${
                  active ? "bg-acento1/20 text-acento1" : "hover:bg-contraste2/50 text-contraste3"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="p-5 border-t border-contraste3">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md bg-acento2 hover:bg-acento2/90 text-white font-medium"
        >
          <LogOut size={16} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </nav>
  );
}
