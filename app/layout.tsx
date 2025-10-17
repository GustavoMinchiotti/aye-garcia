import './globals.css'
import NavBar from '@/components/NavBar'
import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'Aye García',
  description: 'App de rutinas y comunidad',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let role: string | null = null
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    role = profile?.role ?? null
  }

  return (
    <html lang="es">
      <body className="bg-base-clara text-contraste-1 antialiased">
        <div className="min-h-screen flex flex-col">
          <NavBar userRole={role} />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <footer className="bg-base-oscura text-contraste-3 py-4 text-center">
            © {new Date().getFullYear()} Aye García
          </footer>
        </div>
      </body>
    </html>
  )
}
