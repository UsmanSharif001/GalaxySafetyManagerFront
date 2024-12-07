import {postObjectAsJson} from "./module.js";

const urlPostOR = "http://localhost:8080/createOR"

console.log("jeg er i addOR")


const addORHtml = () => {
    return `
    <div id="postORdiv">
            <h2>Udfyld Driftjournal</h2>
            <form id="postOR">
              
           
         
                 <h3>Flugtveje</h3>
                 
                <label for="escapeRouteClear">Flugtveje er frie og ryddelige i hele deres bredde</label>
                <input type="checkbox" id="escapeRouteClear" name="escapeRouteClear" value = "true">
                <br>

                <label for="escapeRouteClear2">Flugtveje kan passeres i flugtretningen uden brug af nøgle eller særligt værktøj</label>
                <input type="checkbox" id="escapeRouteClear2" name="escapeRouteClear2" value = "true">
                <br>
                
                <label for="emergencyDoorsVisible">Flugtvejsbelysning lyser klart og tydeligt</label>
                <input type="checkbox" id="emergencyDoorsVisible" name="emergencyDoorsVisible" value = "true">
                <br>
                 
                 <h3>Branddøre og pankikbelysning</h3>
                 
                <label for="emergencyLightsWork">Branddøres og andre selvlukkende døres lukkeanordning er funktionsduelig</label>
                <input type="checkbox" id="emergencyLightsWork" name="emergencyLightsWork" value = "true">
                <br>

                <label for="warningSystemWork">Alle lamper, der hører til nød- og panikbelysningen, er i orden</label>
                <input type="checkbox" id="warningSystemWork" name="warningSystemWork" value = "true">
                <br>
                 
                 <h3>Brandslukningsmateriel</h3>
                 
                <label for="maxCapasitiesIsVisible">Brandslukningsmateriel er placeret synligt og frit tilgængeligt</label>
                <input type="checkbox" id="maxCapasitiesIsVisible" name="maxCapasitiesIsVisible" value = "true">
                <br>

                <label for="inventoryComplieswithFloor">Brandslukningsmateriel er skiltet</label>
                <input type="checkbox" id="inventoryComplieswithFloor" name="inventoryComplieswithFloor" value = "true">
                <br>

                <label for="fireExtinguisherIsCorrect">Brandslukningsmateriel er efterset inden for det seneste år</label>
                <input type="checkbox" id="fireExtinguisherIsCorrect" name="fireExtinguisherIsCorrect" value = "true">
                <br>
                
                <h3>Brand- og evakueringsplan</h3>
                
                <label for="employeeInstruction">Personalet har modtaget instruktion i brand- og evarkueringsplanen</label>
                <input type="checkbox" id="employeeInstruction" name="employeeInstruction" value = "true">
                <br>

                <label for="evacuationPlanForEmployee">Der er ophængt brand- og evarkueringsinstruks der hvor personalet færdes</label>
                <input type="checkbox" id="evacuationPlanForEmployee" name="evacuationPlanForEmployee" value = true>
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

                <label for="signature">Signatur - Udfyld med initialer:</label>
                <input type="text" id="signature" name="signature" required>
                <br>

                <button id ="pbPostOR" type="submit">Tilføj</button>
                <a id="cancelLink" href="#OR" class="button-style">Tilbage</a>
            </form>
        </div>
    `
}

async function postFormDataAsJson(url, formData) {
    console.log("Jeg er i postFormDataAsJson")
    console.log(url)
    console.log(formData)
    const plainFormData = Object.fromEntries(formData.entries());
    console.log("This is plain form data: " , plainFormData)
    const resp = await postObjectAsJson(url, plainFormData, "POST")
    return resp;
}

async function handleFormSubmit(event) {
    event.preventDefault()

    const form = document.getElementById("postOR")
    const url = urlPostOR

    const date = document.getElementById("dateTime").value;
    const signature = document.getElementById("signature").value;

    if (!date || !signature) {
        alert("Husk at udfylde Dato og underskrift");
        return;
    }

    try {
        const formData = new FormData(form);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        const responseData = await postFormDataAsJson(url, formData);
        form.reset()
    } catch (error) {
        alert(error.message);
        console.error(error)
    }
}



function addORSetup() {

        console.log("Tilføjer en eventlistener")

        document.getElementById("content").innerHTML = addORHtml()


        const submit = document.getElementById("pbPostOR")
        submit.addEventListener("click", handleFormSubmit);

}

export function initializeAddOR() {
    addORSetup()
}

