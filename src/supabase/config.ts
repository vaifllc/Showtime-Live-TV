import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL || "your-supabase-url"
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY || "your-supabase-anon-key"

// Validate that required environment variables are set
const requiredEnvVars = ["VUE_APP_SUPABASE_URL", "VUE_APP_SUPABASE_ANON_KEY"]

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

if (missingEnvVars.length > 0 && process.env.NODE_ENV !== "development") {
  console.warn("Missing required Supabase environment variables:", missingEnvVars)
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export default as well for compatibility
export default supabase
