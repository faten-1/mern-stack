import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
 // Track form submission

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,// username:username
            lastName,
            email,
            password,
            confirmPassword
        }
        
        
        props.addNewOne(newUser)

        
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        
    }



    
        

    
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input
                        type='text'
                        onChange={(e) => setFirstName(e.target.value)} 
                        value={firstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type='text'
                        
                        onChange={(e) => setLastName(e.target.value)} 
                        value={lastName}/>
                </div>
                <div>
                    <label>Email Address:</label>
                    <input
                        type='email'
            
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type='password'
                        
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type='password'
                        
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        value={confirmPassword}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            {/* how to display the data */}
            



            

        </div>
    )
}

export default Form;