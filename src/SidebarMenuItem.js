import React from 'react';

import './SidebarMenuItem.css';

const SidebarMenuItem = ({ title, Icon}) => {
    return(
        <div className="SidebarMenuItem">
            <Icon className="SidebarMenuItem__icon"/>
            <h3 className="SidebarMenuItem__title">{title}</h3>
        </div>
    );
}

export default SidebarMenuItem;