import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRecipes } from "../../store/recipesSlice";
import { selectCurrentOrder, addOrder, addAddress } from "../../store/orderSlice";
import './Order.css';
import OrderDish from "../../features/OrderDish/OrderDish";

export const Order = () => {
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');

    const dispatch = useDispatch();

    const dishes = useSelector(selectRecipes);
    const order = useSelector(selectCurrentOrder);

    const handleStreetOnChange = (e) => {
        setStreet(e.target.value);
    };

    const handlePostalCodeOnChange = (e) => {
        setPostalCode(e.target.value);
    };

    const handleCityOnChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddress({
            street: street,
            postalCode: postalCode,
            city: city
        }));
        dispatch(addOrder());
    };

    return (
        <div className="order">
            <h2>Place your order now!</h2>
            <form onSubmit={handleSubmit}>
                <h3>Select your food</h3>

                <ol className="dishes-list-div">
                {dishes.map((dish, index) => {
                    return (
                        <OrderDish num={order[dish.name]} dish={dish} key={`${dish.name}${index}`} />
                    );
                })}
                </ol>

                <h3>Fill in your address</h3>

                <label htmlFor="street-address">Street Address</label>
                <br></br>
                <input id="street-address" type="text" onChange={handleStreetOnChange} value={street}></input>
                <br></br>
                
                <label htmlFor="postal-code">Postal Code</label>
                <br></br>
                <input id="postal-code" type="number" onChange={handlePostalCodeOnChange} value={postalCode}></input>
                <br></br>

                <label htmlFor="city">City</label>
                <br></br>
                <input id="city" type="text" onChange={handleCityOnChange} value={city}></input>
                <br></br>

                <button type="submit" className="submit-order-button" onClick={handleSubmit}>Place order</button>
            </form>
        </div>
    );
};

export default Order;