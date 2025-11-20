import React from "react";

function Footer() {
    return (
        <div id="footer" className="footer-section">
            <div className="main-footer-div">
                <div className="last-logo">
                    <img className="cable-logo" src="/logo.png" alt="Logo" />
                </div>
                <div className="footer-categories-section">
                    <h2>categories</h2>
                    <div className="footer-categories">
                        <a href="#">Animal</a>
                        <a href="#">Anime</a>
                        <a href="#">Fast food</a>
                    </div>
                </div>
                <div className="footer-about-section">
                    <h2>about</h2>
                    <div className="footer-about">
                        <a href="#">contact</a>
                        <a href="#">About us</a>
                        <a href="#">privacy policy</a>
                        <a href="#">returns policy</a>
                        <a href="#">copyright notice</a>
                    </div>
                </div>
                <div className="footer-follow">
                    <h2>follow us</h2>
                    <div className="footer-us">
                        <img className="footer-us-img1" src="/instagram.png" alt="Instagram" />
                        <img className="footer-us-img2" src="/facebook.png" alt="Facebook" />
                        <img className="footer-us-img3" src="/twitter.png" alt="Twitter" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-section-text">
                <p>Copyright © Cable critters - all Images are copyright protected.</p>
                <p>Web design & photography by ohareandsons</p>
            </div>
        </div>
    );
}

export default Footer;
