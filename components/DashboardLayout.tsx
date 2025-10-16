"use client";

import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base-clara text-contraste-1">
      <div className="flex">
        {/* Sidebar (ancho fijo en md+, escondido en móvil) CON UNO DE LOS CAMBIOS EN LA LINEA DE ABAJO PUEDE VER LA SIDEBAR PERO VOLVÍ PARA ATRÁS*/}
        <aside className="hidden md:block md:w-72 lg:w-80 min-h-screen border-r border-contraste-4 bg-base-media">
          <div className="h-full p-4">
            <Sidebar />
          </div>
        </aside>

        {/* Main area */}
        <div className="flex-1 min-h-screen">
          {/* Header (visible en todas) */}
          <header className="border-b border-contraste-4 bg-base-clara">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Header />
            </div>
          </header>

          {/* Content */}
          <main className="p-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
