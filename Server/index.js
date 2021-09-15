const { _temp } = require("/Users/shenning/Documents/GitHub/OneTabPlus/my-app/src/tools/tools.js");
const express = require("express");
var cors = require("cors");

var events = require("events");
var eventEmitter = new events.EventEmitter();

var expressWS = require("express-ws");
const { json } = require("express");
const WebSocket = require("ws");
// const { json } = require('express');
const app = express();
var appWS = expressWS(app);

app.use(cors());
const port = 3500;

app.use(express.json()); // for parsing application/json

var newTabs = [..._temp];
app.get("/tabs", (req, res) => {
    console.log("/tabs");
    if (newTabs == null) {
        res.send(JSON.stringify(_temp));
    } else {
        res.send(JSON.stringify(newTabs));
    }
});

function testEqual(t) {
    return JSON.stringify(t) == JSON.stringify(this);
}
app.post("/tabs", (req, res) => {
    var needRemoveTab = req.body;
    // console.log(needRemoveTab);
    var index = _temp.findIndex(testEqual, needRemoveTab);
    newTabs.splice(index, 1);
    // console.log("_temp.length");
    // console.log(_temp.length);
    // console.log(_temp.slice(index,1));
    // console.log(_temp[index]);
    console.log("newTabs.length");
    console.log(newTabs.length);
});

app.get("/foo", (req, res) => {
    console.log("/foo");
    res.send(JSON.stringify({ ddd: "ddd" }));
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

var aWss = appWS.getWss("/");

app.ws("/tabs", function (ws, req) {
    console.log("connect websocket sever success");
    ws.on("message", function (msg) {
        // *** help debug websocket message

        console.log("前段发来的");
        console.log(msg);
        console.log(typeof msg);
        // const _test=JSON.parse(msg)

        var updateTime =Date.now();
        // ws.send(JSON.stringify( { needUpdate: updateTime }));
        aWss.clients.forEach((client) => {
            // client.send("发给每个client");

            client.send(JSON.stringify({ 'needUpdate':updateTime }));
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
