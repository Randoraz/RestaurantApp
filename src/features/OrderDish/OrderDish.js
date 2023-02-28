import React from "react";
import { useDispatch } from "react-redux";
import './OrderDish.css';
import { addDish, removeDish } from "../../store/orderSlice";

export const OrderDish = ({num, dish}) => {
    const dispatch = useDispatch();
    return (
        <div className="dish-order-div">
            <img src={dish.imgIcon} />
            <p>{dish.name}</p>
            <div className="dish-number">
                <button onClick={() => {dispatch(addDish(dish.name))}}>+</button>
                <p>{num || 0}</p>
                <button onClick={() => {dispatch(removeDish(dish.name))}}>-</button>
            </div>
        </div>
    );
};

export default OrderDish;