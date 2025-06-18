import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cat.css";

const Subscription = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const [isAdded, setIsAdded] = useState(false);
    const addToCart = () => {
        setCart([...cart, { title: "Cat paw pink", imageSrc: "./images/pink-feet.png" }]);
        setIsAdded(true);
    };
    const isInCart = cart.some(item => item.title === "Cat paw pink");

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    }, []);
    const removeFromCart = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);
        setIsAdded(false);
    };

    return (
        <div>
             <div className='navitem' style={{ display: 'flex', justifyContent: 'space-between', color: 'black',flexWrap:"wrap" }}>
                
                <img src="./images//logo.png" alt="logo" style={{ height: '50px',paddingLeft:"50px" }} />
                
                

                {/* Cart Button */}
                <button style={{paddingRight:"50px"}} onClick={() => setShowCart(!showCart)}> 🛒 Cart ({cart.length})</button>

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
            </div>

            {/* Product Section */}
            <div className="cat-section">
                <div className="cat-div">
                    <img className="cat-img" src="./images/pink-feet.png" alt="Lucky Cat" />
                </div>
                <div style={{ marginTop: "117px" }}>
                    <h1>Cat paw pink</h1>
                    <p>Cat paw pink silicone cable protector</p>
                    <hr />
                    <h3 style={{ fontSize: "25px" }}>A$ 3.50 AUD</h3>
                    <br />
                    <button
                        style={{
                            border: "2px solid",

                            color: "black",
                            padding: "10px 16px",
                            borderRadius: "10px",
                            cursor: isAdded ? "default" : "pointer",
                            transition: "0.3s"
                        }}
                        onClick={addToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? "✔ Added to Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
            <div className="gang-section-images">
                <div className="gang-section-img">
                    <img className="gang-img1" src="./images/white-cat.png" alt="White Cat" onClick={() => navigate("/lucky-cat")} />
                    <img className="gang-img2" src="./images/green-kiwi.png" alt="Green Kiwi" onClick={() => navigate("/avacado")} />
                    <img className="gang-img3" src="./images/blue.png" alt="Blue" onClick={() => navigate("/bulbasaur")} />
                    <img className="gang-img4" src="./images/pikachu.png" alt="Pikachu" onClick={() => navigate("/pikachu")} />
                </div>
                <div className="gang-section-image">
                    <img className="gang-image1" src="./images/brown-coffee.png" alt="Brown Coffee" onClick={() => navigate("/coffee")} />
                    <img className="gang-image2" src="./images/doremon.png" alt="Doremon" onClick={() => navigate("/doremon")} />
                    <img className="gang-image3" src="./images/sinchan.png" alt="Shinchan" onClick={() => navigate("/sinchan")} />
                    <img className="gang-image4" src="./images/turtle.png" alt="Turtle" onClick={() => navigate("/turtle")} />
                </div>
                <div className="gang-sections-img">
                    <img className="gang-section-img1" src="./images/blue-dora.png" alt="Blue Dora" onClick={() => navigate("/cookie")} />
                    <img className="gang-section-img2" src="./images/pink-feet.png" alt="Pink Feet" onClick={() => navigate("/pinkfeet")} />
                    <img className="gang-img" src="./images/brown-pikachu.png" alt="Brown Pikachu" onClick={() => navigate("/brownpikachu")} />
                    <img className="gang-section-img3" src="./images/bottle.png" alt="Bottle" onClick={() => navigate("/bottle")} />
                </div>
            </div>

            {/* Back Home Button */}
            <button className="back-home-btn" onClick={() => navigate("/")}>
                ⬅️ Go Back Home
            </button>

            {/* Cart Dropdown  */}
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
                        borderRadius: '8px'
                    }}>
                    <h3>Shopping Cart</h3>
                    {cart.length === 0 ? (
                        <p>Cart is empty</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                                    <img src={item.imageSrc} alt={item.title} style={{ width: "40px", marginRight: "10px" }} />
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
            <div id="footer" className="footer-section" >
                       <div className="main-footer-div">
                       <div className="last-logo">
                           <img className="cable-logo" src="./images/logo.png" alt="" />
                       </div>
                       <div className="footer-categories-section">
                           <h2>categories</h2>
                           <div className="footer-categories">
                           <a href="#">Animal</a>
                                   <a href="#">Anime</a>
                                   <a href="#">Fast food</a>
                       </div></div>
                       <div className="footer-about-section">
                           <h2>about</h2>
                           <div className="footer-about">
                           <a href="#">contact</a>
                                   <a href="#">About us</a>
                                   <a href="#">privacy policy</a>
                                   <a href="#">returns policy</a>
                                   <a href="#">copyright notice</a>
                                   
                       </div></div>
                       <div className="footer-follow">
                           <h2>follow us</h2>
                           <div className="footer-us">
                           <img className="footer-us-img1" src="./images/instagram.png" alt="" />
                           <img className="footer-us-img2" src="./images/facebook.png" alt="" />
                           <img className="footer-us-img3" src="./images/twitter.png" alt="" />
                       </div></div>
                       </div>
                       <hr />
                       <div className="footer-section-text">
                           <p>Copyright © Cable critters - all Images are copyright protected.</p>
                           <p>Web design & photography by ohareandsons</p>
                       </div>
                   </div>
        </div>
    );
};

export default Subscription;
