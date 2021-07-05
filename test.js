console.log("test js 载入了 ");

var myPort = browser.runtime.connect({ name: "TestMyTab" });

myPort.onMessage.addListener(function (m) {
    console.log("In content script, received message from background script: ");
    console.log(m.greeting);
});

//
function MakeURLDom(urls, parentDom) {
    for (let index = 0; index < urls.length; index++) {
        const oneTab = urls[index];
        var oneTag = document.createElement("div");
        oneTag.innerHTML = `<a href="${oneTab.url}" title="${oneTab.title}" target="">${oneTab.title}</a>`;
        parentDom.appendChild(oneTag);
    }
}

browser.runtime.onMessage.addListener(async (request) => {
    console.log("Message from the background script:");
    // console.log(request);

    // 假装添加一个条目
    var container = document.getElementById("container");
   

    // 要从storage 中获取 数据了
 await   browser.storage.local.get().then((i) => {
        console.log("要从storage 中获取 数据了");
        console.log(i);

        MakeURLDom(i.allTabUrl, container);
    });
    var separator = document.createElement("div");
    separator.innerHTML = "+++++++++++++++++++";
    container.appendChild(separator);
    // if (request.allTabUrl) {
    //     // console.log(request.allTabUrl);
    //     // for (let index = 0; index < request.allTabUrl.length; index++) {
    //     //     const oneTab = request.allTabUrl[index];
    //     //     var oneTag = document.createElement("div");
    //     //     oneTag.innerHTML = `<a href="${oneTab.url}" title="${oneTab.title}" target="">${oneTab.title}</a>`;
    //     //     container.appendChild(oneTag);
    //     // }

    //     MakeURLDom(request.allTabUrl,container);

    // } else {
    //     var oneTag = document.createElement("div");
    //     oneTag.innerHTML = JSON.stringify(request); // request.greeting;
    //     container.appendChild(oneTag);
    // }

    return Promise.resolve({ response: "Hi from content script" });
});
//
// console.log(document);

// this.document.addEventListener('onclose', function (e) {
//     window.alert("Hello world!");
//     alert("Hello world!");
//     e.preventDefault();
//     e.returnValue = '';

// });

// function onGot(page) {
//     page.AfunctionInBackground();
// }

// function onError(error) {
//     console.log(`Error: ${error}`);
// }
// var getting = browser.runtime.getBackgroundPage();
// getting.then(onGot, onError);

// let p = document.createElement("p");
// p.textContent = "This paragraph was added by a page script.";
// p.setAttribute("id", "page-script-para");
// document.body.appendChild(p);

// // define a new property on the window
// window.foo = "This global variable was added by a page script";

// // redefine the built-in window.confirm() function
// window.confirm = function () {
//     alert("The page script has also redefined 'confirm'");
// };
