import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Henry Food</h1>
            <button onClick={() => { navigate('/recipes') }} type="button">Home</button>
        </>
    );
}

export default LandingPage