import "./App.css";
import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import Calendar from "./Components/Calendar";
import Tab from "./Components/Tab";
import { _temp, sortTabsArray } from "./tools/tools";

// !!!!! 新的方法
// !!!!! 尝试用 fetch 结合 websocket
// !!!!! 每次用fetch 从后端获取 数据
// !!!!! websocket 来通知 要用fetch获取 数据


function App() {
    const [tabs, setTabs] = useState([]);
    const [needFetch, setNeedFetch] = useState("something new ");

    const fetchTabsFromServer = async () => {
        console.log("fetchTabsFromServer");
        var _tabs = await fetch("http://localhost:3500/tabs")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                return sortTabsArray(json);
            });
        console.log("end .....fetchTabsFromServer");
        return _tabs;
    };

    const fetchData = useCallback(async () => {
        console.log("const fetchData = useCallback");
        var value = await fetchTabsFromServer();
        console.log("setTabs(value)");
        console.log(value);
        setTabs(value);
    }, [tabs,needFetch]);

    // const listenChanges = useCallback(() => {
    //     console.log("listenChanges=useCallback");
    //     ws.onmessage = function (event) {
    //         console.debug("listenChanges=useCallback WebSocket message received:");
    //         console.log(typeof event.data);
    //         console.log(JSON.parse(event.data));
    //         setNeedFetch((JSON.parse(event.data)).needUpdate);
    //     };
    // }, []);

    useEffect(() => {
        console.log("execute function in useEffect");
        fetchData();
        // listenChanges();
    }, [needFetch]);

    function removeAll(params) {
        console.log("test 删除全部");
    }
    function restoreAll(params) {
        console.log("test 恢复全部");
    }
    function changeNeedFetch(params){
        console.log('changeNeedFetch');
        setNeedFetch(params)
    }

    // function removeElement() {
    //     console.log("在App中 移除这个链接,在新的Tab中打开");
    // }

    // const _removeElement = useCallback((e) => {
    //     console.log("在App中 移除这个链接,在新的Tab中打开");
    // }, []);

    return (
        <div className="App">
            {tabs.map((segment, index) => {
                return (
                    <Tab
                        key={index}
                        time={segment.createTime}
                        tabList={segment.tabList}
                        removeAll={removeAll}
                        restoreAll={restoreAll}
                        // removeElement={removeElement}
                        // removeElement={(e)=>_removeElement(e)}
                        // ws={ws}
                        changeNeedFetch={changeNeedFetch}
                    />
                );
            })}
            <Calendar />
        </div>
    );
}

export default App;


