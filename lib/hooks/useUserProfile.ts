"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export interface Profile {
  id: string;
  created_at?: string | null;
  updated_at?: string | null;
  first_name: string | null;
  last_name: string | null;
  age: number | null;
  sex: string | null;
  is_pregnant: boolean | null;
  pregnancy_weeks: number | null;
  goals: string | null;
  role: string | null;
}

export function useUserProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;
        if (!user) {
          setProfile(null);
          return;
        }

        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        if (profileError) {
          // Si no existe perfil, lo creamos vacío
          if (profileError.code === "PGRST116") {
            console.warn("Perfil no encontrado, creando...");
            const { data: newProfile, error: insertError } = await supabase
              .from("profiles")
              .insert([{ id: user.id }])
              .select()
              .single();

            if (insertError) throw insertError;
            if (!ignore) setProfile(newProfile as Profile);
          } else {
            throw profileError;
          }
        } else {
          if (!ignore) setProfile(data as Profile);
        }
      } catch (err) {
        console.error("Error loading profile:", JSON.stringify(err, null, 2));
        const message =
          err && typeof err === "object" && "message" in err
            ? err.message
            : "Error desconocido";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    return () => {
      ignore = true;
    };
  }, []);

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      setLoading(true);
      setError(null);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("No authenticated user");

      const { error } = await supabase
        .from("profiles")
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) throw error;

      setProfile((prev) => (prev ? { ...prev, ...updates } : prev));
    } catch (err: any) {
      console.error("Error updating profile:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, updateProfile };
}
