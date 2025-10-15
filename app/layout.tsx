// app/layout.tsx
import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'Aye García',
  description: 'App de rutinas y comunidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-base-clara text-contraste-1 antialiased">
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1 container mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="bg-base-oscura text-contraste-3 py-4 text-center">
            © {new Date().getFullYear()} Aye García
          </footer>
        </div>
      </body>
    </html>
  )
}
