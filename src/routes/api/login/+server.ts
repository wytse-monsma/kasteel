import {supabase} from "$lib/supabaseClient"
import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async () => {
	const { data, error: err } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })
    console.log(data);
	throw redirect(303, data.url!)
}