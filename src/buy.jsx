
import React from "react";
import "./buy.css"; // Make sure you create/update this CSS file

function Buy() {
  return (
    <div id="categories" className="main-buy-section">
      
      {/* Buy 5 Section */}
      <div className="buy-section buy-section-5">
        <div className="images-container">
          <img src="/coffee.png" alt="coffee" />
          <img src="/xx.png" alt="xx" />
          <img src="/black1-xx.png" alt="black1" />
          <img src="/grey-xx.png" alt="grey" />
          <img src="/black2xx.png" alt="black2" />
        </div>
        <h1 className="buy-count">5</h1>
        <div className="off">
          <h2>BUY 5 GET 20% OFF</h2>
        </div>
      </div>

      {/* Buy 10 Section */}
      <div className="buy-section buy-section-10">
        <div className="images-container">
          <img src="/roll.png" alt="roll" />
          <img src="/eye.png" alt="eye" />
          <img src="/dog.png" alt="dog" />
          <img src="/girl.png" alt="girl" />
          <img src="/bhoo.png" alt="bhoo" />
          <img src="/coffee2.png" alt="coffee2" />
          <img src="/funny.png" alt="funny" />
          <img src="/blur.png" alt="blur" />
          <img src="/feet.png" alt="feet" />
        </div>
        <h1 className="buy-count">10</h1>
        <div className="off">
          <h2>BUY 10 GET 23% OFF</h2>
        </div>
      </div>

    </div>
  );
}

export default Buy;
