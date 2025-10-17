"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

/**
 * Comportamiento:
 * - En desktop (>= md) la sidebar se abre por defecto.
 * - En mobile la sidebar está cerrada por defecto; se abre con el botón hamburguesa.
 * - El botón hamburguesa es fijo y visible en mobile (md:hidden).
 * - El overlay cierra la sidebar.
 */

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Abra la sidebar automáticamente en pantallas md+ (útil para que no dependa del usuario)
  useEffect(() => {
    const mq = window.matchMedia?.("(min-width: 768px)");
    const handle = (ev?: MediaQueryListEvent) => {
      // si es md+ abrimos, si es menor la cerramos
      const isDesktop = mq ? mq.matches : window.innerWidth >= 768;
      setSidebarOpen(isDesktop);
    };
    handle();
    mq?.addEventListener?.("change", handle);
    return () => mq?.removeEventListener?.("change", handle);
  }, []);

  return (
    <div className="min-h-screen flex bg-baseClara text-contraste1">
      {/* Botón hamburguesa fijo (visible solo en mobile) */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-60 md:hidden p-2 rounded-md shadow-sm bg-baseClara/80 backdrop-blur-sm"
        aria-label="Abrir menú lateral"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0
          z-50 w-64 md:w-72 lg:w-80
          bg-baseMedia border-r border-contraste4
          transform transition-[transform,opacity] duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"}
          md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto
        `}
        aria-hidden={!sidebarOpen && undefined}
      >
        <div className="h-full p-4 overflow-y-auto relative">
          {/* Close X (solo mobile): botón visible dentro del aside */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 md:hidden p-1 rounded hover:bg-contraste3 transition"
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </aside>

      {/* Overlay móvil (aparece cuando sidebar está abierta) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Contenedor principal: en md+ deja espacio con margen izquierdo igual al ancho del sidebar */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-72 lg:ml-80">
        {/* Header (puede quedar fijo o dentro del layout) */}
        <header className="p-4 border-b border-contraste4 bg-baseClara flex items-center">
          <div className="hidden md:flex items-center gap-4">
            {/* En desktop no mostramos el botón hamburguesa; dejamos espacio visual */}
            <span className="font-semibold text-lg">Aye García</span>
          </div>

          {/* En mobile el título queda visible junto al botón que está fijo */}
          <div className="md:hidden ml-10">
            <span className="font-semibold">Panel</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
