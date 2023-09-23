import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to={'/'}> Manage Players</Link>
            |
            <Link to={'/status/game/1'}>Manage Players Status</Link>
        </div>
    )
}

export default Header