// app/admin/exercises/new/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useExercises } from "@/lib/hooks/useExercises";

const MOCK_GROUPS = [
  { id: 1, name: "Brazos" },
  { id: 2, name: "Core" },
  { id: 3, name: "Espalda" },
  { id: 4, name: "Glúteos" },
  { id: 5, name: "Hombros" },
  { id: 6, name: "Pecho" },
  { id: 7, name: "Piernas" },
];

export default function NewExercisePage() {
  const { createExercise } = useExercises();

  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !groupId) return;

    await createExercise({
      name,
      group_id: Number(groupId),
      video_url: videoUrl || undefined,
    });
  }

  return (
    <section className="max-w-3xl space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-contraste1">
          Nuevo ejercicio
        </h2>
        <p className="text-sm text-contraste3">
          Completá los datos del ejercicio. Quedará activo y disponible para
          crear rutinas.
        </p>
      </header>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-(--color-base-clara) p-8 rounded-2xl shadow"
      >
        {/* Nombre */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-contraste2">
            Nombre del ejercicio
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Sentadilla goblet"
            className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
          />
          <p className="text-xs text-contraste4">
            El sistema normaliza el texto automáticamente.
          </p>
        </div>

        {/* Zona */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-contraste2">
            Zona muscular principal
          </label>
          <select
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
          >
            <option value="">Seleccionar zona</option>
            {MOCK_GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        {/* Video */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-contraste2">
            Video demostrativo (interno)
          </label>
          <input
            type="url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://www.youtube.com/..."
            className="w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
          />
          <p className="text-xs text-contraste4">
            No visible para la usuaria. Editable más adelante.
          </p>
        </div>

        {/* Acciones */}
        <div className="flex justify-between pt-6">
          <Link
            href="/admin/exercises"
            className="text-sm text-contraste3 hover:underline"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold bg-(--color-acento-1) text-(--color-base-clara) hover:bg-(--color-acento-2) transition"
          >
            Guardar ejercicio
          </button>
        </div>
      </form>

      <p className="text-xs text-contraste4">
        El ejercicio se crea activo por defecto.
      </p>
    </section>
  );
}
