console.log("jeg er i menuOR")

const menuHTML = () => {
    return `
    <a href="#udfyldOR" class="view-link button-style">Udfyld</a>
    <a href="#arkivOR" class="view-link button-style">Vis Arkiv</a>
    <a href="#instruktionOR" class="view-link button-style">Instruktion</a>
 `
}

function menuORSetup() {
console.log("Jeg er i menuORSetup")

document.getElementById("content").innerHTML = menuHTML()
}

export function initializeMenuOR(){
   return menuORSetup();
}