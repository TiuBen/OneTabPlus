import "./App.css";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import Calendar from "./Components/Calendar";
import Tab from "./Components/Tab";
import {_temp,sortTabsArray} from './tools/tools';


    //
    // 对数据进行次整理
    //
    // const whatIWant=[
    //     {
    //         createTime:1630774874645,
    //         tabList:[
    //             {},
    //             {},
    //             {}
    //         ]
    //     },//segment 1
    //     {},//segment 2
    //     {},//segment 3
    // ]

function App() {
    const [tabs, setTabs] = useState(_temp);

    useCallback(() => {}, []);

    useEffect(() => {
        var ws = new WebSocket("ws://localhost:3500");
        console.log(ws);
        ws.onopen = function (event) {
            console.log("WebSocket is open now.");
            console.log('ws.send(JSON.stringify({ type: "hello", content: "这是初始化WebSocket时候的首条消息" }));');
            // ws.send(JSON.stringify({ type: "hello", content: "这是初始化WebSocket时候的首条消息" }));
        };
        ws.onerror = function (event) {
            console.error("WebSocket error observed:", event);
        };
        ws.onmessage = function (event) {
            console.debug("WebSocket message received:");
            console.log(typeof event.data);
            console.log(event.data);
            var _temp2 = JSON.parse(event.data);
            console.log(`=====${typeof _temp2}`);
            console.log(_temp2);
            _temp.push(_temp2);
            // ;
            // setTabs(_temp);
        };
        ws.onclose = function (event) {
            console.log("WebSocket is closed now.");
        };

        return () => {
            setTabs([]);
        };
    }, []);




    // TODO: removeAll

    function removeAll(params) {
        console.log("test 删除全部");
    }
    function restoreAll(params) {
        console.log("test 恢复全部");
    }
    //TODO:  removeElement
    // ??    
    // ??
    // ??
    // ??
    // ??
    // ??
    // ??

    function removeElement(){
        console.log('在App中 移除这个链接,在新的Tab中打开');
    }
    return (
        <div className="App">
            {sortTabsArray(_temp).map((segment) => {
                return (
                    <Tab
                        time={segment.createTime}
                        tabList={segment.tabList}
                        removeAll={removeAll}
                        restoreAll={restoreAll}
                        removeElement={removeElement}    
                    />
                );
            })}
            <Calendar />
        </div>
    );
}

export default App;
