import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, first_name, last_name")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    console.error("Error obteniendo perfil:", error?.message);
    redirect("/dashboard");
  }

  if (profile.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col bg-baseMedia text-contraste1">
      {/* Header Admin */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Panel de Administración
            </h1>
            <p className="text-sm text-contraste4">
              Bienvenido/a, {profile.first_name} {profile.last_name}
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <a
              href="/dashboard"
              className="text-contraste3 hover:text-contraste1 transition-colors"
            >
              Inicio
            </a>
            <a
              href="/admin"
              className="text-contraste1 border-b-2 border-contraste1 pb-1"
            >
              Admin
            </a>
          </nav>
        </div>
      </header>

      {/* Contenido */}
      <main className="flex-1 container mx-auto px-8 py-10">
        {children}
      </main>
    </div>
  );
}
