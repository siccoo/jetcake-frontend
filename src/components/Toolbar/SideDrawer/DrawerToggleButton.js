import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button">
        <div className="button-toggle_line" />
        <div className="button-toggle_line" />
        <div className="button-toggle_line" />
    </button>
);

export default DrawerToggleButton;