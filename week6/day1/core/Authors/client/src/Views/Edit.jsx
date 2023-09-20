import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'

const Edit = (props) => {
    const {id} = useParams()
    const [author,setAuthor] = useState({})

    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});
    const navigate = useNavigate()

    useEffect ( () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setAuthor(res.data)
            setLoaded(true)
            
        })

    },[])

    const updateAuthor = authorParam => {
        axios.put(`http://localhost:8000/api/author/${id}/edit`,authorParam)
        .then(res =>{ 
            console.log(res)
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
            <h1>Favorite author</h1>
            <Link to="/" >Home</Link>
            <h2>Edit this author :</h2>
            {
                loaded && <Form onSubmitProp={updateAuthor} initialName={author.name} errors={ObjErrors} />
            }
            
        </div>
    )
}

export default Edit