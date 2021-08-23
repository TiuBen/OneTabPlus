export default function TabElement(props) {
    console.log(props.value);

    return (
        <div className="tab-element">
            <img src={props.value.favIconUrl} style={{width:'15px',height:'15px'}}></img>
            <div style={{display:"inline-block"}}>
                <a className="clickable tabLink" href={props.value.url}>
                {props.value.title}
                </a>
            </div>
        </div>
    );
}
