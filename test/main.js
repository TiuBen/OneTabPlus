import data from "../data.js";
// var moment = require('moment');

console.log("开始测试文件");

function FromDataMakeTabs(data) {
    // console.log(data);
    data.forEach((tab) => {
        var oneT = document.createElement("div");
        oneT.innerHTML = `<div style="background: rgba(0, 0, 0, 0) repeating-linear-gradient(-45deg, rgb(245, 249, 255), rgb(245, 249, 255) 10px, rgb(255, 255, 255) 10px, rgb(255, 255, 255) 20px) repeat scroll 0% 0%;"></div><div style="display: inline-block; padding: 4px 14px 4px 55px; position: relative; font-size: 13px; word-break: break-all;"><div style="display: inline-block; width: 16px; height: 16px; top: 5px; position: absolute; left: 25px; cursor: move; background-size: 512px 512px; background-position: -384px -80px; background-image: url(&quot;images/iconGrid.webp&quot;);"></div><a style="padding-right: 12px; text-decoration: none;" class="clickable tabLink" href="${tab.url}">${tab.title}</a><img style="position: absolute; top: 6px; left: 0px; width: 14px; height: 13px; vertical-align: middle; padding-top: 2px; visibility: hidden; cursor: pointer;" src="images/cross.png"></div>`;

        const tabGroup = document.getElementById("container");

        tabGroup.appendChild(oneT);
    });
}
FromDataMakeTabs(data);


//

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  


// 监听 滚轮事件

const years = document.getElementById("test-mousescroll").children;
var initWidth = 1;

//   全局变量 
//   系统的缩放等级
var  RATIO_X=0.0;
var  RATIO_Y=0.0;
var  SLOTS={ 
    'minuit_5':5,
    'minuit_15':10,
    'minuit_30':20,
    'hour_1':30,
    'hour_3':40,
    'hour_6':50,
    'hour_12':60,
    'day':70,
};
var  selectedSlot;


// 先获取当前时间
// 以当前时间为中心 展示 当天24小时  一个月30天 12个月

const CONTAINER_NAME = "detail-time-container";
const ContainerWidth = document.getElementById("test-mousescroll").clientWidth;
console.log(`ContainerWidth:${ContainerWidth}px`);

const HourWidth=ContainerWidth/24;
const CurrentMonthDays=moment().daysInMonth();
const DaysWidth=ContainerWidth/(CurrentMonthDays+5);
console.log(`DaysWidth${DaysWidth}px`)
var ElementCount={ 
    'minuit_5':12,
    'minuit_15':4,
    'minuit_30':2,
    'hour_1':24,
    'hour_3':8,
    'hour_6':4,
    'hour_12':2,
    'week':7,
    'day':CurrentMonthDays,
};


//   当前选择的时间
var selectedTime=new Date();

//   全局变量

var debug= document.getElementById('debug');
function updateDebug() {
    var Ratio=document.createElement('div');
    Ratio.innerHTML=`RATIO_X:${RATIO_X} RATIO_Y:${RATIO_Y} selectedTime:${selectedTime} selectedSlot:${selectedSlot}`;
    var ch=debug.children;
    if(ch[0]){  
        debug.removeChild(ch[0]);}
    debug.appendChild(Ratio);
}
updateDebug();

//
var lastSlot='day';
function makeElements(slot) {
    console.log('ElementCount[slot]');
    console.log(ElementCount[slot]);

    if (slot===lastSlot) {
        return ;
    } else {
        document.getElementById(CONTAINER_NAME).innerHTML='';
        if (ElementCount[slot]) {
            for (let index = 0; index < ElementCount[slot]; index++) {
                var oneMinute=document.createElement('div');
                oneMinute.innerHTML=`<span></span>${index+1}`
                oneMinute.className = "h-timeline";
                oneMinute.style = `position: relative;;width:${ContainerWidth/(ElementCount[slot]*1.5)}px`;
                document.getElementById(CONTAINER_NAME).appendChild(oneMinute);
            }    
            
        }else{
            for (let index = 0; index < CurrentMonthDays; index++) {
                var oneMinute=document.createElement('div');
                oneMinute.innerHTML=`<span></span>${index+1}`
                oneMinute.className = "h-timeline";
                oneMinute.style = `position: relative;;width:${ContainerWidth/CurrentMonthDays}px`;
                document.getElementById(CONTAINER_NAME).appendChild(oneMinute);
            }    
        }
        lastSlot=slot;
    }
}




//



function initTimeline() {
    var nowElement = document.createElement("div");
    const NOW = new Date();
    console.log(NOW);
    console.log(moment().format());
    // nowElement.innerHTML = `<span></span>${NOW.getDate()}`;
    // nowElement.className = "h-timeline";
    // nowElement.style = `position: relative;left:${ContainerWidth / 2}px`;

    // 当前时间以前的
    console.log(moment().daysInMonth());
    // for (let i = 1; i < moment().daysInMonth(); i++) {
    //     var nowElement = document.createElement("div");
    //     nowElement.innerHTML = `<span></span>${i}`;
    //     nowElement.className = "h-timeline";
    //     nowElement.style = `position: relative;;width:${DaysWidth}px`;
    //     document.getElementById(CONTAINER_NAME).appendChild(nowElement);
    // }
makeElements("minuit_1");

}

initTimeline();

// 左右平移的功能




function TEMP(params) {
    document.getElementById("test-mousescroll").addEventListener("wheel", (e) => {
        // console.log(e);
        // e.target.innerHTML=`deltaX:${e.deltaX} deltaY:${e.deltaY} deltaZ:${e.deltaZ}`;

        // 对当前时间进行缩放
        if (e.deltaY > 0) {
            //应该放大
            RATIO_Y=RATIO_Y+0.5;
        } 
        if(e.deltaY<0) {
            //应该缩小
            RATIO_Y=RATIO_Y-0.5;
            if (RATIO_Y<0) {
                RATIO_Y=0;
            }
        }
    
        // var slotted_Ratio_Y=1;
        var selectedSlot='day';
        if (RATIO_Y) {
            for (const [key, value] of Object.entries(SLOTS)) {
                if (RATIO_Y<value-0.1) {
                    // console.log(RATIO_Y);
                    selectedSlot=key;
                    break ;
                }
            }
            
        }
        console.log(`selectedSlot: ${selectedSlot}`);

        // // var slot= getKeyByValue(SLOTS,slotted_Ratio_Y);
        
        makeElements(selectedSlot);




        // 左右《== ==》移动功能
        if (e.deltaX>0) {
            //右移动
            RATIO_X=RATIO_X+0.02;
            document.getElementById('detail-time-container').style=`position: relative;left:${RATIO_X*100}px`;
        } 
        if(e.deltaX<0)  {
            //左移动
            RATIO_X=RATIO_X-0.02;
            document.getElementById('detail-time-container').style=`position: relative;left:${RATIO_X*100}px`;
        }
            



        updateDebug();
        e.preventDefault();
    });
}

TEMP();
