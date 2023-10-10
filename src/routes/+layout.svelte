<script lang='ts'>
    import Navbar from "$lib/Navbar.svelte";
    import Background2 from "$lib/components/Background2.svelte";
    import {supabase} from "$lib/supabaseClient"
import "../app.css";
import {user} from "../stores/authStore"
    import { height } from "./stores";

    user.set(supabase.auth.getUser())
    supabase.auth.onAuthStateChange((_, session) => {
        // console.log("something happening here")
        console.log(session)
        user.set(session?.user)
        if(session?.user) {
            console.log("we did it!")
        }
    })

</script>

<!-- <div style={`height: ${$height}px;`} class='w-full'> -->
<div class='grid-rows-[6rem_1fr] grid gap-0 h-[100dvh]'>
    <Navbar />
    <main class='flex flex-col justify-center m-0 w-full h-full overflow-scroll'>
        <slot />    
    </main>
    <Background2 />
</div>

<svelte:window bind:innerHeight={$height}/>