import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DisplayProducts = (props) => {
    const { refreshState } = props
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/product/list')
            .then((res) => {
                setAllProducts(res.data.allProducts)
                console.log(allProducts)
            })
            .catch((err) => { console.log(err) })
    }, [refreshState])
    return (
        <div>
            <h1>All products</h1>
            <ul>
                {allProducts.map((product, index) => {
                    return (
                        <>
                            <p>
                                <Link key={index} to={`/product/${product._id}`} >
                                    {product.title}
                                </Link>
                            </p>
                        </>

                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayProducts