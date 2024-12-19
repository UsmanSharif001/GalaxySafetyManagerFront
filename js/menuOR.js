console.log("jeg er i menuOR")

const menuHTML = () => {
    return `
<header class="site-header">
    <img src="style/galaksen_logo.svg" alt="Website Header" class="header-image">
</header>
    <h1 class="page-title">Driftjournal Arrangement</h1>
    <a href="#udfyldOR" class="view-link button-style menu-button">Udfyld</a>
    <a href="#archiveOR" class="view-link button-style menu-button">Vis Arkiv</a>
    <a href="#instruktionOR" class="view-link button-style menu-button">Instruktion</a>
    <div class="back-button-container">
        <button id="back-to-mainmenu"  class="button-style secondary-button">Tilbage</button>
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