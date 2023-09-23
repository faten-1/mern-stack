import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Link to={'/'}>List</Link>
            |
            <Link to={'/players/addplayer'}>Add Player</Link>
        </div>
    )
}

export default Menu