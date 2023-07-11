<script lang='ts'>
    import "../app.css";
    import { height } from "./stores";

</script>

<!-- <div style={`height: ${$height}px;`} class='w-full'> -->
<div class='h-[100dvh] w-screen'>
    <main class='w-full h-full'>
        <slot />    
    </main>
</div>

<svelte:window bind:innerHeight={$height}/>