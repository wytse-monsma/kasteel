
<script lang="ts">
    export let data;
    
    const taken = ["wk + dak", "bk", "k", "wc + gang"]
    
    function getTaak(ancienniteit: number) {
        let index = ancienniteit % 4;
        console.log(index);

        return taken[index]
    }
</script>

<!-- <div class="self-center">
    <img src="/schoonmaakrooster.PNG" alt="schoonmaakrooster" width="691px" height="681px"/>
</div> -->

<div class="self-center">
    <div class="flex flex-col">
        {#each data.kasteelheren as kasteelheer}
        <div class="flex flex-row">    
            <div class="border-2 mb-2 border-r-transparent w-40">{kasteelheer.naam}</div>
            <div class="border-2 mb-2 border-l-transparent w-20">{getTaak(kasteelheer.ancienniteit)}</div>
        </div>
        {/each}
    </div>
</div>
