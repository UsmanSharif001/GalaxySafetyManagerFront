import {initializeMenuSSOR} from "./menuSSOR.js";
console.log("jeg er i addSSOR")

import {postObjectAsJson} from "./module.js";

const addSSORHTML = () => `
    <h2>Add New Sprinkler System</h2>
    <form id="add-ssor-form">
        <label>Dato:</label>
        <input type="date" name="date"  /><br/>
        
        <!-- Group for Tryk under alarmventil -->
        <fieldset>
            <legend>Tryk over / under alarmventil (bar)</legend>
            <label>Tryk over våd ventil:</label>
            <input type="number" name="pressureOverWetValve"  /><br/>
            <label>Under ventiler:</label>
            <input type="number" name="pressureUnderValves"  /><br/>
        </fieldset>

        <label>Tryk på vandstik(bar)</label>
        <input type="number" name="pressureOnWaterPlug" /><br/>
        <label>Fungerende alarm til brandvæsen</label>
        <input type="checkbox" name="alarmToFireDepartmentWorking" /><br/>
        <label>Bemærkninger:</label>
        <textarea name="comments"></textarea><br/>
        <label>Underskrift</label>
        <input type="text" name="signature" /><br>

        <button type="submit">Tilføj</button>
        <button id="cancel-add" type="button">Fortryd</button>
    </form>
`;


export function initializeAddSSOR() {
    document.getElementById("content").innerHTML = addSSORHTML();

    document.getElementById("add-ssor-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newSSOR = Object.fromEntries(formData.entries());
        newSSOR.alarmToFireDepartmentWorking = formData.get("alarmToFireDepartmentWorking") === "on";
        const response = await postObjectAsJson("http://localhost:8080/ssor", newSSOR, "POST");

        if (response.ok) {
            alert("SSOR added successfully!");
            location.hash = "#SSOR";
        } else {
            alert("Failed to add SSOR. Please try again.");
        }
    });

    document.getElementById("cancel-add").addEventListener("click", (event) => {
        event.preventDefault();
        location.hash = "#SSOR";
    });
}
