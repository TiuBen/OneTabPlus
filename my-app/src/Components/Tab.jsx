import TabInfoButtons from "./TabInfoButtons";
import TabElement from "./TabElement";
function CSSstring(string) {
    const css_json = `{"${string
      .replace(/; /g, '", "')
      .replace(/: /g, '": "')
      .replace(";", "")}"}`;
  
    const obj = JSON.parse(css_json);
  
    const keyValues = Object.keys(obj).map((key) => {
      var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
      return { [camelCased]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }
  
export default function Tab(props) {
    const { time, tabList } = props;
    console.log('Tab props');    
    console.log(props);    

    return (
        <div style= {{'padding-top': '15px', 'padding-left': '0px'}} class="tabGroup">
            <TabInfoButtons createTime={time} count={tabList.length}/>
        <div style={CSSstring("padding-left: 12px; padding-right: 20px; padding-top: 12px;")} class="tabList">

            {tabList.map((t,index) => {
                return <TabElement value={t} key={index}/>;
            })}
        </div>
        </div>

    );
}
