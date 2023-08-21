import React, { useState } from 'react';



const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false


    // Validation states
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateForm = () => {
        let isValid = true;

        // Validate First Name
        if (firstName.trim() === "") {
            setFirstNameError("First name is required");
            isValid = false;
        } else {
            if (firstName.length < 2) {
                setFirstNameError("first name must at least 2 characters  ");
                isValid = false
            } else {
                setFirstNameError("");
            }

        }

        // Validate Last Name
        if (lastName.trim() === "") {
            setLastNameError("Last name is required");
            isValid = false;
        } else {
            if (lastName.length < 2) {
                setLastNameError("last name must at least 2 characters ");
                isValid = false

            } else {
                setLastNameError("");
            }

        }

        // Validate Email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Invalid email address");
            isValid = false;
        } else {
            if (email.length < 2) {
                email("email must at least 2 characters ");
                isValid = false
            } else {
                setEmailError("");
            }

        }

        // Validate Password
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            isValid = false;
        } else {
            setPasswordError("");
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        return isValid;
    };



    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object
        if (validateForm()) {
            const newUser = { firstName, lastName, email, password, confirmPassword };
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            // updating state will change the message to be displayed in the form
            setHasBeenSubmitted(true);
        }



    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };




    return (
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                <label>firstName: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {firstNameError && <p className='error' >{firstNameError}</p>}
            </div>
            <div>
                <label>lastname: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {lastNameError && <p className='error' >{lastNameError}</p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p className='error' >{emailError}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <p className='error' >{passwordError}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {confirmPasswordError && <p className='error' >{confirmPasswordError}</p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};


export default UserForm;