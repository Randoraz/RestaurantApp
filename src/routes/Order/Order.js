import React from "react";
import './Order.css';

export const Order = () => {
    return (
        <div className="order">
            <h2>Place your order now!</h2>
            <form>
                <label for="street-address">Street Address</label>
                <br></br>
                <input id="street-address" type="text"></input>
                <br></br>
                
                <label for="postal-code">Postal Code</label>
                <br></br>
                <input id="postal-code" type="number"></input>
                <br></br>

                <label for="city">City</label>
                <br></br>
                <input id="city" type="text"></input>
            </form>
        </div>
    );
};

export default Order;