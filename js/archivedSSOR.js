import { fetchAnyUrl } from "./module.js";
console.log("er i archivedSSOR")


const arkivSSORHTML = () => `
    <h2>Sprinkler System Archive</h2>
    <table id="ssor-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Pressure Over Dry Valve</th>
                <th>Pressure Over Wet Valve</th>
                <th>Pressure Under Valves</th>
                <th>Pressure On Water Plug</th>
                <th>Alarm To Fire Department</th>
                <th>Comments</th>
                <th>Signature</th>
            </tr>
        </thead>
        <tbody>
            <!-- Dynamic rows will be inserted here -->
        </tbody>
    </table>
`;

// Now define the initializeSSORArchive function
export async function initializeSSORArchive() {
    const content = document.getElementById("content");

    // Inject the HTML structure into the content
    content.innerHTML = arkivSSORHTML();

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
                <td>${ssor.pressureOverDryValve}</td>
                <td>${ssor.pressureOverWetValve}</td>
                <td>${ssor.pressureUnderValves}</td>
                <td>${ssor.pressureOnWaterPlug}</td>
                <td>${ssor.alarmToFireDepartmentWorking ? "Yes" : "No"}</td>
                <td>${ssor.comments}</td>
                <td>${ssor.signature}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}