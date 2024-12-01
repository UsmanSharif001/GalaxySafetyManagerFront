import { initializeViewNavigation } from "./router.js";

console.log("Jeg er i app.js")

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    initializeViewNavigation();
}