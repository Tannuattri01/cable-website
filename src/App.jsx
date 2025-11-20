import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './card';
import About from './about';
import Buy from './buy';
import Gang from './gang';
import Footer from './footer';
import LuckyCat from "./Luckycat";
import Avacado from "./Avacado.jsx";

import Bulbasaur from "./Bulbasaur";
import Pikachu from "./pikachu";
import Doremon from "./Doremon";
import Turtle from "./turtle";
import Sinchan from "./sinchan";
import Cookie from "./cookie";
import Pinkfeet from "./pinkfeet";
import Bottle from "./bottle";
import Brownpikachu from "./brownpikachu";
import Coffee from "./coffee";

function MainComponent({ cart, addToCart, removeFromCart, isInCart, showCart, setShowCart }) {
     <div className='main-section'>
      {/* Navbar */}
      <div className='navitem' style={{ display: 'flex', justifyContent: 'space-evenly', color: 'black' }}>
        <div className='dropdown'>
          <button className='nav-btn3' onClick={() => {
            const section = document.getElementById("card");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}>Cables</button>
        </div>
        <div className='dropdown'>
          <button className='nav-btn3' onClick={() => {
            const section = document.getElementById("categories");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}>Categories</button>
        </div>
        <img src="/images/logo.png" alt="logo" style={{ height: '50px' }} />
        <div className='dropdown'>
          <button className='nav-btn3' onClick={() => {
            const section = document.getElementById("about");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}>About</button>
        </div>
        <button className='nav-btn3' onClick={() => {
          const section = document.getElementById("gang");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}>Gang</button>

        <button onClick={() => setShowCart(!showCart)}>🛒 Cart ({cart.length})</button>
      </div>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="cart-dropdown"
          style={{
            padding: '10px',
            width: '250px',
            position: 'absolute',
            top: '50px',
            right: '20px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            zIndex: 1000
          }}>
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {cart.map((item, index) => (
                <li key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px"
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.imageSrc} alt={item.title} style={{ width: "40px", height: "50px", marginRight: "20px" }} />
                    <span>{item.title}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <video className="hero-video" src="/images/video.mp4" autoPlay loop muted />

      <div id="card" className="card-container">
        <Card title="Animal" imageSrc="/images/animal.png" addToCart={addToCart} />
        <Card title="Novelties" imageSrc="/images/icons.png" addToCart={addToCart} />
        <Card title="Anime" imageSrc="/images/cables.png" addToCart={addToCart} />
        <Card title="Coil cables" imageSrc="/images/wires.png" addToCart={addToCart} />
      </div>

      <div id="about"><About /></div>
      <div id="categories"><Buy /></div>
      <div id="gang"><Gang /></div>
      <Footer />
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (title, imageSrc) => {
    if (!isInCart(title)) {
      setCart([...cart, { title, imageSrc }]);
    }
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const isInCart = (title) => cart.some(item => item.title === title);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainComponent
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
              showCart={showCart}
              setShowCart={setShowCart}
            />
          }
        />
        <Route path="/lucky-cat" element={<LuckyCat cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/avacado" element={<Avacado cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/bulbasaur" element={<Bulbasaur cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/pikachu" element={<Pikachu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/doremon" element={<Doremon cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/turtle" element={<Turtle cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/sinchan" element={<Sinchan cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/cookie" element={<Cookie cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/pinkfeet" element={<Pinkfeet cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/bottle" element={<Bottle cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/brownpikachu" element={<Brownpikachu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
        <Route path="/coffee" element={<Coffee cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={isInCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
