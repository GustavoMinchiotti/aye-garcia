// app/admin/exercises/page.tsx
// B — Estructura visual inicial (sin lógica real, con datos mock)
// TODO: Reemplazar datos mock por fetch a Supabase (metrics y listado)
"use client";
import { useState } from "react";
import { useExercises } from "@/lib/hooks/useExercises";
import Link from "next/link";

const MOCK_GROUPS = [
  { id: 1, name: "Piernas" },
  { id: 2, name: "Glúteos" },
  { id: 3, name: "Espalda" },
  { id: 4, name: "Pecho" },
  { id: 5, name: "Brazos" },
  { id: 6, name: "Core" },
  { id: 7, name: "Hombros" },
];

const MOCK_EXERCISES = [
  { id: 101, name: "Sentadilla", group: "Piernas", active: true },
  { id: 102, name: "Peso muerto", group: "Espalda", active: true },
  { id: 103, name: "Press banca", group: "Pecho", active: false },
];

export default function AdminExercisesPage() {
  return (
    <section className="space-y-8">
      {/* Header sección */}
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-contraste1">Ejercicios</h2>
          <p className="text-sm text-contraste3">
            Gestión del catálogo de ejercicios
          </p>
        </div>

        <Link
          href="/admin/exercises/new"
          className="px-5 py-3 rounded-lg font-semibold shadow-md bg-(--color-acento-1) text-(--color-base-clara) hover:bg-(--color-acento-2) transition"
        >
          Nuevo ejercicio
        </Link>
      </header>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl bg-(--color-base-clara) shadow">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
        />

        <select className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)">
          <option value="">Todas las zonas</option>
          {MOCK_GROUPS.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <select className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)">
          <option value="">Estado</option>
          <option value="active">Activos</option>
          <option value="inactive">Inactivos</option>
        </select>
      </div>

      {/* Listado */}
      <div className="overflow-hidden rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="bg-(--color-base-oscura)">
            <tr className="text-left text-contraste2">
              <th className="px-6 py-4">Ejercicio</th>
              <th className="px-6 py-4">Zona</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {MOCK_EXERCISES.map((ex) => (
              <tr key={ex.id} className="bg-(--color-base-clara)">
                <td className="px-6 py-4 font-medium text-contraste1">
                  {ex.name}
                </td>
                <td className="px-6 py-4 text-contraste3">{ex.group}</td>
                <td className="px-6 py-4">
                  {ex.active ? (
                    <span className="text-green-700">Activo</span>
                  ) : (
                    <span className="text-red-700">Inactivo</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right space-x-4">
                  {/* Ver video */}
                  <button
                    type="button"
                    title="Ver video del ejercicio"
                    className="text-contraste3 hover:text-(--color-acento-1) transition"
                  >
                    🎬
                  </button>

                  {/* Editar */}
                  <Link
                    href={`/admin/exercises/${ex.id}`}
                    className="text-(--color-acento-1) hover:underline"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nota técnica */}
      <p className="text-xs text-contraste4">
        {/* TODO: Las métricas y el listado se obtendrán desde Supabase vía API */}
        Datos de ejemplo. La información real se conectará desde la base de
        datos.
      </p>
    </section>
  );
}
