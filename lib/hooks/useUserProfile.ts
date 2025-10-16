"use client"

import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

interface Profile {
  id: string
  full_name: string | null
  role: string | null
  subscription_status: string | null
  age?: number | null
}

export function useUserProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        const {
          data: { user },
          error: userError
        } = await supabase.auth.getUser()

        if (userError) throw userError
        if (!user) {
          setProfile(null)
          return
        }

        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (profileError) throw profileError

        setProfile(data)
      } catch (err: any) {
        console.error("Error loading profile:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      setLoading(true)
      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (!user) throw new Error("No authenticated user")

      const { error } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", user.id)

      if (error) throw error

      // Refrescar datos después de actualizar
      setProfile((prev) => (prev ? { ...prev, ...updates } : prev))
    } catch (err: any) {
      console.error("Error updating profile:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { profile, loading, error, updateProfile }
}
