import React from "react";
import Header from './Header';

const LandingPage = () => {
    return (
        <div className="parent">
            <Header title="Henry Food" navigateTo="/recipes" buttonText="Comenzar"/>
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