import React from 'react'
import "./sidebarRows.css";

function SidebarRows({ selected, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`
        }>
            <Icon className="sidebarRow__icons" />
            <h2 className="sidebarRow__title">{title}</h2>
        </div >
    )
}

export default SidebarRows