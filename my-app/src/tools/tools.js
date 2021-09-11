export function sortTabsArray(tabs = []) {
    var sortedTabs = [];
    var lastAccessed = 0;
    var firstSegment = {
        createTime: 0,
        tabList: [],
    };

    for (let x = 0; x < tabs.length; x++) {
        if (x === 0) {
            lastAccessed = tabs[x].lastAccessed;
            firstSegment.createTime = lastAccessed;
            firstSegment.tabList.push(tabs[x]);
            sortedTabs.push(firstSegment);
        } else {
            if (Math.abs(tabs[x - 1].lastAccessed - tabs[x].lastAccessed) <= 5000) {
                // within 2 seconds is just one segment
                firstSegment.tabList.push(tabs[x]);
            } else {
                var nextSegment = {
                    createTime: tabs[x].lastAccessed,
                    tabList: [],
                };
                nextSegment.tabList.push(tabs[x]);
                sortedTabs.push(nextSegment);
                firstSegment = nextSegment;
            }
        }
    }

    return sortedTabs;
}

export const _temp = [
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
    {
        id: 31,
        index: 2,
        windowId: 255,
        highlighted: true,
        active: true,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 964,
        lastAccessed: 1630774874645,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.reddit.com/",
        title: "Reddit - Dive into anything",
        favIconUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4AWySA6wdURRFp2ZcRTVi1w1q27YdJ7Vt27YV1HYbfNs2HtY/N+cmj5Os8d6Hjv9BX6eOMEC4JiQJLkuycF0YaP7xKQLFzYSDQq4A4cm1/zQLJ74fVjSgllBT7qvpvb6/ryYqrm1dCcEI98+HQ0vgwlp4eR7GNoE+DlZT27F15YSIzU9jGsOR5SraPgVenPMZqGagYxsGht6WXtZgSSfYOd08C9WgXw397gt0zbHdhv41YGYHoT1sHg+vLkL0L4j8AY+Pw9phMKUFTG0N/apjDZKMgcu4sqwLpMVCdgoU5kJpIfaAsmIozIH0OEiOhKVdsJm4Ag3yMgDg8kbYMEqFpUVyPxpu7ASAgmxY2SPAIEnQtEyXAb48gUfHwFUJleVwew98uA8Ab276jzPJ10TjuH0qVFZARRnE/ddohTl6X14Kbhfsm+ffyGu+MZquD6kPl9ZDThr8/2CiKf/fa3nXt8PQhiFj9C2S+dC/po7v3Gp4ehqeCWaJlnfT1FXsW6Swq9zbUjUcfJBaXPlhIqmZidjs/Bgq5oGenQGmGkYQ+gIA9QAAAABJRU5ErkJggg==",
    },
    {
        id: 32,
        index: 2,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774882360,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.reddit.com/",
        title: "Reddit - Dive into anything",
        favIconUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4AWySA6wdURRFp2ZcRTVi1w1q27YdJ7Vt27YV1HYbfNs2HtY/N+cmj5Os8d6Hjv9BX6eOMEC4JiQJLkuycF0YaP7xKQLFzYSDQq4A4cm1/zQLJ74fVjSgllBT7qvpvb6/ryYqrm1dCcEI98+HQ0vgwlp4eR7GNoE+DlZT27F15YSIzU9jGsOR5SraPgVenPMZqGagYxsGht6WXtZgSSfYOd08C9WgXw397gt0zbHdhv41YGYHoT1sHg+vLkL0L4j8AY+Pw9phMKUFTG0N/apjDZKMgcu4sqwLpMVCdgoU5kJpIfaAsmIozIH0OEiOhKVdsJm4Ag3yMgDg8kbYMEqFpUVyPxpu7ASAgmxY2SPAIEnQtEyXAb48gUfHwFUJleVwew98uA8Ab276jzPJ10TjuH0qVFZARRnE/ddohTl6X14Kbhfsm+ffyGu+MZquD6kPl9ZDThr8/2CiKf/fa3nXt8PQhiFj9C2S+dC/po7v3Gp4ehqeCWaJlnfT1FXsW6Swq9zbUjUcfJBaXPlhIqmZidjs/Bgq5oGenQGmGkYQ+gIA9QAAAABJRU5ErkJggg==",
    },
    {
        id: 33,
        index: 3,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774882931,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.facebook.com/",
        title: "Facebook - 登录或注册",
        favIconUrl:
            "data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAMIeAADCHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AABuJlBEfgYwCV///////////////////////////gZAC/4GMAleJlAEf/gAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6moLGOJmApbhZgHx4mYB/+FlAf///////////////////////////+FmAf/iZgH/4WYB/+JnAfHiZgKW6moLGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/20kB+RqBILjaQL042gC/+NoAv/iaAL/42gC////////////////////////////4mgB/+JoAv/iaAH/4mgC/+JoAv/jaQL05GoEgv9tJAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOpqCxjkagTH42oD/+NqA//jagP/42oD/+RrA//jagP////////////////////////////jagP/5GsD/+NqA//kawP/5GsD/+RrA//kawP/5GwEx+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADocQYt5W4E4+VtBP/kbAP/5W0E/+RsA//kbAP/5W0E/+RsA////////////////////////////+RsA//kbQP/5GwD/+RtA//kbQP/5G0D/+RtA//kbQP/5G4D4+hxBi0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6nULGOZwBuPlbwT/5W8E/+VvBP/lbwT/5W8E/+VvBP/lbwT/5W8E////////////////////////////5W8E/+ZwBf/lbwT/5nAF/+ZwBf/lbwT/5nAF/+VvBP/lbwT/5nAG4+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAP+SJAfncgXH5nIF/+ZxBf/mcQX/5nEF/+ZxBf/mcQX/5nEF/+dyBf/mcQX////////////////////////////ncgb/5nEF/+dyBv/mcQX/5nEF/+ZyBf/mcQX/5nIF/+ZyBf/mcQX/53IFx/+SJAcAAAAAAAAAAAAAAAAAAAAA53YIguh0Bv/ndAb/6HQG/+h0Bv/odAb/6HQG/+h0Bv/odAb/53QG/+h0Bv///////////////////////////+d0Bf/ndAb/53QF/+d0Bv/ndAb/6HUG/+d0Bv/odQb/6HUG/+d0Bf/odQb/53YGggAAAAAAAAAAAAAAAOqACxjodgb06HYH/+h2Bv/odgf/6HYH/+h2Bv/odgf/6HYG/+h2Bv/odgf/6HYG////////////////////////////6XcH/+h2Bv/pdwf/6HYG/+h2Bv/odgf/6HYG/+h2B//odgf/6HYG/+h2B//odgb06oALGAAAAAAAAAAA63oJlul5CP/qeQj/6XkI/+p5CP/qeQj/6XkH/+p5CP/peQf/6XkH/+l5B//peQf////////////////////////////peQj/6XkH/+l5CP/peQf/6XkH/+l5CP/peQf/6XkI/+l5CP/peQf/6XkI/+l5B//regmWAAAAAP+AKwbsfQrx63wJ/+p7CP/rfAn/6nsI/+p7CP/qewj/6nsI/+p7CP/qewj/63wJ/+p7CP///////////////////////////+p7CP/qfAn/6nsI/+p8Cf/qfAn/6nsI/+p8Cf/qewj/6nsI/+t8Cf/qewj/63wJ/+x9CvH/gCsG7YELR+t9Cf/rfQn/634J/+t9Cf/rfgn/634J/+t+Cf/rfgn///////////////////////////////////////////////////////////////////////Ozbv/rfgn/7H4J/+t+Cf/rfgn/634J/+t+Cf/rfgn/634J/+2BC0fsgAqV7IAK/+yACv/sgAr/7IAK/+yACv/sgAr/7IAK/+yACv//////////////////////////////////////////////////////////////////////9cKK/+yACv/sgAr/7IAK/+yACv/sgAn/7IAK/+yACf/sgAn/7IAKle6DC7/tgwv/7YML/+2CCv/tgwv/7YIK/+2CCv/tggr/7YIK///////////////////////////////////////////////////////////////////////40qf/7YML/+2CCv/tgwv/7YML/+2DC//tgwv/7YML/+2DC//ugwu/74YM2e6FC//uhQv/7oUL/+6FC//uhQv/7oUL/++FDP/uhQv///////////////////////////////////////////////////////////////////////rhxP/uhQv/7oUL/+6FC//uhQv/7oQL/+6FC//uhAv/7oQL/++GDNnviA7z74gM/++IDP/vhwz/74gM/++HDP/vhwz/74cM/++HDP///////////////////////////////////////////////////////////////////////fDh/++IDf/vhwz/74gN/++IDf/vhwz/74gN/++HDP/vhwz/74cN8/CLDvPwig3/8IoN//CKDf/wig3/8IoN//CKDf/wiQ3/8IoN//CJDf/wiQ3/8IoN//CJDf////////////////////////////CJDf/wig3/8IkN//CKDf/wig3/8IkN//CKDf/wiQ3/8IkN//CJDf/wiQ3/8IkN//CJDf/wiw7z8o0O2fGMDv/xjA7/8YwN//GMDv/xjA3/8YwN//GMDf/xjA3/8YwN//GMDf/xjA7/8YwN////////////////////////////8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//KNDtnyjw+/8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KODv/yjw/////////////////////////////xjg7/8o4O//GODv/yjg7/8o4O//KODv/yjg7/8o4O//KODv/yjw//8o4O//KPD//yjw//85AQv/ORD5XzkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EQ//ORD//++vT///////////////////////SbJv/zkRD/85EP//OREP/zkRD/85EP//OREP/zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ+V9JcSR/STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//OTEP/0lBD/85MQ//OTEP/0lBD/85MQ//zq0P//////////////////////+tWi//WdJv/zkxD/9JMQ//STEP/0kxD/9JMQ//STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//STEkf/qisG9ZYS8fWWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/+9mr//////////////////////////////////////////////////WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhLx/6orBgAAAAD3mROW9pgS//aYEf/2mBL/9pgR//aYEf/1mBH/9pgR//WYEf/1mBH/9pgS//WYEf/4sU3/////////////////////////////////////////////////9pgS//WYEf/2mBL/9pgS//WYEf/2mBL/9ZgR//eZEZYAAAAAAAAAAP+fFRj4nBT095sT//ebE//3mxP/95sT//ebE//3mxP/95sT//ebE//3mhL/95sT//eaEv/84rv////////////////////////////////////////////3mxP/95sT//ebE//3mxP/9poS//ebE//3mxP0/58VGAAAAAAAAAAAAAAAAPmfFIL4nRP/+J0T//idE//4nRP/95wT//idE//3nBP/95wT//idE//3nBP/+J0T//ilJ//958X///////////////////////////////////////idE//3nRP/+J0T//idE//4nRP/+J0T//mfFIIAAAAAAAAAAAAAAAAAAAAA/7YkB/qgFcf5oBT/+aAU//mgFP/4nxT/+aAU//ifFP/4nxT/+Z8U//ifFP/5nxT/+Z8U//mhF//7zof//vDa//78+P/+/fr//vnx//7z4//969D/+aAU//mfFP/5oBT/+aAU//ifFP/6oBXH/7YkBwAAAAAAAAAAAAAAAAAAAAAAAAAA/6oVGPujFeP5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/6ohX/+qIV//qiFf/6ohX/+aEU//qiFf/5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/5oRT/+qIV//mhFP/5oRT/+6MV4/+qFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YWLvykFeP7pBX/+6QW//ukFf/7pBb/+6QW//qkFf/7pBb/+qQV//qkFf/7pBb/+qQV//ukFv/7pBb/+6UW//ukFv/7pRb/+6UW//ukFf/7pRb/+6QV//ykFeP/pBctAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ogGPyoF8f8pxb//KcX//ynFv/8pxb//KcW//ynFv/8pxb//KcW//umFv/8pxb/+6YW//umFv/7phb/+6YW//umFv/7phb//KcW//umFv/8qBfH/6ogGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7YkB/2rGIL9qRj0/KkX//ypF//8qBf//KkX//yoF//8qBf//akX//yoF//9qRf//akX//2pF//9qRf//akX//2pF//+qRj0/asYgv+2JAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+1IBj/rRqW/6wY8f6sGP/+rBj//qwY//6sGP/9qxj//qwY//2rGP/9qxj//asX//2rGP/+qxfx/awYlv+1IBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1SsG/7AZR/+vGpX/rxm//68a2f+uGfP/rhnz/68a2f+vGb//rxqV/7AZR//VKwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8=",
    },
    {
        id: 34,
        index: 4,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774883527,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.wikipedia.org/",
        title: "Wikipedia",
        favIconUrl:
            "data:image/x-icon;base64,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",
    },
    {
        id: 35,
        index: 2,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774897983,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.reddit.com/",
        title: "Reddit - Dive into anything",
        favIconUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABn0lEQVR4AWySA6wdURRFp2ZcRTVi1w1q27YdJ7Vt27YV1HYbfNs2HtY/N+cmj5Os8d6Hjv9BX6eOMEC4JiQJLkuycF0YaP7xKQLFzYSDQq4A4cm1/zQLJ74fVjSgllBT7qvpvb6/ryYqrm1dCcEI98+HQ0vgwlp4eR7GNoE+DlZT27F15YSIzU9jGsOR5SraPgVenPMZqGagYxsGht6WXtZgSSfYOd08C9WgXw397gt0zbHdhv41YGYHoT1sHg+vLkL0L4j8AY+Pw9phMKUFTG0N/apjDZKMgcu4sqwLpMVCdgoU5kJpIfaAsmIozIH0OEiOhKVdsJm4Ag3yMgDg8kbYMEqFpUVyPxpu7ASAgmxY2SPAIEnQtEyXAb48gUfHwFUJleVwew98uA8Ab276jzPJ10TjuH0qVFZARRnE/ddohTl6X14Kbhfsm+ffyGu+MZquD6kPl9ZDThr8/2CiKf/fa3nXt8PQhiFj9C2S+dC/po7v3Gp4ehqeCWaJlnfT1FXsW6Swq9zbUjUcfJBaXPlhIqmZidjs/Bgq5oGenQGmGkYQ+gIA9QAAAABJRU5ErkJggg==",
    },
    {
        id: 36,
        index: 3,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774898650,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.facebook.com/",
        title: "Facebook - 登录或注册",
        favIconUrl:
            "data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAMIeAADCHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AABuJlBEfgYwCV///////////////////////////gZAC/4GMAleJlAEf/gAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6moLGOJmApbhZgHx4mYB/+FlAf///////////////////////////+FmAf/iZgH/4WYB/+JnAfHiZgKW6moLGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/20kB+RqBILjaQL042gC/+NoAv/iaAL/42gC////////////////////////////4mgB/+JoAv/iaAH/4mgC/+JoAv/jaQL05GoEgv9tJAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOpqCxjkagTH42oD/+NqA//jagP/42oD/+RrA//jagP////////////////////////////jagP/5GsD/+NqA//kawP/5GsD/+RrA//kawP/5GwEx+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADocQYt5W4E4+VtBP/kbAP/5W0E/+RsA//kbAP/5W0E/+RsA////////////////////////////+RsA//kbQP/5GwD/+RtA//kbQP/5G0D/+RtA//kbQP/5G4D4+hxBi0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6nULGOZwBuPlbwT/5W8E/+VvBP/lbwT/5W8E/+VvBP/lbwT/5W8E////////////////////////////5W8E/+ZwBf/lbwT/5nAF/+ZwBf/lbwT/5nAF/+VvBP/lbwT/5nAG4+p1CxgAAAAAAAAAAAAAAAAAAAAAAAAAAP+SJAfncgXH5nIF/+ZxBf/mcQX/5nEF/+ZxBf/mcQX/5nEF/+dyBf/mcQX////////////////////////////ncgb/5nEF/+dyBv/mcQX/5nEF/+ZyBf/mcQX/5nIF/+ZyBf/mcQX/53IFx/+SJAcAAAAAAAAAAAAAAAAAAAAA53YIguh0Bv/ndAb/6HQG/+h0Bv/odAb/6HQG/+h0Bv/odAb/53QG/+h0Bv///////////////////////////+d0Bf/ndAb/53QF/+d0Bv/ndAb/6HUG/+d0Bv/odQb/6HUG/+d0Bf/odQb/53YGggAAAAAAAAAAAAAAAOqACxjodgb06HYH/+h2Bv/odgf/6HYH/+h2Bv/odgf/6HYG/+h2Bv/odgf/6HYG////////////////////////////6XcH/+h2Bv/pdwf/6HYG/+h2Bv/odgf/6HYG/+h2B//odgf/6HYG/+h2B//odgb06oALGAAAAAAAAAAA63oJlul5CP/qeQj/6XkI/+p5CP/qeQj/6XkH/+p5CP/peQf/6XkH/+l5B//peQf////////////////////////////peQj/6XkH/+l5CP/peQf/6XkH/+l5CP/peQf/6XkI/+l5CP/peQf/6XkI/+l5B//regmWAAAAAP+AKwbsfQrx63wJ/+p7CP/rfAn/6nsI/+p7CP/qewj/6nsI/+p7CP/qewj/63wJ/+p7CP///////////////////////////+p7CP/qfAn/6nsI/+p8Cf/qfAn/6nsI/+p8Cf/qewj/6nsI/+t8Cf/qewj/63wJ/+x9CvH/gCsG7YELR+t9Cf/rfQn/634J/+t9Cf/rfgn/634J/+t+Cf/rfgn///////////////////////////////////////////////////////////////////////Ozbv/rfgn/7H4J/+t+Cf/rfgn/634J/+t+Cf/rfgn/634J/+2BC0fsgAqV7IAK/+yACv/sgAr/7IAK/+yACv/sgAr/7IAK/+yACv//////////////////////////////////////////////////////////////////////9cKK/+yACv/sgAr/7IAK/+yACv/sgAn/7IAK/+yACf/sgAn/7IAKle6DC7/tgwv/7YML/+2CCv/tgwv/7YIK/+2CCv/tggr/7YIK///////////////////////////////////////////////////////////////////////40qf/7YML/+2CCv/tgwv/7YML/+2DC//tgwv/7YML/+2DC//ugwu/74YM2e6FC//uhQv/7oUL/+6FC//uhQv/7oUL/++FDP/uhQv///////////////////////////////////////////////////////////////////////rhxP/uhQv/7oUL/+6FC//uhQv/7oQL/+6FC//uhAv/7oQL/++GDNnviA7z74gM/++IDP/vhwz/74gM/++HDP/vhwz/74cM/++HDP///////////////////////////////////////////////////////////////////////fDh/++IDf/vhwz/74gN/++IDf/vhwz/74gN/++HDP/vhwz/74cN8/CLDvPwig3/8IoN//CKDf/wig3/8IoN//CKDf/wiQ3/8IoN//CJDf/wiQ3/8IoN//CJDf////////////////////////////CJDf/wig3/8IkN//CKDf/wig3/8IkN//CKDf/wiQ3/8IkN//CJDf/wiQ3/8IkN//CJDf/wiw7z8o0O2fGMDv/xjA7/8YwN//GMDv/xjA3/8YwN//GMDf/xjA3/8YwN//GMDf/xjA7/8YwN////////////////////////////8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//GMDv/xjA7/8YwO//KNDtnyjw+/8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KPD//yjw//8o8P//KODv/yjw/////////////////////////////xjg7/8o4O//GODv/yjg7/8o4O//KODv/yjg7/8o4O//KODv/yjw//8o4O//KPD//yjw//85AQv/ORD5XzkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ//85EQ//ORD//++vT///////////////////////SbJv/zkRD/85EP//OREP/zkRD/85EP//OREP/zkQ//85EP//ORD//zkQ//85EP//ORD//zkQ+V9JcSR/STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//OTEP/0lBD/85MQ//OTEP/0lBD/85MQ//zq0P//////////////////////+tWi//WdJv/zkxD/9JMQ//STEP/0kxD/9JMQ//STEP/0kxD/9JQQ//STEP/0lBD/9JQQ//STEkf/qisG9ZYS8fWWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhH/+9mr//////////////////////////////////////////////////WWEf/1lhH/9ZYR//WWEf/1lhH/9ZYR//WWEf/1lhLx/6orBgAAAAD3mROW9pgS//aYEf/2mBL/9pgR//aYEf/1mBH/9pgR//WYEf/1mBH/9pgS//WYEf/4sU3/////////////////////////////////////////////////9pgS//WYEf/2mBL/9pgS//WYEf/2mBL/9ZgR//eZEZYAAAAAAAAAAP+fFRj4nBT095sT//ebE//3mxP/95sT//ebE//3mxP/95sT//ebE//3mhL/95sT//eaEv/84rv////////////////////////////////////////////3mxP/95sT//ebE//3mxP/9poS//ebE//3mxP0/58VGAAAAAAAAAAAAAAAAPmfFIL4nRP/+J0T//idE//4nRP/95wT//idE//3nBP/95wT//idE//3nBP/+J0T//ilJ//958X///////////////////////////////////////idE//3nRP/+J0T//idE//4nRP/+J0T//mfFIIAAAAAAAAAAAAAAAAAAAAA/7YkB/qgFcf5oBT/+aAU//mgFP/4nxT/+aAU//ifFP/4nxT/+Z8U//ifFP/5nxT/+Z8U//mhF//7zof//vDa//78+P/+/fr//vnx//7z4//969D/+aAU//mfFP/5oBT/+aAU//ifFP/6oBXH/7YkBwAAAAAAAAAAAAAAAAAAAAAAAAAA/6oVGPujFeP5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/6ohX/+qIV//qiFf/6ohX/+aEU//qiFf/5oRT/+aEU//qiFf/5oRT/+qIV//qiFf/5oRT/+qIV//mhFP/5oRT/+6MV4/+qFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YWLvykFeP7pBX/+6QW//ukFf/7pBb/+6QW//qkFf/7pBb/+qQV//qkFf/7pBb/+qQV//ukFv/7pBb/+6UW//ukFv/7pRb/+6UW//ukFf/7pRb/+6QV//ykFeP/pBctAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6ogGPyoF8f8pxb//KcX//ynFv/8pxb//KcW//ynFv/8pxb//KcW//umFv/8pxb/+6YW//umFv/7phb/+6YW//umFv/7phb//KcW//umFv/8qBfH/6ogGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7YkB/2rGIL9qRj0/KkX//ypF//8qBf//KkX//yoF//8qBf//akX//yoF//9qRf//akX//2pF//9qRf//akX//2pF//+qRj0/asYgv+2JAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+1IBj/rRqW/6wY8f6sGP/+rBj//qwY//6sGP/9qxj//qwY//2rGP/9qxj//asX//2rGP/+qxfx/awYlv+1IBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1SsG/7AZR/+vGpX/rxm//68a2f+uGfP/rhnz/68a2f+vGb//rxqV/7AZR//VKwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8AD//8AAP/8AAA/+AAAH/AAAA/gAAAHwAAAA8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAD/gAAB/8AAA//wAA///AA/8=",
    },
    {
        id: 37,
        index: 4,
        windowId: 255,
        highlighted: false,
        active: false,
        attention: false,
        pinned: false,
        status: "complete",
        hidden: false,
        discarded: false,
        incognito: false,
        width: 714,
        height: 936,
        lastAccessed: 1630774899351,
        audible: false,
        mutedInfo: { muted: false },
        isArticle: false,
        isInReaderMode: false,
        sharingState: { camera: false, microphone: false },
        successorTabId: -1,
        cookieStoreId: "firefox-default",
        url: "https://www.wikipedia.org/",
        title: "Wikipedia",
        favIconUrl:
            "data:image/x-icon;base64,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",
    },
];


export function CSSstring(string) {
    const css_json = `{"${string.replace(/; /g, '", "').replace(/: /g, '": "').replace(";", "")}"}`;

    const obj = JSON.parse(css_json);

    const keyValues = Object.keys(obj).map((key) => {
        var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
        return { [camelCased]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}
