//! Editar ejercicio
// app/admin/exercises/[id]/page.tsx
// Mockup UI — Editar ejercicio
// TODO: Reemplazar datos mock por fetch desde Supabase

import Link from "next/link";

const MOCK_EXERCISE = {
  name: "Sentadilla sumo",
  muscleGroup: "Piernas",
  active: true,
  videoUrl: "https://youtube.com/mock",
};

const MUSCLE_GROUPS = [
  "Brazos",
  "Core",
  "Espalda",
  "Glúteos",
  "Hombros",
  "Pecho",
  "Piernas",
];

export default function EditExercisePage() {
  return (
    <section className="max-w-3xl space-y-8">
      {/* Header */}
      <header>
        <h2 className="text-2xl font-semibold text-contraste1">
          Editar ejercicio
        </h2>
        <p className="text-sm text-contraste3">
          Modificá la información del ejercicio
        </p>
      </header>

      {/* Form */}
      <div className="space-y-6 p-6 rounded-xl bg-baseClara shadow">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-contraste2 mb-1">
            Nombre del ejercicio
          </label>
          <input
            type="text"
            defaultValue={MOCK_EXERCISE.name}
            className="w-full px-4 py-3 rounded-lg border border-contraste3"
            placeholder="Ej: Sentadilla sumo"
          />
        </div>

        {/* Zona */}
        <div>
          <label className="block text-sm font-medium text-contraste2 mb-1">
            Zona muscular
          </label>
          <select
            defaultValue={MOCK_EXERCISE.muscleGroup}
            className="w-full px-4 py-3 rounded-lg border border-contraste3"
          >
            {MUSCLE_GROUPS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Estado */}
        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked={MOCK_EXERCISE.active} />
          <span className="text-sm text-contraste2">Ejercicio activo</span>
        </div>

        {/* Video */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-acento1 text-baseClara font-medium">
            Ver video
          </button>

          <button className="px-4 py-2 rounded-lg border border-contraste3 text-contraste2">
            Cambiar video
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Link
          href="/admin/exercises"
          className="text-sm text-contraste3 hover:underline"
        >
          Volver al listado
        </Link>

        <button className="px-6 py-3 rounded-lg bg-acento2 text-baseClara font-semibold">
          Guardar cambios
        </button>
      </div>

      {/* Nota técnica */}
      <p className="text-xs text-contraste4">
        {/* TODO: El video se abrirá en un modal con iframe */}
        Vista de edición sin lógica. Conexión a Supabase pendiente.
      </p>
    </section>
  );
}
