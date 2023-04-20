import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="work-hours">
                <p className="footer-heading">Working Hours</p>
                <p>Monday - Saturday</p>
                <p>10:00 - 22:00</p>
            </div>
            <div className="our-address">
                <p className="footer-heading">Our Address</p>
                <p>Fictional Street, 1000</p>
                <p>Fake Province, Belgium</p>
            </div>
            <div className="copyright">
                <p>© Copyright Atatakai 2023</p>
                <a href="https://www.flaticon.com/free-icons/sushi" target="_blank" rel="noreferrer" title="sushi icons">Sushi icons created by amonrat rungreangfangsai - Flaticon</a>
            </div>
        </footer>
    );
}

export default Footer;