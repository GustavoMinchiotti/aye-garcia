"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

const ADMIN_UID = process.env.NEXT_PUBLIC_ADMIN_UID;

/**
 * Hook para detectar si el usuario logueado es Admin (Ayelen)
 * Funciona en client components usando supabase client
 */
export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("Error al obtener usuario:", error.message);
          setIsAdmin(false);
        } else {
          setIsAdmin(user?.id === ADMIN_UID);
        }
      } catch (err) {
        console.error("Error inesperado al verificar admin:", err);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { isAdmin, loading };
}
