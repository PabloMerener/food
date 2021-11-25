import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div id="left" className="column">
            <h1 className="top-left"> Henry Food</h1>
            <button onClick={() => { navigate('/recipes') }} type="button">Home</button>
        </div>
    );
}

export default LandingPage