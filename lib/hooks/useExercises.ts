import { normalizeTitle, normalizeUrl } from "@/lib/utils"

export function useExercises() {
  async function createExercise(input: {
    name: string
    group_id: number
    video_url?: string
  }) {
    const payload = {
      name: input.name.trim(),
      normalized_name: normalizeTitle(input.name),
      group_id: input.group_id,
      video_url: input.video_url
        ? normalizeUrl(input.video_url)
        : null,
      active: true,
    }

    console.log("Exercise payload", payload)
  }

  return { createExercise }
}
