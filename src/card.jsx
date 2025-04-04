import React, { useState } from "react";

const Card = ({ title, description, imageSrc, addToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(title, imageSrc);
        setIsAdded(true);
    };

    return (
        <div className="card-section" id="card">
            <div className="card-sections">
                <img className="card-section-img" src={imageSrc} alt={title} />
                <div className="card-section-des">
                    <h2 className="card-section-title">{title}</h2>
                    <p className="description">{description}</p>
                    
                    <button
                        className="add-cart-btn"
                        style={{
                            display: 'flex',
                            position: "relative",
                            left: "100px",
                            bottom: "20px",
                            border: "2px solid",
                            padding: "10px 16px",
                            borderRadius: "12px",
                            backgroundColor: isAdded ? "#22c55e" : "#3b82f6",
                            color: "white",
                            cursor: isAdded ? "default" : "pointer",
                            transition: "0.3s",
                            
                        }}
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? "✔ Added" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
