"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isRegister) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("Registro exitoso. Verificá tu correo electrónico.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex items-center justify-center bg-transparent text-(--color-contraste-1)">
      <div className="bg-(--color-base-oscura) p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="  w-full px-4 py-2 bg-(--color-base-clara) border border-(--color-acento-1) rounded-lg text-(--color-contraste-3) 
                focus:ring-2 focus:ring-(--color-acento-2) focus:border-transparent outline-none transition-all duration-200 "
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E69F45]"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-(--color-acento-1) text-(--color-base-clara) font-semibold rounded-lg 
            hover:bg-(--color-acento-2) hover:text-(--color-base-clara) hover:font-bold transition-colors"
          >
            {loading
              ? "Cargando..."
              : isRegister
              ? "Registrarme"
              : "Iniciar sesión"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isRegister ? "¿Ya tenés cuenta?" : "¿No tenés cuenta?"}{" "}
          <button
            type="button"
            className="text-[#F35530] font-semibold hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Iniciar sesión" : "Crear cuenta"}
          </button>
        </p>
      </div>
    </main>
  );
}
