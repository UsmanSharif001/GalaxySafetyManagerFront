console.log("jeg er i menuSSOR")

const menuSSOR = () => {
    return `
<header class="site-header">
    <img src="style/galaksen_logo.svg" alt="Website Header" class="header-image">
</header>
    <h1 class="page-title">Driftjournal Sprinklersystem</h1>
    <a href="#udfyldSSOR" class="view-link button-style menu-button">Udfyld</a>
    <a href="#arkivSSOR" class="view-link button-style menu-button">Vis Arkiv</a>
    <a href="#instruktionSSOR" class="view-link button-style menu-button">Instruktion</a>
     <div class="back-button-container">
        <button id="back-to-mainmenu" class="button-style secondary-button">Tilbage</button>
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