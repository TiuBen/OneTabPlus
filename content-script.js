document.addEventListener("DOMContentLoaded", function () {
    console.log("content script 中的 我被执行了！");
});

browser.runtime.onMessage.addListener((request) => {
    console.log("Message from the background script:");
    console.log(request.greeting);
    return Promise.resolve({ response: "Hi from content script" });
});

function handleResponse(message) {
    console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
    console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
    var sending = browser.runtime.sendMessage({
        greeting: "Greeting from the content script",
    });
    sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);

function notifyBackgroundPage2(e) {
    var sending = browser.runtime.sendMessage({
        greeting: "这个网页要关闭了",
    });
    sending.then(handleResponse, handleError);
    window.alert("Hello world!");
    alert("Hello world!");
    e.preventDefault();
}
window.addEventListener("onclose", notifyBackgroundPage2);
