function onGot(page) {
    page.AfunctionInBackground();
}

function onError(error) {
    console.log(`Error: ${error}`);
}
var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);

let backgroundPage = browser.extension.getBackgroundPage();

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    backgroundPage.AfunctionInBackground();

    function onGot(page) {
        page.AfunctionInBackground();
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }
    var getting = browser.runtime.getBackgroundPage();
    getting.then(onGot, onError);
});
