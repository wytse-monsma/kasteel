<script lang='ts'>
    import Navbar from "$lib/Navbar.svelte";
    import Background from "$lib/components/Background.svelte";
import "../app.css";
    import { height } from "./stores";

</script>

<!-- <div style={`height: ${$height}px;`} class='w-full'> -->
<div class='grid-rows-[6rem_1fr] grid gap-0 h-[100dvh]'>
    <Navbar />
    <main class='flex flex-col justify-center m-0 w-full h-full'>
        <slot />    
    </main>
    <Background />
</div>

<svelte:window bind:innerHeight={$height}/>