import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Henry Food</h1>
            <button onClick={() => {navigate('/home')}} type="button">Home</button>
        </div>
    );
}

export default LandingPage