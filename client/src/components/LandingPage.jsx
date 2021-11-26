import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1> Henry Food</h1>
            <div >
                <button onClick={() => { navigate('/recipes') }} type="button">Comenzar</button>
            </div>
        </div>
    );
}

export default LandingPage