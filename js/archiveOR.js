import {fetchAnyUrl, restDelete} from "./module.js";
import {addORHtml} from "./forms.js";

const operationRecordsPath = "http://localhost:8080/allOr";
const selectedOperationRecordPath = "http://localhost:8080/selectedOperationRecord/"
const deleteOperationRecordPath = "http://localhost:8080/deleteOperationRecord/"

export async function initializeArchiveOR() {
    const queryParams = new URLSearchParams(location.hash.slice(1));
    const idParam = queryParams.get("id");

    if (idParam) {
        const selectedOperationRecord = await fetchAnyUrl(selectedOperationRecordPath + idParam)
        // render details based on fetched data
        document.getElementById("content").innerHTML = addORHtml(selectedOperationRecord);
        const deleteButton = document.getElementById("deleteButton")
        deleteButton.addEventListener("click", () => handleDelete(idParam))
    } else {
        const operationRecords = await fetchAnyUrl(operationRecordsPath);

        const tHead = `
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
                const tableRow = `
        <tr onclick="document.location = '#archiveOR&id=${operationRecord.orId}'">
            <td>${operationRecord.dateTime}</td>
            <td>${operationRecord.signature}</td>
            <td>${operationRecord.errorDescription ? operationRecord.errorDescription : "–"}</td>
        </tr>
        `
                tBody += tableRow;
            }
        )

        const tTail = `
    </tbody>
    </table>`

        document.getElementById("content").innerHTML = tHead + tBody + tTail;
    }
}

function handleDelete(id) {
    restDelete(deleteOperationRecordPath + id)
        .then(() => location.hash = "#archiveOR");
}