import {fetchAnyUrl, restDelete, restPut} from "./module.js";
import {addORHtml} from "./forms.js";

const operationRecordsPath = "http://localhost:8080/allOr";
const selectedOperationRecordPath = "http://localhost:8080/selectedOperationRecord/"
const deleteOperationRecordPath = "http://localhost:8080/deleteOperationRecord/"
const updateOperationRecordPath = "http://localhost:8080/updateOperationRecord/"

export async function initializeArchiveOR() {
    const queryParams = new URLSearchParams(location.hash.slice(1));
    const idParam = queryParams.get("id");
    const editParam = queryParams.get("edit");
    const editable = editParam === "true";

    if (idParam) {
        const selectedOperationRecord = await fetchAnyUrl(selectedOperationRecordPath + idParam)
        // render details based on fetched data
        document.getElementById("content").innerHTML = addORHtml(selectedOperationRecord, editable);
        if (!editable) {
            const editButton = document.getElementById("editButton")
            editButton.addEventListener("click", () => window.scrollTo(0, 0))
            const deleteButton = document.getElementById("deleteButton")
            deleteButton.addEventListener("click", () => handleDelete(idParam))
        } else {
            // Edit mode
            const cancelButton = document.getElementById("cancelButton")
            cancelButton.addEventListener("click", () => window.scrollTo(0, 0))
            const form = document.getElementById("postOR");
            form.addEventListener("submit", (event) => handleSave(event, idParam));
        }
    } else {
        const operationRecords = await fetchAnyUrl(operationRecordsPath)
        ;

        const tHead = `
<h1 class="page-title">Arkiv: Driftjournal Arrangement</h1>
<table id="OR-archive-table">
 <thead>
 <tr>
 <th>Dato</th>
 <th>Initialer</th>
 <th>Bemærkninger</th>
 </tr>
 </thead>
 <tbody>
    `;

        let tBody = "";
        operationRecords.forEach(operationRecord => {
                const dateSegments = operationRecord.dateTime.split("-");
                const tableRow = `
        <tr onclick="document.location = '#archiveOR&id=${operationRecord.orId}'">
            <td>${dateSegments[2]}-${dateSegments[1]}-${dateSegments[0]}</td>
            <td>${operationRecord.signature}</td>
            <td class="error-description">${operationRecord.errorDescription ? operationRecord.errorDescription : "–"}</td>
        </tr>
        `
                tBody += tableRow;
            }
        )

        const tTail = `

    </tbody>
    
    
    </table>
 <div class="back-button-container">
        <button id="back-to-ORmenu" class="button-style secondary-button">Tilbage</button>
    </div>`


        document.getElementById("content").innerHTML = tHead + tBody + tTail;
        document.getElementById("back-to-ORmenu").addEventListener("click", () => {
            console.log("Navigating back to OR menu");
            location.hash = "#OR";
        });
    }
}

function handleDelete(id) {
    restDelete(deleteOperationRecordPath + id)
        .then(() => location.hash = "#archiveOR");
}

function handleSave(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    restPut(updateOperationRecordPath + id, Object.fromEntries(formData.entries()))
        .then(() => alert("Ændringerne er gemt"))
        .then(() => location.hash = "#archiveOR");
}
