import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const {refresh} = props 

    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newProduct = {
            title,
            price,
            description
        }
        axios.post("http://localhost:5000/api/product", newProduct)
            .then((res) => {
                console.log("sucessfully submitted")
                setTitle("")
                setPrice(0)
                setDescription("")
                refresh()
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                const ObjE = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                    ObjE[key] = errorResponse[key].message
                    // name        :  "name is required"

                }
                // Set Errors
                setErrors(errorArr);
                setObjErrors(ObjE)
                console.log(errors)

    })
}

    return (
        <div>
            <h1>Product Manager</h1>

            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={(title)}
                    />
                    {ObjErrors.title ? <p style={{ color: "red" }} >{ObjErrors.title}</p> : null}
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type='number'
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        value={(price)}
                    />
                    {ObjErrors.price ? <p style={{ color: "red" }}>{ObjErrors.price}</p> : null}
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type='text'
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={(description)}
                    />
                    {ObjErrors.description ? <p style={{ color: "red" }}>{ObjErrors.description}</p> : null}
                </div>
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}

export default AddProduct