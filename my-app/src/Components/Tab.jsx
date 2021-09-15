import React, { useCallback } from "react";
import TabInfoButtons from "./TabInfoButtons";
import TabElement from "./TabElement";
import "./Tab.css";
import { CSSstring } from "../tools/tools";

export default function Tab(props) {
    const { time, tabList, removeAll, restoreAll,removeElement,ws,changeNeedFetch } = props;

    // const elementClick = useCallback(
    //     (e) => {
    //         console.log("在Tab中的 onClick");
    //         removeElement(e);
    //     },
    //     [0]
    // );



    return (
        <div class="tabGroup">
            <TabInfoButtons createTime={time} count={tabList.length} removeAll={removeAll} restoreAll={restoreAll} />
            <div class="tabList">
                {tabList.map((t, index) => {
                    // return <TabElement value={t} key={index} removeElement={(e)=> elementClick(e)}  ws={ws} />;
                    return <TabElement value={t} key={index} ws={ws} changeNeedFetch={changeNeedFetch}/>;
                    // return <TabElement value={t} key={index} removeElement={removeElement} />;

                })}
            </div>
            <div style={CSSstring("height: 19px; padding-left: 12px;")}>
                <div
                    style={CSSstring(
                        "background: rgba(0, 0, 0, 0) repeating-linear-gradient(-45deg, rgb(245, 249, 255), rgb(245, 249, 255) 10px, rgb(255, 255, 255) 10px, rgb(255, 255, 255) 20px) repeat scroll 0% 0%;"
                    )}
                ></div>
            </div>
        </div>
    );
}
