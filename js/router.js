import {initializeMenuOR} from "./menuOR.js";
import {initializeMainMenu} from "./mainMenu.js";
import {initializeMenuSSOR} from "./menuSSOR.js";
import {initializeMenuEmergencyplan} from "./Emergencyplan.js";

const differentViews = {
    "#mainmenu": () => initializeMainMenu(),
    "#OR": () => initializeMenuOR(),
    "#SSOR": () => initializeMenuSSOR(),
    "#Emergencyplan": () => initializeMenuEmergencyplan(),

}

function handleViewChange() {
    let defaultView = "#mainmenu"; // default view

    if (!location.hash) {
        location.hash = defaultView; // if there is no hash, then sets the default view to #mainmenu
    } else{
        defaultView = location.hash // if there is a hash, updates the default view
    }


    const initializeView = differentViews[defaultView]; //uses the differentViews object ( the Array at the top)
                                                        // to find the appropriate function for the hash

    if (initializeView) {
       initializeView();                                //if a function exists for the current hash, execute it
    }
}



function initializeViewNavigation() {
    window.addEventListener("hashchange", handleViewChange);  //Adds an event listener which triggers
                                                                            // on hash change

    handleViewChange();// set initial view when the page is loaded


}


export {initializeViewNavigation}



