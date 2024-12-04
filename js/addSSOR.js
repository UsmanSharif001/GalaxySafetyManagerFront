import {initializeMenuSSOR} from "./menuSSOR.js";
console.log("jeg er i addSSOR")

import {postObjectAsJson} from "./module.js";

const addSSORHTML = () => `
    <h2>Add New Sprinkler System</h2>
    <form id="add-ssor-form">
        <label>Date:</label>
        <input type="date" name="date"  /><br/>
        <label>Pressure Over Wet Valve:</label>
        <input type="number" name="pressureOverWetValve"  /><br/>
        <label>Pressure Under Valves:</label>
        <input type="number" name="pressureUnderValves"  /><br/>
        <label>Pressure On Waterplug</label>
        <input type="number" name="pressureOnWaterPlug" /><br/>
        <label>Alarm To Firedepartment Working</label>
        <input type="checkbox" name="alarmToFireDepartmentWorking" /><br/>
        <label>Comments:</label>
        <textarea name="comments"></textarea><br/>
        <label>Signature</label>
        <input type="text" name="signature" /><br>
        <button type="submit">Submit</button>
        <button id="cancel-add">Cancel</button>
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

    document.getElementById("cancel-add").addEventListener("click", () => {
        location.hash = "#SSOR";
    });

}
