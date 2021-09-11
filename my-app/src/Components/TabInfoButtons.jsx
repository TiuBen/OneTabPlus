import React, { useState } from "react";
import {CSSstring} from '../tools/tools'

export default function TabInfoButtons(props) {
    const { createTime, count, restoreAll, removeAll } = props;
    const displayNone = {
        boxShadow: " rgb(221, 221, 221) 1px 1px 4px",
        backgroundColor: " rgb(255, 255, 255)",
        padding: "11px 16px 11px 18px",
        position: "absolute",
        top: "-11px",
        zIndex: "10000",
        display: "none",
    };
    const displayBlock = {
        boxShadow: " rgb(221, 221, 221) 1px 1px 4px",
        backgroundColor: " rgb(255, 255, 255)",
        padding: "11px 16px 11px 18px",
        position: "absolute",
        top: "-11px",
        zIndex: "10000",
        display: "block",
    };

    const [display, setDisplay] = useState(displayNone);
    return (
        <div style={CSSstring("padding-left: 20px;")}>
            <div style={CSSstring("display: inline-block; vertical-align: middle; padding-left: 16px;")}>
                <img
                    style={CSSstring(
                        "display: none; vertical-align: middle; width: 22px; height: 21px; position: relative; padding-right: 11px; left: -2px;"
                    )}
                    class="starImg"
                    src="images/star.png"
                />
                <img
                    style={CSSstring(
                        "display: none; vertical-align: middle; width: 14px; height: 18px; position: relative; padding-right: 19px; left: 2px;"
                    )}
                    class="lockImg"
                    src="images/lock.png"
                />
                <div
                    style={CSSstring(
                        "display: inline-block; font-size: 0px; color: rgb(68, 68, 68); font-weight: 300; vertical-align: middle;"
                    )}
                >
                    <div style={CSSstring("font-size: 0px; display: none; padding-right: 30px;")}>
                        <div
                            style={CSSstring(
                                "display: inline-block; position: relative; overflow: hidden; width: auto;"
                            )}
                        >
                            <div
                                style={CSSstring(
                                    "text-decoration: none; display: block; white-space: nowrap; font-size: 26px; font-weight: 300; overflow: hidden; width: auto;"
                                )}
                                class="tabGroupTitleText"
                            >
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={CSSstring(
                        "display: inline-block; font-size: 26px; color: rgb(119, 119, 119); font-weight: 300; vertical-align: middle;"
                    )}
                    class="tabCount"
                >
                    {count}个标签页
                </div>
                <div
                    style={CSSstring(
                        "display: inline-block; vertical-align: middle; font-size: 0px; padding-left: 28px;"
                    )}
                >
                    <div
                        style={CSSstring(
                            "font-size: 11px; font-weight: 400; color: rgb(136, 136, 136); padding-top: 0px; padding-bottom: 2px;"
                        )}
                    >
                        创建于 {new Date(createTime).toLocaleString()}
                    </div>
                    <div class="clickable restoreAllButton" onClick={restoreAll}>
                        恢复全部
                    </div>
                    <div class="clickable deleteAllButton" onClick={removeAll}>
                        删除全部
                    </div>
                    <div class="clickable shareAsWebPageButton">分享为网页</div>
                    <div
                        class="clickable moreButton"
                        onClick={() => {
                            setDisplay(display.display === displayBlock.display ? displayNone : displayBlock);
                        }}
                    >
                        更多...
                        <div style={display}>
                            <div class="clickable nameThisTabGroupButton">命名此标签页组</div>
                            <div class="clickable toggleLockTabGroupButton">锁定此标签页组</div>
                            <div class="clickable toggleStarTabGroupButton">星形标记标签页组</div>
                            <div
                                style={CSSstring(
                                    "display: inline-block; padding-bottom: 0px; font-size: 11px; white-space: pre;"
                                )}
                                class="clickable"
                            >
                                帮助
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
