function CSSstring(string) {
    const css_json = `{"${string.replace(/; /g, '", "').replace(/: /g, '": "').replace(";", "")}"}`;

    const obj = JSON.parse(css_json);

    const keyValues = Object.keys(obj).map((key) => {
        var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
        return { [camelCased]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

export default function TabElement(props) {
    console.log('TabElement props');
    console.log(props);

    return (
        // <div className="tab-element">
        //     <img src={props.value.favIconUrl} style={{ width: "15px", height: "15px" }}></img>
        //     <div style={{ display: "inline-block" }}>
        //         <a className="clickable tabLink" href={props.value.url}>
        //             {props.value.title}
        //         </a>
        //     </div>
        // </div>

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
                            test:'dd',
                            'background-image':'url('+props.value.favIconUrl+')',
                            "background-size": "16px 16px",
                            // "background-position": " -144px 0px",
                        }}
                    >
                     
                    </div>
                    <a
                        style={CSSstring("padding-right: 12px; text-decoration: none")}
                        class="clickable tabLink"
                        href={props.value.url}
                    >
                        {props.value.title}
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
