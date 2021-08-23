import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import moment from "moment";
export default function Calendar(props) {
    var detailTime = new Date();
    var days = moment().daysInMonth();
    var elements = [];

    const [elementWidth, setElementWidth] = useState(0);
    const left = (elementWidth - 10) / (days + 0);

    console.log(days);
    useLayoutEffect(() => {
        const _containerWidth = document.getElementById("root").clientWidth;
        const _yearWidth = document.getElementById("year").clientWidth;
        const _monthWidth = document.getElementById("month").clientWidth;
        const _detailTimeWidth = document.getElementById("detailTime").clientWidth;

        var _temp = _containerWidth - _yearWidth - _monthWidth - _detailTimeWidth - 30;
        setElementWidth(_temp);
    }, []);

    for (let index = 0; index < days; index++) {
        const day = (
            <button className="v-line dark-1000" style={{ position: "relative", width: `${left}px` }} key={index}>
                {index + 1}
            </button>
        );
        elements.push(day);
    }

    return (
        <div id="container">
            <button id="year">Year</button>
            <button id="month">Month</button>
            {elements}
            <button id="detailTime">{detailTime.toISOString()}</button>
        </div>
    );
}
