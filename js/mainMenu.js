console.log("Jeg er i mainMenu")


//sets up the html structure as a string. pay attention to the ``
const mainMenuHTML = () => {
    return `
<header class="site-header">
    <img src="style/galaksen_logo.svg" alt="Website Header" class="header-image">
</header>
    <h1 class="page-title">Brandsikkerhedsportal v0.1</h1>
    <a href="#OR" class="view-link button-style menu-button">Driftjournal Arrangement</a>
    <a href="#SSOR" class="view-link button-style menu-button">Driftjournal Sprinkleranlæg</a>
    <a href="#Emergencyplan" class="view-link button-style menu-button">Evarkueringsplan</a>
 `
}

//Updates the DOM to display the main menu inside the container element with "content" - from the index.html
function mainMenuSetup() {
    console.log("Jeg er i mainMenuSetup")

    document.getElementById("content").innerHTML = mainMenuHTML()
}

//Exports the function, so it can be used in the router
export function initializeMainMenu() {
    mainMenuSetup()
}



