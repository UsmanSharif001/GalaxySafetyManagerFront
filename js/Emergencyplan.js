console.log("jeg er i Emergency plan");

const emergencyplanHTML = () => {
    return `
<div id="emergencyPlan">
    <h1>Brand- og evakueringsinstruks</h1>
    <h3><strong>Brandvæsenet alarmeres</strong></h3>
    <h3><strong>Telefon:</strong> 112</h3>
    <ul class="emergencyList">
        <li>Hvilket telefonnummer ringes der fra: ?</li>
        <li>Hvad er der sket?</li>
        <li>Er der tilskadekomne? - Hvor mange?</li>
        <li>Oplys alarm adressen:</li>
    </ul>
    <address>
        <p><i>Kulturhuset Galaksen</i></p>
        <p><i>Bymidten 48</i></p>
        <p><i>3500 Værløse</i></p>
    </address>

    <h3><strong>Det øvrige personale informeres om situationen</strong></h3>
    <ul class="emergencyList">
    <li>Aktiver brandtryk</li>
    </ul>

    <h3><strong>Bygningen evakueres</strong></h3>
    <ul class="emergencyList">
    <li>Luk døre!</li>
    <li>Søg samlingssted: <i>Torvet foran biografen</i></li>
    </ul>
</div>
 `
}

function emergencyplanSetup() {
    console.log("Jeg er i emergencyplanSetup")

    document.getElementById("content").innerHTML = emergencyplanHTML()
}

export function initializeMenuEmergencyplan(){
    return emergencyplanSetup();
}