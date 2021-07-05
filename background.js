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
    var otherTabs;
    await browser.tabs.query({ currentWindow: true, active: false }).then((value) => {
        otherTabs = value;
    });

    var leftTabs = allTabs.slice(0, currentTabIndex);
    var rightTabs = allTabs.slice(currentTabIndex + 1);

    if (info.menuItemId === "0") {
        if (OneTab) {
            console.log("One Tab 已经存在,打开就好!");
            browser.tabs.update(OneTabID, { active: true });
            return;
        } else {
            console.log("创建One Tab主页");
            var creating = browser.tabs.create({
                url: "test.html",
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
        var allTabUrl = [];
        allTabs.forEach((tab) => {
            allTabUrl.push({ title: tab.title, url: tab.url });
        });
        // browser.tabs.sendMessage(OneTabID, {
        //     allTabUrl,
        // });
    }
    if (info.menuItemId === "2") {
        //  仅发送此标签MySortTab
        console.log("仅发送此标签MySortTab");
        var allTabUrl = [];
        allTabUrl.push({ title: currentTab[0].title, url: currentTab[0].url });
        // browser.tabs.sendMessage(OneTabID, {
        //     allTabUrl,
        // });
    }
    if (info.menuItemId === "3") {
        //  发送除此标签页以外的全部标签页至MySortTab
        var allTabUrl = [];
        otherTabs.forEach((tab) => {
            allTabUrl.push({ title: tab.title, url: tab.url });
        });
        // browser.tabs.sendMessage(OneTabID, {
        //     allTabUrl,
        // });
    }
    if (info.menuItemId === "4") {
        //  发送左侧标签页至MySortTab
        var allTabUrl = [];
        leftTabs.forEach((tab) => {
            allTabUrl.push({ title: tab.title, url: tab.url });
        });
        // browser.tabs.sendMessage(OneTabID, {
        //     allTabUrl,
        // });
    }
    if (info.menuItemId === "5") {
        //  发送右侧标签页至MySortTab
        var allTabUrl = [];
        rightTabs.forEach((tab) => {
            allTabUrl.push({ title: tab.title, url: tab.url });
        });

    }

    if (allTabUrl.length !== 0) {
        console.log("allTabUrl");
        console.log(allTabUrl);
        browser.tabs.sendMessage(OneTabID, { allTabUrl }, function () {
            console.log(" browser.tabs.sendMessage()以后的response ");
        });
    } else {
        console.error("something wrong");
    }
    browser.storage.local.set({ allTabUrl });
    console.log("background log allTabs>>>>");
    console.log(allTabs);
});

//
// test storage

const fooData = [
    {
        url: "https://www.douban.com/",
        title: "豆瓣的链接",
    },
    {
        url: "https://www.bilibili.com",
        title: "哔哩哔哩的链接",
    },
];

browser.storage.local.set({
    kitten: { name: "Mog", eats: "mice" },
    monster: { name: "Kraken", eats: "people" },
});

browser.storage.local.get().then((i) => {
    console.log(i);
});

//

//
let SomethingInBackground = ["bc1", "bc2", "bc3"];
function AfunctionInBackground() {
    console.log("在background中定义的function");
}

function SendMessageToExtensionPage() {
    console.log("SendMessageToExtensionPage");
    var myPort = browser.runtime.connect({ name: "port-from-cs" });

    myPort.postMessage({ greeting: "hello from back " });
}

var cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
var CAKE_INTERVAL = 0.1;

browser.alarms.create("", { periodInMinutes: CAKE_INTERVAL });

// browser.alarms.onAlarm.addListener(function (alarm) {
//     browser.notifications.create(cakeNotification, {
//         type: "basic",
//         iconUrl: browser.runtime.getURL("icons/chillout-48.png"),
//         title: "Time for cake!",
//         message: "Something something cake",
//     });
// });

// browser.browserAction.onClicked.addListener(() => {
//     var clearing = browser.notifications.clear(cakeNotification);
//     clearing.then(() => {
//         console.log("cleared");
//     });
// });

function handleMessage(request, sender, sendResponse) {
    console.log("Message from the content script: " + request.greeting);
    sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
