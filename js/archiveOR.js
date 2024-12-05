console.log("jeg er i archiveOR")

const contentHTML = () => {
    return `
    <table>
        <thead>
            <tr>
                <th>Dato</th>
                <th>Initialer</th>
                <th>Bemærkninger</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/11/2024</td>
                <td>TLS</td>
                <td>Nødbelysning virker ikke</td>
            </tr>
            <tr>
                <td>20/11/2024</td>
                <td>EB</td>
                <td></td>
            </tr>
            <tr>
                <td>19/11/2024</td>
                <td>ZLY</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `
}

function render() {
    document.getElementById("content").innerHTML = contentHTML()
}

export function initializeArchiveOR(){
    return render();
}