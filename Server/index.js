const express = require("express");
var cors = require("cors");

var events = require("events");
var eventEmitter = new events.EventEmitter();

var expressWS = require("express-ws");
const WebSocket = require("ws");
const app = express();
var appWS = expressWS(app);

app.use(cors());
const port = 3500;

app.use(express.json()); // for parsing application/json


app.get("/", (req, res) => {
    res.send("Hello World!");
});

const socket = new WebSocket("ws://localhost:3500");
var allTabs = [];
allTabs.length=100;

app.post("/", function (req, res) {
    console.log(req.body);
    // MyBrowserData.push(req.body);
    var tab = req.body;
    if (tab.id !== null) {
        if (typeof tab.id === "number") {
            allTabs[tab.id] = tab;
        } else {
        }
    } else {
    }

    eventEmitter.emit("PostReact", allTabs);

    res.send(JSON.stringify(allTabs));
});

app.ws("/", function (ws, req) {
    ws.on("message", function (msg) {
        console.log(msg);
        // ws.send( JSON.stringify(somethingNeedWebSocketSendToReact))
    });
    eventEmitter.on("PostReact", function (arg1) {
        // ws.send("background提交了数据,传给前端部分数据");
        ws.send(JSON.stringify(arg1));
        // ws.send(somethingNeedWebSocketSendToReact)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



