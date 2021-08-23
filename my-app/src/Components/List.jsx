import React, { useState } from "react";
import data from "../data.js";

export default function List() {
    const [browserData, setBrowserData] = useState(data);

    return (
        <>
            {browserData.map((x) => {
                return (
                    <div class="tab">
                        <div></div>
                        <div>
                            <div></div>
                            <a className="clickable tabLink" href={x.url}>
                             {x.title}
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );
}


