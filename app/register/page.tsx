// 
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { normalizeEmail, normalizeName } from "@/lib/utils"; // Asegúrate de importar la normalización

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Normalización de nombres y email
    const normalizedEmail = normalizeEmail(email);
    const normalizedFirstName = normalizeName(firstName);
    const normalizedLastName = normalizeName(lastName);

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        data: {
          first_name: normalizedFirstName,
          last_name: normalizedLastName,
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-(--color-base-clara)">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white"
      >
        <h1 className="text-2xl font-semibold mb-4 text-contraste1">
          Crear cuenta
        </h1>

        {error && <div className="mb-3 text-red-600">{error}</div>}

        <label className="block mb-4">
          <span className="text-sm text-contraste1">Nombre</span>
          <input
            className="mt-1 w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Juan"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-contraste1">Apellido</span>
          <input
            className="mt-1 w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Pérez"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-contraste1">Email</span>
          <input
            className="mt-1 w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ejemplo@mail.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-contraste1">Contraseña</span>
          <input
            className="mt-1 w-full px-4 py-3 rounded-lg border border-(--color-contraste-3)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
            placeholder="Contraseña"
          />
        </label>

        <button
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold bg-(--color-acento-1) text-(--color-base-clara) hover:bg-(--color-acento-2) transition"
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </button>
      </form>
    </main>
  );
}
