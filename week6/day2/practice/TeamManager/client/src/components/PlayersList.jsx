import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import axios from 'axios'

const PlayersList = () => {

    const [allPlayers, setAllPlayers] = useState([])

    const [deleteConfirmation, setDeleteConfirmation] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/api/player/list')
            .then((res) => {
                setAllPlayers(res.data.allPlayers)
                console.log(allPlayers)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const Delete = (id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete')
        if (isConfirmed) {
            axios.delete(`http://localhost:5000/api/player/${id}`)
            //--filter
            const filteredPlayers = allPlayers.filter((eachPlayer) => {
                if (eachPlayer._id === id) {
                    return false
                } else {
                    return true
                }
            })
            setAllPlayers(filteredPlayers)
        }
        else {
            setDeleteConfirmation(null)
        }
        
    }

    return (
        <div>
            <Menu />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Prefered Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map((player,index) => {
                        return (
                            <tr key={index}>
                                <td >{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                <button onClick={() => { Delete(player._id) }}>Delete</button>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default PlayersList