import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectFreeTables, addReservation } from "../../store/reservationsSlice";
import './Reservations.css';

export const Reservations = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [reservationSuccess, setReservationSuccess] = useState(false);

    const dispatch = useDispatch();

    const freeTables = useSelector(selectFreeTables);

    useEffect(() => {
        document.getElementById('date').min = new Date().toISOString().split("T")[0];
    }, []);

    const handleNameOnChange = (e) => {
        setName(e.target.value);
    };

    const handleNumberOnChange = (e) => {
        setNumber(e.target.value);
    };

    const handleDateOnChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeOnChange = (e) => {
        setTime(e.target.value);
    };

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('reservation-form');
        if(!form.checkValidity()) {
            form.reportValidity();
            return;
        };

        const newReservation = {
            name: name,
            numberOfPeople: number,
            date: date,
            time: time,
            email: email
        };

        dispatch(addReservation(newReservation));
        setReservationSuccess(true);
    };

    return (
        <div className="reservations">
            <h2>Make your reservation now!</h2>
            {reservationSuccess && <p className="success-message">Your reservation was made!</p>}
            <form id="reservation-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <br></br>
                <input id="name" type="text" onChange={handleNameOnChange} value={name} required></input>
                <br></br>
                
                <label htmlFor="number-of-people">Number of People</label>
                <br></br>
                <input id="number-of-people" type="number" onChange={handleNumberOnChange} value={number} required></input>
                <br></br>

                <label htmlFor="date">Date</label>
                <br></br>
                <input id="date" type="date" onChange={handleDateOnChange} value={date} required></input>
                <br></br>

                <label htmlFor="time">Time (Open hours: 10:00 to 22:00)</label>
                <br></br>
                <input id="time" type="time" onChange={handleTimeOnChange} value={time} min="10:00" max="21:00" required></input>
                <br></br>

                <label htmlFor="email">Email</label>
                <br></br>
                <input id="email" type="email" onChange={handleEmailOnChange} value={email} required></input>
                <br></br>

                <button type="submit" className="submit-order-button" onClick={handleSubmit}>Reserve</button>
            </form>
        </div>
    );
};

export default Reservations;