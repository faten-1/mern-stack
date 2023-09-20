import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Dashboard = (props) => {

    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/list')
            .then((res) => {
                setAllAuthors(res.data.allAuthors)
                console.log(allAuthors)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const DeleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
        //--filter
        const filteredAuthor = allAuthors.filter((eachAuthor) => {
            if (eachAuthor._id === authorId) {
                return false
            } else {
                return true
            }
        })
        setAllAuthors(filteredAuthor)
    }

    return (
        <div>

            <h2>We have quotes by </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map((author) => {
                        return (
                            <tr>
                                <td>{author.name}</td>
                                <td className='d-flex justify-content-evenly'>
                                    <Link type="button" className="btn btn-info" to={`/edit/${author._id}`} >Edit</Link>
                                    
                                    <button  onClick={() => { DeleteAuthor(author._id) }}
                                    type="button" className="btn btn-danger">Delete</button>

                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}
