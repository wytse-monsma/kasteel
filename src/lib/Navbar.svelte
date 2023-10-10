
<nav class="bg-primary opacity-70 text-white h-14 w-full">
    <div class="flex flex-row justify-between flex-nowrap w-10/12 self-center text-center">
        <div class=" w-3/12 overflow-hidden">
            <a href="/schoonmaakrooster"> <span class="text-white">rooster</span></a>
        </div>
        <div class=" w-3/12 overflow-hidden">
            <a href="/verrekenlijst"> <span class="text-white">verrekenlijst</span></a>
        </div>

        <!-- LOGIN -->
        <div>
            <form action="/api/login" method="POST">
            <button type="submit">INLOGGEN BITCH </button> 
            </form>
        </div>

        <!-- LOGOUT -->
        <div>
            <form action="/api/logout" method="POST">
            <button type="submit">UITLOGGEN BITCH </button> 
            </form>
        </div>
    </div>
</nav>