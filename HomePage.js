import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleReserve = () => {
        navigate("/Reserve"); 
    };

    const handleOrder = () => {
        navigate("/OrderOnline"); 
    };

    const handleViewMenu = () => {
        navigate("/Viewmenu");
    };

    return (
        <div className="homepage">
            <header className="logo-section">
                <img
                    src="logo.jpeg"
                    alt="Little Lemon Logo"
                    className="logo"
                />
            </header>
            <div className="content">
                <h1>Welcome to Little Lemon Restaurant</h1>
                <p>What's on your mind?</p>
                <div className="buttons">
                    <button className="reserve-button" onClick={handleReserve}>
                        Reserve a Table
                    </button>
                    <button className="order-button" onClick={handleOrder}>
                        Order Online
                    </button>
                    <button className="menu-button" onClick={handleViewMenu}>
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
