import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="parent">
            <div className="header">
                <h1> Henry Food</h1>
                <div style={{ display: "flex" }}>
                <button
                    style={{ alignItems: "center" }}
                    onClick={() => { navigate('/recipes') }}
                    type="button"
                >
                    Comenzar
                    </button>
                </div>
            </div>
            <div className="main">
            </div>
        </div>
    );
}

export default LandingPage;