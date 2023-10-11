import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Essaie de se connecter à la base de données
async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("users").select("*").limit(1);

    if (error) throw error;

    console.log("Connecté à Supabase !", data);
  } catch (error) {
    console.error("Erreur de connexion à Supabase :", error.message);
  }
}

export default checkSupabaseConnection;
