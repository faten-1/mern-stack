import React, { useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPlayer = () => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [ObjErrors, setObjErrors] = useState({});

    const navigate = useNavigate()


    const SubmitHandler = (e) => {
        e.preventDefault()
        const newPlayer = {
            name,
            position
        }
        axios.post("http://localhost:5000/api/player/new", newPlayer)
            .then((res) => {
                console.log("sucessfully submitted")
                setName("")
                setPosition("")
                navigate('/')

            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data

                const ObjE = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages

                    ObjE[key] = errorResponse[key].message
                    // name        :  "name is required"

                }
                // Set Errors

                setObjErrors(ObjE)
            

            })
    }

    return (
        <div>
            <Header />
            <Menu />
            <h1>Add Player</h1>
            <form className='container text-center' onSubmit={SubmitHandler}>
                <div className="mb-3">
                    <label className="form-label">Player Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    {ObjErrors.name ? <p style={{ color: "red" }} >{ObjErrors.name}</p> : null}
                </div>
                <div className="mb-3">
                    <label className="form-label">Preffered Position:</label>
                    <input
                        type="text"
                        className="form-control"
                        name='position'
                        value={position}
                        onChange={(e) => { setPosition(e.target.value) }}
                    />
                    {ObjErrors.position ? <p style={{ color: "red" }} >{ObjErrors.position}</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default AddPlayer