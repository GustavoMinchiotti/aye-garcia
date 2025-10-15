import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FBFAF8] text-[#222222]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-semibold">Aye García - Tu Entrenadora</h1>
        <p className="text-lg text-[#515151]">
          Entrená, cuidate y viví mejor con nuestra comunidad.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-[#E69F45] text-white rounded-lg font-medium hover:bg-[#F35530] transition"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 border border-[#E69F45] text-[#E69F45] rounded-lg font-medium hover:bg-[#E69F45] hover:text-white transition"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </main>
  );
}
