function createMyOneTabMenus() {
    browser.contextMenus.create({
        id: "0",
        title: "显示MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "1",
        title: "发送全部标签至MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "separator-0",
        type: "separator",
        contexts: ["all"],
    });

    browser.contextMenus.create({
        id: "2",
        title: "仅发送此标签MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "3",
        title: "发送除此标签页以外的全部标签页至MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "4",
        title: "发送左侧标签页至MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "5",
        title: "发送右侧标签页至MySortTab",
        contexts: ["all"],
    });
    browser.contextMenus.create({
        id: "separator-1",
        type: "separator",
        contexts: ["all"],
    });

    browser.contextMenus.create({
        id: "6",
        title: "在MySortTab排除此标签页",
        contexts: ["all"],
    });
}
createMyOneTabMenus();
//
const webSocket = new WebSocket("ws://localhost:3500");
function wsPost(info) {
   webSocket.send(JSON.stringify(info));
}

var OneTab;
var OneTabID;

browser.contextMenus.onShown.addListener(async (info, tab) => {
    console.log(`onShown onShown onShown`);

    console.log("info");
    console.log(info);

    console.log("tab");
    console.log(tab);

    if (tab.id === OneTabID) {
        browser.contextMenus.update("0", { enabled: false });
        browser.contextMenus.update("2", { enabled: false });
        browser.contextMenus.update("6", { enabled: false });
    } else {
        browser.contextMenus.update("0", { enabled: true });
        browser.contextMenus.update("2", { enabled: true });
        browser.contextMenus.update("6", { enabled: true });
    }

    var allTabs;
    await browser.tabs.query({ currentWindow: true }).then((value) => {
        allTabs = value;
    });
    var currentTab;
    var currentTabIndex;
    await browser.tabs.query({ currentWindow: true, active: true }).then((value) => {
        currentTab = value;
        currentTabIndex = currentTab[0].index;
    });
    var otherTabs;
    await browser.tabs.query({ currentWindow: true, active: false }).then((value) => {
        otherTabs = value;
    });

    var leftTabs = allTabs.slice(0, currentTabIndex);
    var rightTabs = allTabs.slice(currentTabIndex + 1);
    // console.log("allTabs");
    //  console.log(allTabs);
    //  console.log("currentTab");
    //  console.log(currentTab);
    // console.log("leftTabs");
    //  console.log(leftTabs);
    // console.log("rightTabs");
    // console.log(rightTabs);

    if (leftTabs.length === 0) {
        browser.contextMenus.update("4", { enabled: false });
    } else {
        browser.contextMenus.update("4", { enabled: true });
    }
    if (rightTabs.length === 0) {
        browser.contextMenus.update("5", { enabled: false });
    } else {
        browser.contextMenus.update("5", { enabled: true });
    }
    browser.contextMenus.refresh();

    //
    //
    function handleResponse(message) {
        console.log(`Message from the background script:  ${message.response}`);
    }

    function handleError(error) {
        console.log(`Error: ${error}`);
    }

    // var sending = browser.runtime.sendMessage({
    //     greeting: "Greeting from the content script",
    // });
    // sending.then(handleResponse, handleError);
});

function onRemoved() {
    console.log(`Removed`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}
function removeTabs(tabs = []) {
    console.log("removeTabs");
    console.log(typeof tabs);
    console.log(tabs);
    tabs.forEach((tab) => {
        //
        wsPost(tab);
        //
        browser.tabs.remove(tab.id).then(onRemoved, onError);
    });
}

browser.contextMenus.onClicked.addListener(async (info, tab) => {
    console.log(`Clicked at ${info} in tab at index ${tab.index}`);
    console.log(info);
    console.log(tab);

    var allTabs;
    await browser.tabs.query({ currentWindow: true }).then((value) => {
        allTabs = value;
    });
    var currentTab;
    var currentTabIndex;
    await browser.tabs.query({ currentWindow: true, active: true }).then((value) => {
        currentTab = value;
        currentTabIndex = currentTab[0].index;
    });

    var otherTabs; // 当前窗口,除现在正在打开的tab,之外的tabs
    await browser.tabs.query({ currentWindow: true, active: false }).then((value) => {
        otherTabs = value;
    });

    var leftTabs = allTabs.slice(0, currentTabIndex); // 此标签左侧的tabs
    var rightTabs = allTabs.slice(currentTabIndex + 1); // 此标签右侧的tabs

    if (info.menuItemId === "0") {
        if (OneTab) {
            console.log("One Tab 已经存在,打开就好!");
            browser.tabs.update(OneTabID, { active: true });
            return;
        } else {
            console.log("创建One Tab主页");
            var creating = browser.tabs.create({
                url: " http://localhost:3000/",
            });
            function onCreated(tab) {
                console.log("one tab 创建好了");
                console.log(`Created new tab: ${tab.id}`);
                OneTab = tab;
                OneTabID = tab.id;
                console.log(OneTab);
            }
            function onError(error) {
                console.log(`Error: ${error}`);
            }
            creating.then(onCreated, onError);
        }
    }
    if (info.menuItemId === "1") {
        //  发送全部标签至MySortTab
        console.log("发送全部标签至MySortTab");
        removeTabs(allTabs);
    }
    if (info.menuItemId === "2") {
        //  仅发送此标签MySortTab
        console.log("仅发送此标签MySortTab");
        removeTabs(currentTab);
    }
    if (info.menuItemId === "3") {
        //  发送除此标签页以外的全部标签页至MySortTab
        var allTabUrl = [];
        removeTabs(otherTabs);
    }
    if (info.menuItemId === "4") {
        //  发送左侧标签页至MySortTab
        var allTabUrl = [];
        removeTabs(leftTabs);
    }
    if (info.menuItemId === "5") {
        //  发送右侧标签页至MySortTab
        var allTabUrl = [];
        removeTabs(rightTabs);
    }
});

//
function handleMessage(request, sender, sendResponse) {
    console.log("Message from the content script: " + request.greeting);
    sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);

// 监听每一个tab 建立
// 在tab流浪的网页变化后 继续监听新的网页
function handleCreated(tab) {
    console.log(`新tab ${tab.id}`);
    console.log(tab);
}

browser.tabs.onCreated.addListener(handleCreated);

const filter = {
    properties: [
        // "status",
        // "attention",
        // "audible",
        // "discarded",
        "favIconUrl",
        // "hidden",
        "isArticle",
        // "mutedInfo",
        // "pinned",
        // "sharingState",
        "status",
        "title",
        "url",
    ],
};

function postToServer(url,tabId, changeInfo, info) {
    fetch(`http://localhost:3500/${url}`, {
        method: "POST", // or 'PUT'
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
        body: JSON.stringify(info),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function debounce(func, delay) {
    console.log("debounce");

    let timeout;
    return function (e) {
        clearTimeout(timeout);
        let args = arguments;
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function throttle(callback, wait = 300, ...params) {
    console.log("throttle");

    let timer = 0;
    return function (eventParam) {
        if (timer) return;
        timer = setTimeout(() => {
            timer = 0;
            callback.call(this, eventParam, ...params);
        }, wait);
    };
}

function handleUpdated(tabId, changeInfo, tabInfo) {
    postToServer('',tabId, changeInfo, tabInfo);
}

// browser.tabs.onUpdated.addListener(handleUpdated, filter);
