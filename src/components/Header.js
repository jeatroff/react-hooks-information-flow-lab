import React from "react";

function Header(props) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={props.onDarkModeClick}>
                {props.onDarkModeClick ? "Dark" : "Light"} Mode
            </button>
        </header>
    );
}

export default Header;