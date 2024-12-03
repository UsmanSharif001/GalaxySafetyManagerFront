console.log("jeg er i Emergency plan");

const emergencyplanHTML = () => {
    return `
    <p> Dette er en emergency plan :)</p>
 `
}

function emergencyplanSetup() {
    console.log("Jeg er i emergencyplanSetup")

    document.getElementById("content").innerHTML = emergencyplanHTML()
}

export function initializeMenuEmergencyplan(){
    return emergencyplanSetup();
}