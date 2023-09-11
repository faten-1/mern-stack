import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'



const Form = (props) => {
    const [search, setSearch] = useState("people")
    const [id, setId] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault();
        navigate(`/${search}/${id}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search for : </label>
                <select onChange={(e) => setSearch(e.target.value)}>
                    <option value='---' >---</option>
                    <option value='people'>People</option>
                    <option  value='planets'> Planets</option>
                </select>
            </div>

            <div>
                <label>ID: </label>
                <input type='text' onChange={(e) => setId(e.target.value)} />
            </div>

            <button >Search</button>
        </form>
    )
}

export default Form