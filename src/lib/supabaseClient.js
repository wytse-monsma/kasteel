import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_PUBLIC_SUPABASE_URL
const anonkey = import.meta.env.VITE_PUBLIC_ANON_KEY

export const supabase = createClient(supabaseURL, anonkey)

export async function login() {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}