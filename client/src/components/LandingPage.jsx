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
            <div className="main" style={{ justifyContent: "center", alignItems: "center" }}>
                <img
                    key="cooking"
                    src="/cooking.png"
                    alt="cooking"
                    width="40%"
                >
                </img>
            </div>
        </div>
    );
}

export default LandingPage;