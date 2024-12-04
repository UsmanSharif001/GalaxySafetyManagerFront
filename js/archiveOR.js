console.log("jeg er i archiveOR")

const contentHTML = () => {
    return `
        <div>"Hello"</div>
    `
}

function render() {
    document.getElementById("content").innerHTML = contentHTML()
}

export function initializeArchiveOR(){
    return render();
}