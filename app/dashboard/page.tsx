"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";
import { useUserProfile } from "@/lib/hooks/useUserProfile";
import ProfileForm from "@/components/ProfileForm";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { profile, loading: profileLoading, error } = useUserProfile();

  useEffect(() => {
    let mounted = true;

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;
      setUser(data.user ?? null);
      setLoading(false);
      if (!data.user) router.push("/login");
    };

    getUser();

    // Suscripción a cambios de sesión
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push("/login");
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (loading || profileLoading) return <div className="p-6">Cargando...</div>;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>Bienvenido {user?.email}</p>

      {error && <p className="text-red-500">Error: {error}</p>}

      {profile && (
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Perfil</h2>
          <p>
            <strong>Nombre:</strong> {profile.full_name ?? "Sin definir"}
          </p>
          <p>
            <strong>Rol:</strong> {profile.role ?? "user"}
          </p>
          <p>
            <strong>Suscripción:</strong> {profile.subscription_status ?? "N/A"}
          </p>
          {profile.age && (
            <p>
              <strong>Edad:</strong> {profile.age}
            </p>
          )}
        </section>
      )}
      {/* Formulario editable del perfil */}
      <ProfileForm />

      <button
        className="px-4 py-2 bg-gray-800 text-white rounded"
        onClick={handleSignOut}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
