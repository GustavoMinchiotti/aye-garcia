import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto text-center space-y-6">
      {/* Título principal */}
      <h1 className="text-4xl font-semibold">Aye García - Tu Entrenadora</h1>

      {/* Subtítulo / descripción */}
      <p className="text-lg text-contraste-3">
        Entrená, cuidate y viví mejor con nuestra comunidad.
      </p>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/login"
          className="bg-(--color-acento-1) hover:bg-(--color-acento-2) hover:text-(--color-base-oscura) px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105"
        >
          Entrar
        </Link>

        <Link
          href="/register"
          className="bg-transparent border-2 border-(--color-acento-1) text-(--color-contraste-4) hover:bg-(--color-acento-1) hover:text-(--color-contraste-1) px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            
        >
          Crear cuenta
        </Link>
      </div>
    </div>
  );
}
