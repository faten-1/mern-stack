import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProductDisplay = (props) => {
    const [product,setProduct] = useState ({})
    const {id} = useParams(props)

    useEffect ( ()=> {
        axios.get('http://localhost:5000/api/product/'+ id)
        .then (res => {
            setProduct(res.data)
        })
        .catch (err => {console.log(err)});
    },[])
    return (
        <div>
            <h1>{product.title}</h1>
            <h2> Price : {product.price}</h2>
            <p>Description : {product.description}</p>
        </div>
    )
}

export default OneProductDisplay