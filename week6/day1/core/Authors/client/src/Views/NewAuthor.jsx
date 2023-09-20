import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const NewAuthor = () => {

    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});


    const createAuthor = auhtorParam => {
        axios.post('http://localhost:8000/api/author/new', auhtorParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                navigate('/')

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
            <h2>Add a new Author :</h2>
            <Form onSubmitProp={createAuthor} initialName="" errors={ObjErrors} />

        </div>
    )
}

export default NewAuthor