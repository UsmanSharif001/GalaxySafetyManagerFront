import {initializeMenuOR} from "./menuOR.js";
import {initializeMainMenu} from "./mainMenu.js";
import {initializeMenuSSOR} from "./menuSSOR.js";
import {initializeMenuEmergencyplan} from "./Emergencyplan.js";
import {initializeArchiveOR} from "./archiveOR.js";
import {initializeAddSSOR} from "./addSSOR.js";
import {initializeSSORArchive} from "./archivedSSOR.js";
import {initializeAddOR} from "./addOR.js";
import {initializeSSORInstruction} from "./instructionSSOR.js";
import {initializeORInstruction} from "./instructionOR.js";

const differentViews = {
    "#mainmenu": () => initializeMainMenu(),
    "#OR": () => initializeMenuOR(),
    "#SSOR": () => initializeMenuSSOR(),
    "#udfyldSSOR":() => initializeAddSSOR(),
    "#Emergencyplan": () => initializeMenuEmergencyplan(),
    "#archiveOR": () => initializeArchiveOR(),
    "#arkivSSOR":() => initializeSSORArchive(),
    "#udfyldOR": () => initializeAddOR(),
    "#instruktionSSOR": () => initializeSSORInstruction(),
    "#instruktionOR": () => initializeORInstruction()
}

function handleViewChange() {
    let defaultView = "#mainmenu"; // default view

    if (!location.hash) {
        location.hash = defaultView; // if there is no hash, then sets the default view to #mainmenu
    } else {
        defaultView = location.hash.match(/^#\w+/)[0] // if there is a hash, updates the default view, ignore query params
    }

    const initializeView = differentViews[defaultView]; //uses the differentViews object ( the Array at the top)
                                                        // to find the appropriate function for the hash

    if (initializeView) {
        console.log("Initialized view for", defaultView)
       initializeView();                                //if a function exists for the current hash, execute it
    }else{
        console.log("Found no view", defaultView)
    }
}

function initializeViewNavigation() {
    window.addEventListener("hashchange", handleViewChange);  //Adds an event listener which triggers
                                                                            // on hash change

    handleViewChange();// set initial view when the page is loaded


}

export {initializeViewNavigation}



