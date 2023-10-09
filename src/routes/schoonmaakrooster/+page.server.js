import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from('kasteelheren').select('*');
  return {
    kasteelheren: data ?? [],
  };
}