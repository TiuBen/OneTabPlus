import logo from "./logo.svg";
import "./App.css";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import Calendar from "./Components/Calendar";
import List from "./Components/List";
import TabElement from "./Components/TabElement";

function debounce(func, delay) {
    var timeout;
    return function (e) {
        console.log("清除", timeout, e.target.value);
        clearTimeout(timeout);
        var context = this,
            args = arguments;
        console.log("新的", timeout, e.target.value);
        timeout = setTimeout(function () {
            console.log("----");
            func.apply(context, args);
        }, delay);
    };
}

const _temp = [
    null,
    null,
    {
        id: 50,
        index: 3,
        windowId: 3,
        highlighted: true,
        active: true,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 1436,
        height: 1073,
        lastAccessed: 1629276040960,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://twitter.com/",
        title: "Twitter -- 聚焦当下 / Twitter",
        favIconUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0pJREFUWAntVk1oE1EQnnlJbFK3KUq9VJPYWgQVD/5QD0qpfweL1YJQoZAULBRPggp6kB78PQn14kHx0jRB0UO9REVFb1YqVBEsbZW2SbVS0B6apEnbbMbZ6qbZdTempqCHPAjvzcw3P5mdmfcAiquYgX+cAVwu/+5AdDMQnSPCHUhQA0hf+Rxy2OjicIvzm+qnKhito0qpb2wvJhWeJgCPP7oPELeHvdJ1VSGf3eOPnSWga0S0Qo9HxEkEusDBuNjbEca8G291nlBxmgDc/ukuIvAJxI6wr+yKCsq1ewLxQ2lZfpQLo8oQ4ZXdCkfnACrGWpyDCl+oQmVn5xuVPU102e2P3qoJkFOhzVb9S7KSnL5jJs/mI+As01PJFPSlZeFSZZoAGBRXBZyq9lk5NrC+e7pJ5en30c+JWk59pZ5vRDOuhAD381c/H/FKz1SMNgCE16rg505r5TT0uLqme93d0fbq+1SeLSeU83Ke0RHYFPGVPcjQfNDUwIa7M665+dQAEEjZoMwZMcEF9RxIDAgBQ2mCcqJ0Z0b+h4MNbZ4RnyOSDbNmE2iRk5jCNgIIckFoZAs4IgfLGrlKGjkzS16iwj6pV9I4mUvCPf73JVytH9nRJj24QHrqU8NCIWrMaGqAC+Ut/3ZzAS63cx4v2K/x/IvQBOCwWzu5KmJGwEJ5PIgeG9nQBDDcXPpFoDjJ7ThvBC6EZxXWkJG+JgAFwGM4KBAOcibeGCn8FQ/hyajXPmSk+1sACogn4hYk7OdiHDFSWipPkPWSmY6mCzIghEEuxJvcEYUvxIdhX2mvmSHDDPBF9AJRnDZTyp+P40671JYLbxiAohDxSTfQIg4oNxgPzCWPHaWQBViOf2jGqVwBaEaxGbAqOFMrp+SefC8eNhoFIY5lXzpmtnMGUB2IbU3JdIqVW9m5zcxINn/hAYKiIexdaTh4srHKORMAP0b28PNgJyGt5gvHzQVYx91QpVcwpRFl/p63HSR1DLbid1OcTpAJQOG7u+KH+aI5Qwj13IsamU5vkUSIc8uGLDa8OtoivV8U5HcydFLtT7hlSDVy2nfxI2Ibg9awuVU8IeJAOMF5m2B6jFs1tM5R9rS3GRP5uSuiihn4DzPwA7z7GDH+43gqAAAAAElFTkSuQmCC",
    },
];

function App() {
    const [tabs, setTabs] = useState(_temp);

    useCallback(() => {}, []);

    useEffect(() => {
        var ws = new WebSocket("ws://localhost:3500");
        console.log(ws);
        ws.onopen = function (event) {
            console.log("WebSocket is open now.");
            ws.send("这是初始化React时候的首条消息");
        };
        ws.onerror = function (event) {
            console.error("WebSocket error observed:", event);
        };
        ws.onmessage = function (event) {
            console.debug("WebSocket message received:");
            console.log(typeof(event.data));
            var _temp2=JSON.parse(event.data);
            console.log(`=====${typeof(_temp2)}`);
            console.log(_temp2);
            setTabs(_temp2);
        };
        ws.onclose = function (event) {
            console.log("WebSocket is closed now.");
        };

        return () => {
            setTabs([]);
        };
    }, []);

    // var TabElements=[];

    // if (Array.isArray(tabs)) {
    //     tabs.map((t) => {
    //         if (t !== null) {
    //             TabElements.push( <TabElement  value={t} />)
    //         }
    //     });
    // } else {
    // }

    return (
        <div className="App">
            {/* { TabElements.map(t=> {
                    console.log('create tab');
                return t})} */}


            {tabs.map((t) => {
                if (t !== null) {
                    return <TabElement value={t} />;
                } else {
                    return <></>;
                }
            })}

            <a class="clickable tabLink" href="https://www.zhihu.com/question/27176975">
                中国人均这么穷为何物价反而比欧美还贵很多？ - 知乎
            </a>
            <a class="clickable tabLink" href="https://www.zhihu.com/question/27176975">
                中国人均这么穷为何物价反而比欧美还贵很多？ - 知乎
            </a>
            <a class="clickable tabLink" href="https://www.zhihu.com/question/27176975">
                中国人均这么穷为何物价反而比欧美还贵很多？ - 知乎
            </a>
            <hr />
            <List />
            <Calendar />
        </div>
    );
}

export default App;
