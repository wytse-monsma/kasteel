import { supabase } from "$lib/supabaseClient"

export async function _Login() {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}