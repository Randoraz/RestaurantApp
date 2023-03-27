import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipesSlice";
import { selectCurrentOrder, addOrder, addAddress } from "../../store/orderSlice";
import './Order.css';
import OrderDish from "../../features/OrderDish/OrderDish";

export const Order = () => {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [request, setRequest] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(false);

    const dispatch = useDispatch();

    const dishes = useSelector(selectRecipes);
    const order = useSelector(selectCurrentOrder);

    const handleNameOnChange = (e) => {
        setName(e.target.value);
    };

    const handleStreetOnChange = (e) => {
        setStreet(e.target.value);
    };

    const handlePostalCodeOnChange = (e) => {
        setPostalCode(e.target.value);
    };

    const handleCityOnChange = (e) => {
        setCity(e.target.value);
    };

    const handleRequestOnChange = (e) => {
        setRequest(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.getElementById('order-form');
        if(!form.checkValidity()) {
            form.reportValidity();
            return;
        };

        dispatch(addAddress({
            name: name,
            street: street,
            postalCode: postalCode,
            city: city,
            request: request
        }));
        dispatch(addOrder());
        setOrderSuccess(true);
    };

    return (
        <div className="order">
            <h2>Place your order now!</h2>
            <form id="order-form" onSubmit={handleSubmit}>
                <h3>Select your food</h3>

                <ol className="dishes-list-div">
                {dishes.map((dish, index) => {
                    return (
                        <OrderDish num={order[dish.name]} dish={dish} key={`${dish.name}${index}`} />
                    );
                })}
                </ol>

                {orderSuccess && <p className="success-message">Your order was made!</p>}

                <h3>Fill in your information and address</h3>

                <label htmlFor="name">Name</label>
                <br></br>
                <input id="name" type="text" onChange={handleNameOnChange} value={name} required></input>
                <br></br>

                <label htmlFor="street-address">Street Address</label>
                <br></br>
                <input id="street-address" type="text" onChange={handleStreetOnChange} value={street} required></input>
                <br></br>
                
                <label htmlFor="postal-code">Postal Code</label>
                <br></br>
                <input id="postal-code" type="number" onChange={handlePostalCodeOnChange} value={postalCode} required></input>
                <br></br>

                <label htmlFor="city">City</label>
                <br></br>
                <input id="city" type="text" onChange={handleCityOnChange} value={city} required></input>
                <br></br>

                <label htmlFor="request">Especial Requests</label>
                <br></br>
                <textarea id="request" onChange={handleRequestOnChange} value={request}></textarea>
                <br></br>

                <button type="submit" className="submit-order-button" onClick={handleSubmit}>Place order</button>
            </form>
        </div>
    );
};

export default Order;