console.log("jeg er i instructionSSOR")

export function initializeSSORInstruction() {
    console.log("Initializing SSOR Instructions View...");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Sprinkleranlægsinstruktioner:</h1>
        <h2>Udførlig guide til start og afslutning af sprinkleranlæg:</h2>
        <ul>
            <h4>1.Forberedelse</h4>
            <li>1.1 Kontroller udstyr og værktøj: Sørg for, at du har adgang til de nødvendige manualer, værktøj og eventuelle sikkerhedsforanstaltninger.</li>
            <li>1.2 Sørg for adgang til hovedventilen: Find og gør dig bekendt med placeringen af hovedventilen og vandforsyningen.</li>
            <h4>2.Start af systemet</h4>
            <li>2.1 Tjek hovedventilens status: Sørg for, at hovedventilen er åben for at tillade vandgennemstrømning.</li>
            <li>2.2 Aktiver systemet: Find kontrolpanelet og sørg for, at alle systemparametre (tryk, strøm osv.) er inden for de anbefalede grænser.</li>
            <h4>3.Test af sprinklersystemet</h4>
            <li>3.1 Tryktest: Brug trykmålere til at verificere:
            <li>3.1.1 Tryk over våd ventil: Skal være stabilt og inden for systemets anbefalede grænser.<li>
            <li>3.1.2 Tryk under ventiler: Kontroller, at trykket matcher systemets krav.<li>
            <li>3.1.3 Tryk på vandstik: Kontroller trykket på vandforsyningen.</li>
            <h4>4.Drift og overvågning</h4>
            <li>4.1 Overvåg systemet regelmæssigt: Kontrollér trykmålere og systemets status på kontrolpanelet.</li>
            <li>4.2 Rapportér afvigelser: Hvis der opdages lækager, tryktab eller andre problemer, skal dette rapporteres og udbedres straks.</li>
            <h4>5.Afslutning</h4>
            <li>5.1 Sluk for systemet korrekt (hvis nødvendigt): Luk hovedventilen forsigtigt og sørg for, at al tryk er lettet.</li>
            <li>5.2 Gendan systemet til normal drift: Åbn ventilerne igen og verificér, at systemet er klar til brug.</li>
        </ul>
        <button id="back-to-mainmenu" class="button-style">Tilbage</button>
    `;
    document.getElementById("back-to-mainmenu").addEventListener("click", () => {
        console.log("Navigating back to Main Menu...");
        location.hash = "#mainmenu";
    });
}

