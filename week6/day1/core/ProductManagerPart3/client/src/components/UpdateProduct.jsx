import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then(res => {
                console.log(res.data)
                const { title, price, description } = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)

            })
            .catch((err => console.log(err)))
    }, [])

    const UpdateHandler = (e) => {
        e.preventDefault()
        const newProduct = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:5000/api/product/${id}`, newProduct)
            .then(res => {
                console.log("Successfully Updates ✅✅✅")
                navigate("/")
            })
            .catch((err => console.log(err)))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={UpdateHandler} >
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
                <input type='submit' value='Edit ' />
            </form>
        </div>
    )

}
export default UpdateProduct