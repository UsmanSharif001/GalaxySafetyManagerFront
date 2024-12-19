

export function initializeORInstruction() {
    console.log("Initializing OR Instructions View...");
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Arrangement informationsguide:</h1>
        <h2>Udførlig guide til start og afslutning af arrangement:</h2>
        <ul>
           <h4>1. Forberedelse</h4>
<li>1.1 Kontroller udstyr og værktøj: Sørg for, at alle nødvendige manualer, værktøj og sikkerhedsudstyr er tilgængelige.</li>
<li>1.2 Gennemgå spilleområdets layout: Sørg for at have en plan over spillestedet med placering af nødudgange, brandslukkere og førstehjælpsudstyr.</li>
<li>1.3 Tjek adgangsforhold: Sørg for, at der er fri adgang til scenen, kontrolrum og lagerområder.</li>

<h4>2. Opstart af spillested</h4>
<li>2.1 Kontrollér tekniske systemer: 
    <ul>
        <li>2.1.1 Tænd for lydsystemet og test mikrofoner og højttalere.</li>
        <li>2.1.2 Kontrollér lyssystemet og test lyskilder og effekter.</li>
        <li>2.1.3 Verificér, at ventilations- og klimaanlæg fungerer korrekt.</li>
    </ul>
</li>
<li>2.2 Gennemgå sikkerhedsprocedurer: Sørg for, at sikkerhedsudstyr som nødlys, brandalarmer og overvågningskameraer er aktive og funktionsdygtige.</li>

<li>3.2 Sæde- og adgangstjek: Kontrollér, at alle stole, borde og adgangsveje er i god stand og korrekt placeret.</li>

<h4>4. Drift og overvågning</h4>
<li>4.1 Overvåg løbende systemer: 
    <ul>
        <li>4.1.1 Kontrollér lydniveauer og justér, hvis nødvendigt.</li>
        <li>4.1.2 Sørg for, at lyseffekter kører som planlagt.</li>
        <li>4.1.3 Hold øje med temperatur og luftkvalitet i lokalet.</li>
    </ul>
</li>
<li>4.2 Håndtér afvigelser: Hvis der opstår tekniske eller sikkerhedsmæssige problemer, skal de udbedres straks og rapporteres til relevante ansvarlige.</li>

<h4>5. Afslutning</h4>
<li>5.1 Nedlukning af systemer: 
    <ul>
        <li>5.1.1 Sluk for lyd- og lyssystemer efter arrangementets afslutning.</li>
        <li>5.1.2 Sluk for ventilations- og klimaanlæg, hvis det ikke skal bruges efterfølgende.</li>
    </ul>
</li>
<li>5.2 Rengøring og oprydning: Sørg for, at spillestedet er rengjort og ryddet op til næste arrangement.</li>
<li>5.3 Dokumentation: Registrér eventuelle fejl eller mangler samt gennemførte handlinger i driftloggen.</li>

        </ul>
        <button id="back-to-mainmenu" class="button-style">Tilbage</button>
    `;
    document.getElementById("back-to-mainmenu").addEventListener("click", () => {
        console.log("Navigating back to Main Menu...");
        location.hash = "#mainmenu";
    });

}