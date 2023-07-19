<script lang="ts">
    type Kasteelheer = {
        kasteelheer_id?: number;
        naam: string;
        is_actief: boolean;
        heeft_kasteeldas?: boolean;
    }



    // variables
    // TODO: REPLACE WITH BACKEND STUFF
    let kasteelheren: Kasteelheer[] = [
        {naam: 'Mons', is_actief: true},
        {naam: 'Chos', is_actief: true},
        {naam: 'Jolt', is_actief: true},
        {naam: 'Otto', is_actief: true},
        {naam: 'Mata', is_actief: true},
        {naam: 'Oenk', is_actief: true},
        {naam: 'Culo', is_actief: true},
        {naam: 'Boph', is_actief: true}];
    let headers:                    string[] = ['gedronken', 'ingelegd aanbieding', 'ingelegd normaal', 'ingelegd klok', 'statie inlever', 'statie inleg']
    let num = 1;
    let tableData = Array(6).fill(0).map(() => Array(kasteelheren.length + 1).fill(num++));

    // prices
    let prijs_krat_normaal = 17.99
    let prijs_krat_aanbieding = 14.99
    let prijs_krat_klok = 9.99
    let prijs_biertje_normaal = prijs_krat_normaal / 24
    let prijs_biertje_aanbieding = prijs_krat_aanbieding / 24
    let prijs_statiegeld = 3.90

    function verrekenen(data: number[][]) {
        // gemiddelde bierprijs
        let totaal_gekocht = 24 * (sum(data[1]) + sum(data[2]) + sum(data[3]));
        let totaal_gekocht_prijs = sum(data[1]) * prijs_krat_aanbieding + sum(data[2]) * prijs_krat_normaal + sum(data[3]) * prijs_krat_klok;
        let prijs_biertje_gemiddeld = totaal_gekocht_prijs/ totaal_gekocht;

        // niet gestreepte biertjes
        let totaal_gestreept = sum(data[0]);
        let totaal_niet_gestreept = ((sum(data[1]) + sum(data[2]) + sum(data[3])) * 24) - totaal_gestreept;
        let kosten_oud_en_niet_gestreept = (((data[0].slice(-1)[0]) + totaal_niet_gestreept) * prijs_biertje_gemiddeld) / kasteelheren.length

        let saldo = Array(kasteelheren.length).fill(0);
        
        // Saldo berekening per kasteelheer
        for (let i=0; i<kasteelheren.length; i++){
            // Betaald aan bier halen
            let bier_betaald    = data[1][i] * prijs_krat_aanbieding + data[2][i] * prijs_krat_normaal + data[3][i] * prijs_krat_klok;
            let statie_betaald  = (data[5][i] - data[4][i]) * prijs_statiegeld;
            let totaal_betaald  = bier_betaald + statie_betaald;

            let kosten_bier = data[0][i] * prijs_biertje_gemiddeld;
            let kosten_statie = ((sum(data[5]) - sum(data[4])) * prijs_statiegeld) / kasteelheren.length;
            let totaal_kosten = kosten_bier + kosten_statie + kosten_oud_en_niet_gestreept;

            saldo[i] = totaal_betaald - totaal_kosten;
        }

        // Verrekening
        for (let j=0; j<kasteelheren.length; j++) {
            let temp_index = 0;
            while ((saldo[j] < 0) && (temp_index < kasteelheren.length)) {
                if ((temp_index != j) && (saldo[temp_index] > 0)) {
                    // Transfer alles
                    if (saldo[j] *-1 < saldo[temp_index]) {
                        // TODO: PRINT MESSAGE TO USER
                        console.log(kasteelheren[j].naam + " " + saldo[j] + " to: " + kasteelheren[temp_index].naam);
                        saldo[temp_index] += saldo[j];
                        saldo[j] = 0;
                    }
                    
                    // Transfer deel
                    else if (saldo[j] *-1 > (saldo[temp_index])) {
                        // TODO: PRINT MESSAGE TO USER
                        console.log(kasteelheren[j].naam + " " + saldo[temp_index] + " to: " + kasteelheren[temp_index].naam);
                        saldo[j] += saldo[temp_index];
                        saldo[temp_index] = 0;
                    }
                }
                temp_index++;
            }

            temp_index = 0;
            while((saldo[j] > 0) && (temp_index < kasteelheren.length)) {
                if ((temp_index != j) && (saldo[temp_index] < 0)) {
                    // Transfer alles
                    if (saldo[j] < saldo[temp_index] * -1) {
                        // TODO: PRINT MESSAGE TO USER
                        console.log(kasteelheren[temp_index].naam + " " + saldo[j] + " to: " + kasteelheren[j].naam);
                        saldo[temp_index] += saldo[j];
                        saldo[j] = 0;
                    }
                    
                    // Transfer deel
                    else if (saldo[j] > (saldo[temp_index] *-1)) {
                        // TODO: PRINT MESSAGE TO USER
                        console.log(kasteelheren[temp_index].naam + " " + saldo[temp_index] + " to: " + kasteelheren[j].naam);
                        saldo[j] += saldo[temp_index];
                        saldo[temp_index] = 0;
                    }
                }
                temp_index++;
            }
        }

    }

    function sum(array: number[]): number {
        let result = array.reduce(function(a, b) {
            return a+b;
        });
        return result;
    }
</script>

<div class="self-center">
    <form on:submit={() => verrekenen(tableData)}>
        <table class="border-separate border-spacing-2 border border-slate-400">
            <thead>
                <tr>
                    <th class="bg-white w-10 truncate">naam</th>
                    {#each kasteelheren as header}
                    <th class="bg-white w-10 truncate">{header.naam}</th>
                    {/each}
                    <th class="bg-white w-10 truncate">OUD</th>
                </tr>
            </thead>
            {#each tableData as row, i}
            <tr>
                <h1 class="bg-white">{headers[i]}</h1>
                {#each row as column, j}
                <td>
                    <input class="text-center w-10" type="number" bind:value={tableData[i][j]}/>
                </td>
                {/each}
            </tr>
            {/each}
        </table>
        <input class="bg-white center-self" type="submit">
    </form>
</div>