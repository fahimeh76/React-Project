import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; 
import Viewmenu from './Viewmenu';
import Reserve from "./Reserve";
import OrderOnline from "./OrderOnline";
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Viewmenu" element={<Viewmenu />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/Reserve" element={<Reserve/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
