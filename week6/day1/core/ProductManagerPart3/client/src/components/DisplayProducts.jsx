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

    const DeleteOneProduct = (productId) => {
        axios.delete(`http://localhost:5000/api/product/${productId}`)
        //--filter
        const filteredProducts = allProducts.filter((eachProduct) => {
            if (eachProduct._id === productId) {
                return false
            } else {
                return true
            }
        })
        setAllProducts(filteredProducts)
    }
        return (
            <div>
                <h1>All products</h1>
                <table>

                    {allProducts.map((product) => {
                        return (

                            <tr>
                                <td>
                                    <Link to={`/product/${product._id}`} >
                                        {product.title}
                                    </Link>
                                </td>
                                <td >
                                    <Link to={`/product/${product._id}/edit`} >Edit</Link>
                                </td>
                                <td >
                                    <button onClick={() => { DeleteOneProduct(product._id) }}>Delete</button>
                                </td>

                            </tr>

                        )
                    })}
                </table>
            </div>
        )
    }

    export default DisplayProducts