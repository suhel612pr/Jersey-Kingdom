import { createClient } from "@supabase/supabase-js";

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://uorhzqcbzexdptaxymet.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcmh6cWNiemV4ZHB0YXh5bWV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNDMzNjYsImV4cCI6MjA5NzcxOTM2Nn0.89qy9ZaQ98YuyOUg2M1E-CoU9aU14T6cAxi5c7lGP10";

// Only create client if we have valid credentials
let supabase = null;

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    });
  } else {
    console.warn("Supabase credentials not fully configured");
  }
} catch (error) {
  console.error("Failed to initialize Supabase:", error);
}

export { supabase };
