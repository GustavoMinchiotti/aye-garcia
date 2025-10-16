"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient"; // ajustá la ruta si tu cliente está en otro lugar

export default function Sidebar() {
  console.log('Sidebar render PRUEBA');
  const router = useRouter();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <nav className="flex flex-col h-full">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-xl font-semibold text-contraste-1 px-2 py-3"
        >
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-acento-1 text-base-clara">
            AG
          </div>
          <span>Aye García</span>
        </Link>
      </div>

      <ul className="space-y-1 flex-1">
        <li>
          <Link
            href="/dashboard"
            className="block px-3 py-2 rounded-md hover:bg-acento-1/10"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/my-routines"
            className="block px-3 py-2 rounded-md hover:bg-acento-1/10"
          >
            Mis rutinas
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className="block px-3 py-2 rounded-md hover:bg-acento-1/10"
          >
            Perfil
          </Link>
        </li>
      </ul>

      <div className="pt-4">
        <button
          onClick={handleSignOut}
          className="w-full text-left px-3 py-2 rounded-md bg-acento-2 text-base-clara hover:opacity-90"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
