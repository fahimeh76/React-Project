import React from "react";
import { useNavigate } from "react-router-dom";
import "./Viewmenu.css";
import Footer from "./Footer";



const Viewmenu = () => {
    const navigate = useNavigate();

    const handleOrder = () => {
        navigate("/OrderOnline")
    };
    const handleReserve = () => {
        navigate("/Reserve")
    };
    const handleHomePage = () => {
        navigate("/HomePage")
    };

    return (
        <div className="Viewmenu">
            <div className="container">
                <div className="burger-container">
                    <p>Burgers</p>
                    <img src="burger.jpeg" style={{ width: '400px', height: '300px', objectFit: 'cover' }} alt="Burger"></img>
                    <button className="viewmore-button">View more</button>
                </div>
                <div className="pizza-container">
                    <p>Pizza</p>
                    <img src="pizza.jpg" style={{ width: '400px', height: '300px', objectFit: 'cover' }} alt="Pizza" ></img>
                    <button className="viewmore-button">View more</button>
                </div>
                <div className="steak-container">
                    <p>Steaks</p>
                    <img src="steak.jpg" style={{ width: '400px', height: '300px', objectFit: 'cover' }} alt="Steak" ></img>
                    <button className="viewmore-button">View more</button>
                </div>


            </div>
            <div className="buttons">
                <button className="reserve-button" onClick={handleReserve}>Reserve a Table</button>
                <button className="order-button" onClick={handleOrder}>Order Online</button>
                <button className="homepage-button" onClick={handleHomePage}>Home Page</button>
            </div>

        




    <Footer></Footer>

        </div>


    );
};
export default Viewmenu;