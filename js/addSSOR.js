import {initializeMenuSSOR} from "./menuSSOR.js";
console.log("jeg er i addSSOR")

import {postObjectAsJson} from "./module.js";
import {addSSORHTML} from "./forms.js";


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
