"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Menu, LogOut, Dumbbell, User, Home } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  const links = [
    { href: "/dashboard", label: "Inicio", icon: <Home size={18} /> },
    { href: "/dashboard/my-routines", label: "Mis rutinas", icon: <Dumbbell size={18} /> },
    { href: "/dashboard/profile", label: "Perfil", icon: <User size={18} /> },
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-acento-1 text-white p-2 rounded-lg shadow-md"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 bg-contraste-1 text-base-clara w-64 md:w-72 flex flex-col shadow-lg z-40`}
      >
        <div className="p-5 border-b border-contraste-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-acento-1 text-white font-bold">
              AG
            </div>
            <span className="font-semibold text-lg tracking-wide">Aye García</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-base-clara/60 hover:text-white"
          >
            ✕
          </button>
        </div>

        <ul className="flex-1 mt-6 space-y-1">
          {links.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-md transition-colors ${
                    active
                      ? "bg-acento-1/20 text-acento-1"
                      : "hover:bg-contraste-2/50 text-base-clara/80"
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="p-5 border-t border-contraste-3">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md bg-acento-2 hover:bg-acento-2/90 text-white font-medium"
          >
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}
