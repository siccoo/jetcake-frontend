import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="button-toggle_line" />
        <div className="button-toggle_line" />
        <div className="button-toggle_line" />
    </button>
);

export default drawerToggleButton;