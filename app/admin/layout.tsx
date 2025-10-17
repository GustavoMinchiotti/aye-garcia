import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ReactNode } from "react"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient() // 👈 agregar await

  // Obtenemos el usuario actual
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()

  if (error || !profile) {
    console.error("Error obteniendo perfil:", error)
    redirect("/dashboard")
  }

  if (profile.role !== "admin") {
    redirect("/dashboard")
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      {children}
    </section>
  )
}
