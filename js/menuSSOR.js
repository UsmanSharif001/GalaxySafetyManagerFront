console.log("jeg er i menuSSOR")

const menuSSOR = () => {
    return `
    <a href="#udfyldSSOR" class="view-link button-style">Udfyld</a>
    <a href="#arkivSSOR" class="view-link button-style">Vis Arkiv</a>
    <a href="#instruktionSSOR" class="view-link button-style">Instruktion</a>
     <div class="back-button-container">
        <button id="back-to-mainmenu" class="button-style">Tilbage</button>
    </div>
 `
}

function menuSSORSetup() {
    console.log("Jeg er i menuSSORSetup")

    document.getElementById("content").innerHTML = menuSSOR()

    document.getElementById("back-to-mainmenu").addEventListener("click", () => {
        console.log("Navigating back to Main Menu...");
        location.hash = "#mainmenu";
    });
}

export function initializeMenuSSOR(){
    return menuSSORSetup();
}