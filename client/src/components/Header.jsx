import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = ({ title, navigateTo, buttonText }) => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1 >{title}</h1>
            <div style={{ display: "flex" }}>
                <button
                    style={{ alignItems: "center" }}
                    onClick={() => { navigate(navigateTo) }}
                    type="button"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Header;