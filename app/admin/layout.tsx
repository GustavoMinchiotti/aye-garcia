// app/admin/layout.tsx
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ReactNode } from "react"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // 1️⃣ Inicializa cliente Supabase del lado del servidor
  const supabase = await createClient()

  // 2️⃣ Obtiene usuario autenticado
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // 3️⃣ Busca perfil del usuario
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, first_name, last_name")
    .eq("id", user.id)
    .single()

  if (error || !profile) {
    console.error("Error obteniendo perfil:", error?.message)
    redirect("/dashboard")
  }

  // 4️⃣ Restringe acceso a admin
  if (profile.role !== "admin") {
    redirect("/dashboard")
  }

  // 5️⃣ Layout visual del panel de administración
  return (
    <div className="min-h-screen flex flex-col bg-base text-contrast-1">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm py-4 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Panel de Administración
          </h1>
          <p className="text-sm text-gray-500">
            Bienvenido/a, {profile.first_name} {profile.last_name}
          </p>
        </div>

        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a
            href="/dashboard"
            className="hover:text-gray-900 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/admin"
            className="text-gray-900 border-b-2 border-gray-900 pb-1"
          >
            Panel Admin
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}

       <div className="p-4 bg-base-oscura text-contraste-1 rounded-md shadow">
  🌈 Fondo base oscura — texto contraste 1
</div>

<div className="p-4 bg-acento-1 text-base-clara mt-4 rounded-md">
  🟧 Fondo acento 1 — texto base clara
</div>

<div className="p-4 bg-acento-2 text-base-clara mt-4 rounded-md">
  🔴 Fondo acento 2 — texto base clara
</div>



      </main>
    </div>
  )
}
