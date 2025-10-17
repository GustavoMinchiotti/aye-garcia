import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ReactNode } from "react"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Si no hay usuario autenticado, redirige al login
  if (!user) {
    redirect("/login")
  }

  // Consulta el rol del usuario en la tabla profiles
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, first_name, last_name")
    .eq("id", user.id)
    .single()

  // Manejo de errores o falta de perfil
  if (error || !profile) {
    console.error("Error obteniendo perfil:", error)
    redirect("/dashboard")
  }

  // Solo permite el acceso a admin
  if (profile.role !== "admin") {
    redirect("/dashboard")
  }

  // Layout visual del panel de administración
  return (
    <div className="min-h-screen bg-[#FBFAF8] text-[#222] flex flex-col">
      {/* Encabezado */}
      <header className="border-b border-gray-200 bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Panel de Administración
          </h1>
          <p className="text-sm text-gray-500">Bienvenido/a, {profile.first_name} {profile.last_name}</p>
        </div>

        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</a>
          <a href="/admin" className="font-medium text-gray-900">Panel Admin</a>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
