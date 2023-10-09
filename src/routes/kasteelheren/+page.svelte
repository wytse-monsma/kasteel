<script>
    export let data;
</script>

<div class="self-center w-8/12">
    <div class="font-bold text-4xl text-center"> ACTIEF </div>
    <div class="bg-opacity-20 bg-secondary rounded-lg p-10 mt-10">
        {#each data.kasteelheren as kasteelheer}
        <div class="mb-10 text-center">    
            <div>{kasteelheer.naam}</div>
        </div>
        {/each}
    </div>
</div>