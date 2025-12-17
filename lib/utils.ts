import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* ===========================
   Tailwind helper
   =========================== */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ===========================
   Normalización de datos
   =========================== */

/**
 * Texto visible general.
 * Reglas:
 * - trim
 * - minúsculas
 * - espacios normalizados
 * - SOLO la primera letra en mayúscula
 *
 * Ej:
 * "SENTADILLA   SUMO" → "Sentadilla sumo"
 */
export function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^./, (char) => char.toUpperCase());
}

/**
 * Nombres propios visibles (nombre, apellido).
 * NO Title Case.
 * MISMA regla que normalizeText.
 */
export function normalizeName(value: string): string {
  return normalizeText(value);
}

/**
 * Emails:
 * - trim
 * - siempre en minúscula
 * Frontend + BBDD
 */
export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function normalizeTitle(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * URLs (videos, links externos):
 * - solo limpieza básica
 * - nunca modificar el contenido
 */
export function normalizeUrl(value: string): string {
  return value.trim();
}
