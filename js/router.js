
const differentViews = {

}

function handleViewChange() {
    let defaultView = "#"; // default view

    if (location.hash) {
        defaultView = location.hash; // extract the hash from the URL
    }

    const initializeView = differentViews[defaultView];

    if (initializeView) {
        initializeView()
    }
}

function initializeViewNavigation() {
    window.addEventListener("hashchange", handleViewChange);

    handleViewChange();// set initial view




}


export{ initializeViewNavigation }



