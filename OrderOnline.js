import React from "react";
import "./OrderOnline.css";
import { useNavigate } from "react-router-dom";


const OrderOnline = () => {
    const navigate = useNavigate();
    const handleReserve = () => {
        navigate("/Reserve")
    };
    const handleViewMenu = () => {
        navigate("/Viewmenu")
    };
    const handleHomePage = () => {
        navigate("/HomePage")
    };
    return(
        <div className="OrderOnline">
            <div className="container">
                <div className="burger-container">
                    <h2>Burgers</h2>
                    <div className="row1">
                        <div className="row1 col">
                            <p>Burger1</p></div>
                        
                        <p>15£</p>
                        <button className="add-button">add</button>
                        </div>
                    <div className="row2">
                        <div className="row2 col">
                            <p>Burger2</p>
                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                        </div>
                    <div className="row3">
                        <div className="row3 col">
                            <p>Burger3</p>
                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                </div>
                <div className="pizza-container">
                    <h2>Pizza</h2>
                    <div className="row1">
                        <div className="row1 col">
                            <p>Pizza1</p>

                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                    <div className="row2">
                        <div className="row2 col">
                            <p>Pizza2</p>

                        </div>
                        
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                    <div className="row3">
                        <div className="row3 col">
                            <p>Pizza3</p>

                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                </div>
                <div className="steak-container">
                    <h2>Steaks</h2>
                    <div className="row1">
                        <div className="row1 col">
                            <p>Steak1</p>

                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                    <div className="row2">
                        <div className="row2 col">
                            <p>Steak2</p>

                        </div>
                    
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                    <div className="row3">
                        <div className="row3 col">
                            <p>Steak3</p>

                        </div>
                        <p>15£</p>
                        <button className="add-button">add</button>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="reserve-button" onClick={handleReserve}>Reserve a Table</button>
                <button className="home-page-button" onClick={handleHomePage}>Home Page</button>
                <button className="menu-button" onClick={handleViewMenu}>View Menu</button>
            </div>
        </div>
    );
};
export default OrderOnline;