'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Si el usuario ya está logueado, redirigir al dashboard
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) router.push('/dashboard')
    }
    check()
  }, [router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // Redirige al dashboard
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded shadow bg-white">
        <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>

        {error && <div className="mb-3 text-red-600">{error}</div>}

        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Contraseña</span>
          <input className="mt-1 w-full input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>

        <button disabled={loading} className="w-full py-2 bg-sky-600 text-white rounded">
          {loading ? 'Ingresando...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}
