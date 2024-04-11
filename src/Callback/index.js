// Callback.js
import React, { useState } from "react";
import "./index.css"; // Import CSS file

const Callback = () => {
    const [values, setValues] = useState({
        name: "",
        number: ""
    });

    const [message, setMessage] = useState({
        text: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        number: ""
    });

    const changeInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    function Validation(values) {
        let error = {}

        if (values.name === "") {
            error.name = "Name should not be empty";
        } else {
            error.name = "";
        }

        if (values.number === "") {
            error.number = "Phone number should not be empty";
        } else {
            error.number = "";
        }
        return error;
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (values.name !== "" && values.number !== "") {
            setValues({
                name: "",
                number: ""
            });
            setMessage({
                text: "We will get back to you in 24 Hours"
            });
        } else {
            setMessage({
                text: ""
            });
        }
    }

    return (
        <div className="callback-container">
            <form onSubmit={SubmitForm}>
                <h1>Contact Us</h1>
                <input type="text" value={values.name} onChange={changeInput} name="name" placeholder="Name" />
                {errors.name && <p className="error">{errors.name}</p>}
                <input type="tel" value={values.number} onChange={changeInput} name="number" placeholder="Phone Number" />
                {errors.number && <p className="error">{errors.number}</p>}
                <button type="submit">Request Callback</button>
                {message.text && <p className="message">{message.text}</p>}
            </form>
        </div>
    )
}

export default Callback;
