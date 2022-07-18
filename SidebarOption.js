import React from "react";
import './SidebarOption.css';


//by passing props we can pass icon/text/style as an argument 
function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active
            && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption