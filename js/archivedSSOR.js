import { fillFormWithInformation } from "./editSSOR.js";

const arkivSSORHTML = () => `
    <h2>Sprinkler System Archive</h2>
    <table id="ssor-table">
        <thead>
            <tr>
                <th>Dato</th>
                <th colspan="2">Tryk over / under alarmventil (bar)</th>
                <th>Tryk på vandstik (bar)</th>
                <th>Fungerende alarm til brandvæsen</th>
                <th>Bemærkninger</th>
                <th>Underskrift</th>
                <th>Rediger</th>
            </tr>
            <tr>
                <th></th>
                <th>Over våd ventil</th>
                <th>Under ventiler</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!-- Dynamic rows will be inserted here -->
        </tbody>
    </table>
    <div class="back-button-container">
        <button id="back-to-ssor" class="button-style">Tilbage</button>
    </div>
`;

export async function initializeSSORArchive() {
    const content = document.getElementById("content");

    // Inject the HTML structure into the content
    content.innerHTML = arkivSSORHTML();

    // Add an event listener for the back button
    document.getElementById("back-to-ssor").addEventListener("click", () => {
        location.hash = "#SSOR"; // Navigate to the SSOR view
    });


    // Fetch SSOR data from the backend API
    const response = await fetch("http://localhost:8080/ssor");
    const ssorData = await response.json();

    // Get the table body element where SSOR records will be displayed
    const tableBody = document.querySelector("#ssor-table tbody");

    // Clear any existing content in the table body
    tableBody.innerHTML = "";

    // Populate the table with SSOR records
    ssorData.forEach(ssor => {
        const row = `
            <tr>
                <td>${ssor.date}</td>
                <td>${ssor.pressureOverWetValve}</td>
                <td>${ssor.pressureUnderValves}</td>
                <td>${ssor.pressureOnWaterPlug}</td>
                <td>${ssor.alarmToFireDepartmentWorking ? "Yes" : "No"}</td>
                <td>${ssor.comments}</td>
                <td>${ssor.signature}</td>
                <td><button class='editBTN' data-id='${ssor.ssorid}'>Rediger</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
        console.log(ssor)
    });

    const editButtons = document.querySelectorAll(".editBTN");
    editButtons.forEach(button => {
        button.addEventListener("click", async (event) => {
            const ssorID = event.target.getAttribute("data-id");
            console.log("Edit button clicked for ID:", ssorID); // Debugging
            await fillFormWithInformation(ssorID);
        });
    });
}

