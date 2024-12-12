console.log("jeg er i menuOR")

const menuHTML = () => {
    return `
    <a href="#udfyldOR" class="view-link button-style">Udfyld</a>
    <a href="#archiveOR" class="view-link button-style">Vis Arkiv</a>
    <a href="#instruktionOR" class="view-link button-style">Instruktion</a>
    <div class="back-button-container">
        <button id="back-to-mainmenu"  class="button-style">Tilbage</button>
    </div>
 `
}

function menuORSetup() {
console.log("Jeg er i menuORSetup")

document.getElementById("content").innerHTML = menuHTML()
    document.getElementById("back-to-mainmenu").addEventListener("click", () => {
        console.log("Navigating back to Main Menu...");
        location.hash = "#mainmenu";
    });
}

export function initializeMenuOR(){
   return menuORSetup();
}