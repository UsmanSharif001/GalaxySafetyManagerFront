console.log("jeg er i menuSSOR")

const menuSSOR = () => {
    return `
    <a href="#udfyldSSOR" class="view-link button-style">Udfyld</a>
    <a href="#arkivSSOR" class="view-link button-style">Vis Arkiv</a>
    <a href="#instruktionSSOR" class="view-link button-style">Instruktion</a>
 `
}

function menuSSORSetup() {
    console.log("Jeg er i menuSSORSetup")

    document.getElementById("content").innerHTML = menuSSOR()
}

export function initializeMenuSSOR(){
    return menuSSORSetup();
}