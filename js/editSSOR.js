console.log("Jeg er i editSSOR");

// Define the form HTML directly
const editSSORHTML = `
    <dialog id="add-ssor-dialog">
        <h2>Edit Sprinkler System</h2>
        <form id="add-ssor-form">
            <label>Dato:</label>
            <input type="date" name="date" /><br/>

            <!-- Group for Tryk under alarmventil -->
            <fieldset>
                <legend>Tryk over / under alarmventil (bar)</legend>
                <label>Tryk over våd ventil:</label>
                <input type="number" name="pressureOverWetValve" /><br/>
                <label>Under ventiler:</label>
                <input type="number" name="pressureUnderValves" /><br/>
            </fieldset>

            <label>Tryk på vandstik(bar)</label>
            <input type="number" name="pressureOnWaterPlug" /><br/>
            <label>Fungerende alarm til brandvæsen</label>
            <input type="checkbox" name="alarmToFireDepartmentWorking" /><br/>
            <label>Bemærkninger:</label>
            <textarea name="comments"></textarea><br/>
            <label>Underskrift:</label>
            <input type="text" name="signature" /><br/>

            <button type="submit">Gem</button>
            <button id="cancel-add" type="button">Fortryd</button>
        </form>
    </dialog>
`;


// Insert the form modal into the DOM
document.body.insertAdjacentHTML("beforeend", editSSORHTML);

document.getElementById("cancel-add").addEventListener("click", () => {
    const popup = document.querySelector("#add-ssor-dialog");
    const form = document.getElementById("add-ssor-form");

    if (form) {
        form.reset(); // Clear the form
    }
    if (popup) {
        popup.close(); // Close the modal
    }

    // Optional: Navigate back to the archive view
    location.hash = "#arkivSSOR";
    console.log("Fortryd button clicked: Modal closed and navigated back to archive");
});

// URLs for API endpoints
const urlSSOR = "http://localhost:8080/ssor";
const urlPutSSOR = "http://localhost:8080/ssor";

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = document.getElementById("add-ssor-form");
    const ssorID = form.getAttribute("data-ssor-id"); // Retrieve the ID set in the form
    const url = `${urlPutSSOR}/${ssorID}`; // Construct the PUT URL

    try {
        const formData = new FormData(form);

        // Convert FormData to JSON and fix checkbox value
        const plainFormData = Object.fromEntries(formData.entries());
        plainFormData.alarmToFireDepartmentWorking = form.elements["alarmToFireDepartmentWorking"].checked;

        console.log("Sending PUT request to URL:", url);
        console.log("Form data:", plainFormData);

        const response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(plainFormData),
        });

        if (!response.ok) {
            throw new Error(`Failed to update SSOR. Status: ${response.status}`);
        }

        console.log("Response from PUT request:", await response.json());
        alert("SSOR updated successfully!");
        form.reset(); // Clear the form
        document.querySelector("#add-ssor-dialog").close(); // Close the modal
        location.hash = "#arkivSSOR"; // Simpler option: navigate to archive
        // OR
        location.reload()
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error("Error in form submission:", error);
    }
}

// Function to populate the form with existing data
async function fillFormWithInformation(ssorID) {
    const popup = document.querySelector("#add-ssor-dialog");
    const form = document.getElementById("add-ssor-form");

    // Fetch all SSORs from the API
    const response = await fetch(urlSSOR);
    const ssorList = await response.json();

    // Find the specific SSOR by ID
    const ssor = ssorList.find(item => item.ssorid == ssorID);
    if (!ssor) {
        alert("No SSOR found with the provided ID.");
        return;
    }

    console.log("Filling form with SSOR data:", ssor);

    // Populate form fields
    form.elements["date"].value = ssor.date || "";
    form.elements["pressureOverWetValve"].value = ssor.pressureOverWetValve || "";
    form.elements["pressureUnderValves"].value = ssor.pressureUnderValves || "";
    form.elements["pressureOnWaterPlug"].value = ssor.pressureOnWaterPlug || "";
    form.elements["alarmToFireDepartmentWorking"].checked = ssor.alarmToFireDepartmentWorking || false;
    form.elements["comments"].value = ssor.comments || "";
    form.elements["signature"].value = ssor.signature || "";

    // Attach the SSOR ID to the form for later use
    form.setAttribute("data-ssor-id", ssorID);

    // Show the modal
    popup.showModal();
}

// Attach event listener to the form for submission
document.getElementById("add-ssor-form").addEventListener("submit", handleFormSubmit);

// Expose the `fillFormWithInformation` function for external use
export { fillFormWithInformation };
