import {fetchAnyUrl} from "./module.js";

console.log("jeg er i archiveOR")

const operationRecordsFromDatabase = "http://localhost:8080/allOr";

export async function initializeArchiveOR(){
    const operationRecords = await fetchAnyUrl(operationRecordsFromDatabase);
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
    const tTail = `
    </tbody>
    </table>`
    let tBody = "";
    operationRecords.forEach(operationRecord => {
        const tableRow = `
        <tr>
    <td>${operationRecord.dateTime}</td>
    <td>${operationRecord.signature}</td>
    <td>${operationRecord.errorDescription ? operationRecord.errorDescription : "–"}</td>
        `
        tBody += tableRow;
        }
    )
    document.getElementById("content").innerHTML = tHead + tBody + tTail;
}