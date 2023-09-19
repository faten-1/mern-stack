import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (prop) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

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
            })
            .catch (err => {console.log(err)})
    }

    return (
        <div>
            <h1>Product Manager</h1>
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
                </div>
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}

export default AddProduct