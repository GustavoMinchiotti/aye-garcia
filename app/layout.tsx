import "./globals.css";
import NavBar from "@/components/NavBar";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Aye García",
  description: "App de rutinas y comunidad",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let role: string | null = null;
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();
    role = profile?.role ?? null;
  }

  return (
    <html lang="es">
      <body className="bg-base-clara text-contraste-1 antialiased">
        {/* -----------------------------
             Contenedor principal de toda la app
             flex-col para organizar nav / main / footer
        ----------------------------- */}
        <div className="min-h-screen flex flex-col">

          {/* -----------------------------
               3️⃣ NavBar con rol del usuario
          ----------------------------- */}
          <NavBar userRole={role} />

          {/* -----------------------------
               4️⃣ Main: contenedor centralizado
               max-w-6xl -> ancho máximo agradable
               mx-auto   -> centra horizontalmente
               px-6      -> padding lateral en móviles
               py-12     -> separación vertical
               flex flex-col items-center -> centra contenido
          ----------------------------- */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
            {children}
          </main>

          {/* -----------------------------
               5️⃣ Footer con contraste y separación
               border-t para línea sutil superior
          ----------------------------- */}
          <footer className="bg-base-oscura text-base-oscura border-t border-contraste-4 py-4 text-center">
            © {new Date().getFullYear()} Aye García
          </footer>
        </div>
      </body>
    </html>
  );
}
