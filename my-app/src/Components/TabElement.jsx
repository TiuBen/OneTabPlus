import React, { useCallback } from "react";
import { CSSstring } from "../tools/tools";
export default function TabElement(props) {
    const { value,ws, changeNeedFetch} = props;

 
    // const _ws = new WebSocket("ws://localhost:3500/tabs");

    return (
        <div className="tab">
            <div></div>
            <div>
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
                    }}
                ></div>
                <a
                    className="clickable tabLink"
                    href={value.url}
                    onClick={(e) => {
                        e.preventDefault();
                        // removeElement(e);
                        console.log("在TabElement 中的 onclick");
                        // _ws.send(JSON.stringify({ 'title':"value.url"}));
                        console.log(ws);
                        // ws.send(JSON.stringify({ 'title':"value.url"}));
                        
                        fetch("http://localhost:3500/tabs",{
                            method:"POST",
                            body: JSON.stringify(value),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            }),
                            mode:'cors'
                        })
                        changeNeedFetch(Date.now());
                        // window.open(value.url, "_blank").focus();
                    }}
                >
                    {value.title}
                </a>
                <img className="crossImg" src={process.env.PUBLIC_URL + "/images/cross.png"}></img>
            </div>
        </div>
    );
}

