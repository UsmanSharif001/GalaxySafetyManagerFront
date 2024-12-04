import {postObjectAsJson} from "./module.js";

const urlPostOR = "http://localhost:8080/createOR"

console.log("jeg er i addOR")


const addORHtml = () => {
    return `
    <div id="postORdiv">
            <h2>Udfyld Driftjournal</h2>
            <form id="postOR">
              
                <label for="orName">Navn:</label>
                <input type="text" id="orName" name="orName" required>
                <br>

                <label for="orAddress">Adresse:</label>
                <input type="text" id="orAddress" name="orAddress" required>
                <br>

                <label for="orPhoneNumber">Telefonnummer:</label>
                <input type="number" id="orPhoneNumber" name="orPhoneNumber" required>
                <br>
                 
                 <h3>Flugtveje</h3>
                 
                <label for="isEscapeRouteClear">Flugtveje er frie og ryddelige i hele deres bredde</label>
                <input type="checkbox" id="isEscapeRouteClear" name="isEscapeRouteClear">
                <br>

                <label for="isEscapeRouteClear2">Flugtveje kan passeres i flugtretningen uden brug af nøgle eller særligt værktøj</label>
                <input type="checkbox" id="isEscapeRouteClear2" name="isEscapeRouteClear2">
                <br>

                <label for="isEmergencyDoorsVisible">Flugtvejsbelysning lyser klart og tydeligt</label>
                <input type="checkbox" id="isEmergencyDoorsVisible" name="isEmergencyDoorsVisible">
                <br>
                 
                 <h3>Branddøre og pankikbelysning</h3>
                 
                <label for="emergencyLightsWork">Branddøres og andre selvlukkende døres lukkeanordning er funktionsduelig</label>
                <input type="checkbox" id="emergencyLightsWork" name="emergencyLightsWork">
                <br>

                <label for="warningSystemWork">Alle lamper, der hører til nød- og panikbelysningen, er i orden</label>
                <input type="checkbox" id="warningSystemWork" name="warningSystemWork">
                <br>
                 
                 <h3>Brandslukningsmateriel</h3>
                 
                <label for="maxCapasitiesIsVisible">Brandslukningsmateriel er placeret synligt og frit tilgængeligt</label>
                <input type="checkbox" id="maxCapasitiesIsVisible" name="maxCapasitiesIsVisible">
                <br>

                <label for="inventoryComplieswithFloor">Brandslukningsmateriel er skiltet</label>
                <input type="checkbox" id="inventoryComplieswithFloor" name="inventoryComplieswithFloor">
                <br>

                <label for="fireExtinguisherIsCorrect">Brandslukningsmateriel er efterset inden for det seneste år</label>
                <input type="checkbox" id="fireExtinguisherIsCorrect" name="fireExtinguisherIsCorrect">
                <br>
                
                <h3>Brand- og evakueringsplan</h3>
                
                <label for="employeeInstruction">Personalet har modtaget instruktion i brand- og evarkueringsplanen</label>
                <input type="checkbox" id="employeeInstruction" name="employeeInstruction">
                <br>

                <label for="evacuationPlanForEmployee">Der er ophængt brand- og evarkueringsinstruks der hvor personalet færdes</label>
                <input type="checkbox" id="evacuationPlanForEmployee" name="evacuationPlanForEmployee">
                <br>
                
                <h3>Tilføj bemærkninger</h3>
                
                <div>
                <p>Beskriv evt. problemer, samt hvad der er gjort for at udbedre fejlen</p>
                <br>
                <p>BEMÆRK: Arrangementet må ikke begynde, før der er lagt en alternativ plan for at udbedre fejlen,
                og personalet er indforstået med evt. ændringer i evarkueringsplanen</p>
                </div>
                
                <label for="errorDescription">Tilføj Bemærkninger</label>
                <textarea id="errorDescription" name="errorDescription" rows="4" cols="50"></textarea>
                <br>

                <label for="dateTime">Date:</label>
                <input type="date" id="dateTime" name="dateTime" required>
                <br>

                <label for="signature">Signature:</label>
                <input type="text" id="signature" name="signature" required>
                <br>

                <button id ="pbPostOR" type="submit">Tilføj</button>
            </form>
        </div>
    `
}

async function postFormDataAsJson(url, formData) {
    console.log("Jeg er i postFormDataAsJson")
    const plainFormData = Object.fromEntries(formData.entries());
    const resp = await postObjectAsJson(url, plainFormData, "POST")
    return resp;
}

async function handleFormSubmit(event) {
    event.preventDefault()

    const form = document.getElementById("postOR")
    const url = urlPostOR

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson(url, formData);
        form.reset()
    } catch (error) {
        alert(error.message);
        console.error(error)
    }
}

let isEventListenerAdded = false

function addORSetup() {
    if (!isEventListenerAdded) {
        console.log("Tilføjer en eventlistener")

        document.getElementById("content").innerHTML = addORHtml()

        const submit = document.getElementById("pbPostOR")
        submit.addEventListener("click", handleFormSubmit);
        isEventListenerAdded = true
    }
}

export function initializeAddOR() {
    addORSetup()
}

