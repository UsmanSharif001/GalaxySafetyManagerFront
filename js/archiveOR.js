import {fetchAnyUrl} from "./module.js";

console.log("jeg er i archiveOR")

const operationRecordsFromDatabase = "http://localhost:8080/allOr";
const selectedOperationRecordFromDatabase = "http://localhost:8080/selectedOperationRecord/"

export async function initializeArchiveOR() {
    const queryParams = new URLSearchParams(location.hash.slice(1));
    const idParam = queryParams.get("id");

    if (idParam) {
        const selectedOperationRecord = await fetchAnyUrl(selectedOperationRecordFromDatabase + idParam)
        console.log(selectedOperationRecord)

        // todo: render details based on fetched data
        const tHead = `
        <table id="selected-OR-table">
        <thead>
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        </thead>
        `

    } else {
        const operationRecords = await fetchAnyUrl(operationRecordsFromDatabase);
        console.log(operationRecords)

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