
<script lang="ts">
    export let data;
    export const kasteel59a = data.kasteelheren.filter((k) => k.huisnummer == "59A" ).sort((a, b) => a.ancienniteit - b.ancienniteit);
    export const kasteel61a = data.kasteelheren.filter((k) => k.huisnummer == "61A" ).sort((a, b) => a.ancienniteit - b.ancienniteit);
    const taken = ["wk + dak", "bk", "k", "wc + gang"]
    
    function getTaak(kasteelheer: any) {
        var currentdate: any = new Date();
        var oneJan: any = new Date(currentdate.getFullYear(),0,1);
        var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        var weeknummer = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
        var localancienniteit = kasteelheer.huisnummer == "59A" ? kasteel59a.indexOf(kasteelheer) : kasteel61a.indexOf(kasteelheer);
        console.log(weeknummer % 4);
        return taken[(localancienniteit + weeknummer + 3) % 4];

    }
</script>

<div class="self-center">
    <div class="flex flex-col space-between">
        <!-- 59A VOOOO -->
        <div class="flex flex-col m-20">
            <div class="text-center font-bold text-lg"> 59A </div>
            {#each kasteel59a as kasteelheer}
            <div class="flex flex-row">    
                <div class="border-2 mb-2 border-r-transparent w-40">{kasteelheer.naam}</div>
                <div class="border-2 mb-2 border-l-transparent w-20">{getTaak(kasteelheer)}</div>
            </div>
            {/each}
        </div>

        <!-- 61A BAHHHH -->
        <div class="flex flex-col m-20">
            <div class="text-center font-bold text-lg"> 61A </div>
            {#each data.kasteelheren as kasteelheer}
            {#if kasteelheer.huisnummer == "61A"}
            <div class="flex flex-row">    
                <div class="border-2 mb-2 border-r-transparent w-40">{kasteelheer.naam}</div>
                <div class="border-2 mb-2 border-l-transparent w-20">{getTaak(kasteelheer)}</div>
            </div>
            {/if}
            {/each}
        </div>
    </div>
</div>
