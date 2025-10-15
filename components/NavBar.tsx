// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function NavBar() {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser()
      setEmail(data.user?.email ?? null)
    }
    init()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-base-media">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-acento-1" />
          <span className="font-semibold text-lg">Aye García</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          {!email ? (
            <>
              <Link href="/login" className="px-3 py-1 rounded border border-acento-1">Entrar</Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-contraste-3 hidden sm:inline">{email}</span>
              <button onClick={handleSignOut} className="px-3 py-1 rounded bg-acento-2 text-white">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
