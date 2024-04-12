// Callback.js
import React, { useState } from "react"; // Import React library
import "./index.css"; // Import CSS file

// Functional component Callback
const Callback = () => {
    // State variables for input values, error messages, and success message
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

    // Function to handle input changes
    const changeInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    // Function to validate input values
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

    // Function to handle form submission
    const SubmitForm = (e) => {
        e.preventDefault();
        setErrors(Validation(values)); // Validate input values
        if (values.name !== "" && values.number !== "") {
            setValues({
                name: "",
                number: ""
            });
            setMessage({
                text: "We will get back to you in 24 Hours" // Display success message
            });
        } else {
            setMessage({
                text: "" // Clear success message
            });
        }
    }

    return (
        <div className="callback-container">
            {/* Callback form */}
            <form onSubmit={SubmitForm}>
                <h1>Contact Us</h1>
                {/* Input fields for name and phone number */}
                <input type="text" value={values.name} onChange={changeInput} name="name" placeholder="Name" />
                {errors.name && <p className="error">{errors.name}</p>}
                <input type="tel" value={values.number} onChange={changeInput} name="number" placeholder="Phone Number" />
                {errors.number && <p className="error">{errors.number}</p>}
                {/* Submit button */}
                <button type="submit">Request Callback</button>
                {/* Success message */}
                {message.text && <p className="message">{message.text}</p>}
            </form>
        </div>
    )
}

export default Callback; // Export the Callback component
