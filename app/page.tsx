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

<div className="prueba1 bg-red-200 p-10 m-10 rounded-2xl">
  test
</div>




      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/login"
          className="w-full sm:w-auto px-6 py-3 bg-acento-1 text-base-clara rounded-lg font-medium hover:bg-acento-2 transition"
        >
          Entrar
        </Link>

        <Link
          href="/register"
          className="w-full sm:w-auto px-6 py-3 border border-acento-1 text-acento-1 rounded-lg font-medium hover:bg-acento-1 hover:text-base-clara transition"
        >
          Crear cuenta
        </Link>
      </div>
    </div>
  );
}
