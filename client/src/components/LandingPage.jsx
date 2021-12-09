import React from "react";
import Header from './Header';

const LandingPage = () => {
    return (
        <>
            <Header navigateTo="/recipes" buttonText="Comenzar"/>
            <div className="main" style={{ justifyContent: "center", alignItems: "center" }}>
                <img
                    key="cooking"
                    src="/cooking.png"
                    alt="cooking"
                    width="40%"
                >
                </img>
            </div>
        </>
    );
}

export default LandingPage;