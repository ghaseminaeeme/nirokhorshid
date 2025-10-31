import { createClient } from "@/lib/supabase/server"

export interface SiteSetting {
  id: string
  setting_key: string
  setting_value: string
  setting_type: string
  description?: string
  created_at: string
  updated_at: string
}

export async function getSetting(key: string): Promise<string | null> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("site_settings").select("setting_value").eq("setting_key", key).single()

    if (error) throw error
    return data?.setting_value || null
  } catch (error) {
    console.error(`Error fetching setting ${key}:`, error)
    return null
  }
}

export async function getSettings(keys: string[]): Promise<Record<string, string>> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("site_settings")
      .select("setting_key, setting_value")
      .in("setting_key", keys)

    if (error) throw error

    const settings: Record<string, string> = {}
    data?.forEach((item) => {
      settings[item.setting_key] = item.setting_value
    })

    return settings
  } catch (error) {
    console.error("Error fetching settings:", error)
    return {}
  }
}

export async function getAllSettings(): Promise<Record<string, string>> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("site_settings").select("setting_key, setting_value")

    if (error) throw error

    const settings: Record<string, string> = {}
    data?.forEach((item) => {
      settings[item.setting_key] = item.setting_value
    })

    return settings
  } catch (error) {
    console.error("Error fetching all settings:", error)
    return {}
  }
}
