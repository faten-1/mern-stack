import React from 'react'
import { Dashboard } from '../components/Dashboard'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div><h1>Favorite authors</h1>
            <Link to="/new" >Add an author</Link>
            <Dashboard />
        </div>
    )
}

export default Home