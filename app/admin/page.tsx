// app/admin/page.tsx

import Link from "next/link";

export default function AdminPage() {
  return (
    <section className="space-y-10">
      {/* Título */}
      <header>
        <h2 className="text-3xl font-bold text-contraste1">
          Panel de Administración
        </h2>
        <p className="mt-2 text-contraste3">
          Gestioná ejercicios, rutinas y usuarias desde un solo lugar.
        </p>
      </header>

      {/* Métricas */}
      {/*
        🔹 Estas métricas luego se obtendrán desde la base de datos (Supabase):
        - cantidad de usuarias activas
        - cantidad total de ejercicios
        - cantidad de rutinas creadas
      */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-baseClara shadow">
          <p className="text-sm text-contraste4">Usuarias activas</p>
          <p className="mt-2 text-3xl font-semibold text-contraste1">
            128
          </p>
        </div>

        <div className="p-6 rounded-xl bg-baseClara shadow">
          <p className="text-sm text-contraste4">Ejercicios</p>
          <p className="mt-2 text-3xl font-semibold text-contraste1">
            56
          </p>
        </div>

        <div className="p-6 rounded-xl bg-baseClara shadow">
          <p className="text-sm text-contraste4">Rutinas</p>
          <p className="mt-2 text-3xl font-semibold text-contraste1">
            24
          </p>
        </div>
      </section>

      {/* Acciones principales */}
      <section>
        <h3 className="text-xl font-semibold text-contraste1 mb-4">
          Gestión principal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ejercicios */}
          <Link
            href="/admin/exercises"
            className="block p-6 rounded-xl bg-baseClara shadow hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-semibold text-contraste1">
              Ejercicios
            </h4>
            <p className="mt-2 text-sm text-contraste3">
              Crear, editar y organizar ejercicios por zona del cuerpo.
            </p>
          </Link>

          {/* Rutinas */}
          <Link
            href="/admin/routines"
            className="block p-6 rounded-xl bg-baseClara shadow hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-semibold text-contraste1">
              Rutinas
            </h4>
            <p className="mt-2 text-sm text-contraste3">
              Armar rutinas combinando ejercicios y parámetros de entrenamiento.
            </p>
          </Link>

          {/* Usuarias */}
          <Link
            href="/admin/users"
            className="block p-6 rounded-xl bg-baseClara shadow hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-semibold text-contraste1">
              Usuarias
            </h4>
            <p className="mt-2 text-sm text-contraste3">
              Asignar rutinas y gestionar perfiles de usuarias.
            </p>
          </Link>
        </div>
      </section>
    </section>
  );
}
