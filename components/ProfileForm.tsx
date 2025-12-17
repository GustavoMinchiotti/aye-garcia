"use client";

import { useState, useEffect } from "react";
import { useUserProfile } from "@/lib/hooks/useUserProfile";
import type { UserProfile } from "@/types/user";
import { normalizeName, normalizeText } from "@/lib/utils";

export default function ProfileForm() {
  const { profile, loading, error, updateProfile } = useUserProfile();

  const [form, setForm] = useState<UserProfile>({
    first_name: "",
    last_name: "",
    age: null,
    sex: "",
    is_pregnant: false,
    pregnancy_weeks: null,
    goals: "",
  });

  // Carga inicial del perfil
  useEffect(() => {
    if (profile) {
      setForm({
        first_name: profile.first_name ?? "",
        last_name: profile.last_name ?? "",
        age: profile.age ?? null,
        sex: profile.sex ?? "",
        is_pregnant: profile.is_pregnant ?? false,
        pregnancy_weeks: profile.pregnancy_weeks ?? null,
        goals: profile.goals ?? "",
      });
    }
  }, [profile]);

  // Manejo genérico de inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Guardado con normalización
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación mínima
    if (form.sex === "femenino" && form.is_pregnant && !form.pregnancy_weeks) {
      alert("Debe ingresar las semanas de embarazo");
      return;
    }

    await updateProfile({
      first_name: normalizeName(form.first_name),
      last_name: normalizeName(form.last_name),
      age: form.age ? Number(form.age) : null,
      sex: form.sex,
      is_pregnant: form.is_pregnant,
      pregnancy_weeks: form.is_pregnant ? Number(form.pregnancy_weeks) : null,
      goals: normalizeText(form.goals),
    });

    alert("Perfil actualizado correctamente");
  };

  if (loading)
    return <p className="text-sm text-contraste3">Cargando perfil…</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!profile) return <p>No se encontró perfil</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-(--color-base-clara) p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-semibold text-contraste1">Editar perfil</h2>

      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border"
          placeholder="Ej. Ayelen"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Apellido</label>
        <input
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border"
          placeholder="Ej. García"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Edad</label>
        <input
          type="number"
          name="age"
          value={form.age ?? ""}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Sexo</label>
        <select
          name="sex"
          value={form.sex}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border"
        >
          <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>

      {form.sex === "femenino" && (
        <>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_pregnant"
              checked={form.is_pregnant}
              onChange={handleChange}
            />
            <label>¿Está embarazada?</label>
          </div>

          {form.is_pregnant && (
            <div>
              <label className="block text-sm font-medium">
                Semanas de embarazo
              </label>
              <input
                type="number"
                name="pregnancy_weeks"
                value={form.pregnancy_weeks ?? ""}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border"
              />
            </div>
          )}
        </>
      )}

      <div>
        <label className="block text-sm font-medium">Objetivos</label>
        <textarea
          name="goals"
          value={form.goals}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded border"
          rows={3}
          placeholder="Ej. Mejorar fuerza y movilidad"
        />
      </div>

      <button
        type="submit"
        className="bg-(--color-acento-1) text-(--color-base-clara) px-5 py-2 rounded-lg font-semibold hover:bg-(--color-acento-2)"
      >
        Guardar cambios
      </button>
    </form>
  );
}
