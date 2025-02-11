import React from "react";
import { useNavigate } from "react-router-dom";
import "./Reserve.css"
import Footer from "./Footer";


const Reserve=() =>{
    const navigate = useNavigate();
    const handleOrderOnline = () => {
        navigate("/OrderOnline")
    };
    const handleViewMenu = () => {
        navigate("/Viewmenu")
    };
    const handleHomePage = () => {
        navigate("/HomePage")
    };
    return(
        <div className="Reserve">
            <table>
                <tr>
                    <td>
                        <div className="Indoor">
                            <h2>Indoor</h2>
                            <div class="dropdown-container">
                                <label for="number-of-people">Number of people</label>
                                <select id="number-of-people" class="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            </div>
                            </td>
                       
                    <td>
                        <div className="Outdoor">
                            <h2>Outdoor</h2>
                            <div class="dropdown-container">
                                <label for="number-of-people">Number of people</label>
                                <select id="number-of-people" class="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                        </div>


                    </td>


                </tr>
 


                
                
            </table>
            <div className="Save-Butn">Save</div>
            <div className="buttons-wrapper">
                <div className="buttons">
                    <button className="reserve-button" onClick={handleViewMenu}>View Menu</button>
                    <button className="order-button" onClick={handleOrderOnline}>Order Online</button>
                    <button className="homepage-button" onClick={handleHomePage}>Home Page</button>
                </div>

            </div>

        <Footer></Footer>
           
        </div>
    )





};
export default Reserve;
