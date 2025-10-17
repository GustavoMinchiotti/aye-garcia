'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // puedes añadir datos de usuario en metadata si querés:
        // data: { full_name: 'Aye' }
      }
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // Si confirmación por email está activada, supabase envía mail.
    // Redirigimos al login o a un "check your email"
    router.push('/login')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded shadow bg-white">
        <h1 className="text-2xl font-semibold mb-4">Crear cuenta</h1>

        {error && <div className="mb-3 text-red-600">{error}</div>}

        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Contraseña</span>
          <input className="mt-1 w-full input" type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={6} required />
        </label>

        <button disabled={loading} className="w-full py-2 bg-sky-600 text-white rounded">
          {loading ? 'Creando...' : 'Crear cuenta'}
        </button>
      </form>
    </main>
  )
}
