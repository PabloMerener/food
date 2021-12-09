import { Link, useNavigate } from 'react-router-dom';

const Header = ({ title, navigateTo, buttonText }) => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <Link to="/">
                <h1 >Henry Food</h1>
            </Link>
            <h1 >{title}</h1>
            <div style={{ display: "flex" }}>
                <button
                    style={{ alignItems: "center" }}
                    onClick={() => buttonText === 'Back' ? navigate(-1) : navigate(navigateTo)}
                    type="button"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Header;