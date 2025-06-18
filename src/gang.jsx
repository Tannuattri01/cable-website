import React from "react";
import { useNavigate } from "react-router-dom";

function Gang() {
    const navigate = useNavigate();  // ✅ Use navigate function

    return (
        <div className="main-div" id="gang">
            <div className="gang-section-div">
                <h1 className="meet">Meet The Gang</h1>
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
        </div>
    );
}

export default Gang;
