import React, { useCallback } from "react";
import { CSSstring } from "../tools/tools";
 function TabElement(props) {
    const { value, removeElement } = props;

    return (
        <div style={CSSstring("display: table-row;")} className="tab">
            <div
                style={CSSstring(
                    "background: rgba(0, 0, 0, 0) repeating-linear-gradient(-45deg, rgb(245, 249, 255), rgb(245, 249, 255) 10px, rgb(255, 255, 255) 10px, rgb(255, 255, 255) 20px) repeat scroll 0% 0%;"
                )}
            ></div>
            <div
                style={CSSstring(
                    "display: inline-block; padding: 4px 14px 4px 55px; position: relative; font-size: 13px; word-break: break-all;"
                )}
            >
                <div
                    style={{
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        top: "5px",
                        position: "absolute",
                        left: "25px",
                        cursor: "move",
                        test: "dd",
                        "background-image": "url(" + value.favIconUrl + ")",
                        "background-size": "16px 16px",
                        // "background-position": " -144px 0px",
                    }}
                ></div>
                <a
                    class="clickable tabLink"
                    href={value.url}
                    onClick={(e) => {
                        e.preventDefault();
                        console.log('在TabElement 中的 onclick');
                        removeElement(e);
                        window.open(value.url, '_blank').focus();
                         console.log(   window.open(value.url, '_blank'));
                        

                    }}
                >
                    {value.title}
                </a>
                <img
                    style={CSSstring(
                        "position: absolute; top: 6px; left: 0px; width: 14px; height: 13px; vertical-align: middle; padding-top: 2px; visibility: hidden; cursor: pointer"
                    )}
                    src="images/cross.png"
                ></img>
            </div>
        </div>
    );
}

export default React.memo(TabElement);
