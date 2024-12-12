import {postObjectAsJson} from "./module.js";
import {addORHtml} from "./forms.js";

const urlPostOR = "http://localhost:8080/createOR"

console.log("jeg er i addOR")

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

        alert("Driftjournalen blev oprettet");

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

