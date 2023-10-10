<script>

    // import { _Login } from "../routes/api/login/+server";

</script>
<nav class="bg-primary opacity-70 text-white h-14 w-full">
    <div class="flex flex-row justify-between flex-nowrap w-10/12 self-center text-center">
        <div class=" w-3/12 overflow-hidden">
            <!-- <button on:click={() => _Login()}> LOGIN </button>  -->
        </div>
        <div class=" w-3/12 overflow-hidden">
            <a href="/schoonmaakrooster"> <span class="text-white">rooster</span></a>
        </div>
        <div class=" w-3/12 overflow-hidden">
            <a href="/verrekenlijst"> <span class="text-white">verrekenlijst</span></a>
        </div>
    </div>
    <!-- <a href="/signup"><span class="text-white">Sign up</span></a>
    <h1>BITCHES</h1> -->
</nav>


<style>
    nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    nav a{
        margin: .5em;
        color: #000000;
        text-decoration: none;
        font-weight: 800;
    }
    nav a:hover{
        text-decoration: underline;
    }
</style>