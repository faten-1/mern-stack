import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MenuStatus from '../components/MenuStatus'
import axios from 'axios'
import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'
import "../App.css";

const PlayerStatus = () => {

    const [allPlayers, setAllPlayers] = useState([])
    const { gameId } = useParams();
    const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] =
        useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/api/player/list')
            .then((res) => {
                setAllPlayers(res.data.allPlayers)
                console.log(allPlayers)
            })
            .catch((err) => { console.log(err) })
    }, [triggerGetAllRequestDummy])

    const handleChangeGameStatus = (idFromBelow, newStatus) => {

        axios.get(`http://localhost:5000/api/player/${idFromBelow}`)
        .then((res) => {
            const player = res.data;
            const putData = { ...player };
        
        if (gameId === "1") {
            putData.gameStatus.gameOne = newStatus
        } else if (gameId === "2") {
            putData.gameStatus.gameTwo = newStatus 
        } else if (gameId === "3") {
            putData.gameStatus.gameThree = newStatus 
        }
    
        
        axios.put(`http://localhost:5000/api/player/${idFromBelow}/edit`, putData)
            .then((response) => {
                setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy)

            })
            .catch((err) => { console.log(err.response) })
        
    })
}


    const renderGameStatusButtons = (player, gameKey) => {
        return (
            <>


                <button
                    className={`${player.gameStatus[gameKey] === 'Playing'
                        ? "green-playing-btn" : ""}`}
                    onClick={() => handleChangeGameStatus(player._id, "Playing")}

                >
                    Playing
                </button>

                <button
                    className={`${player.gameStatus[gameKey] === 'Not Playing'
                        ? "red-not-playing-btn" : ""}`}
                    onClick={() => handleChangeGameStatus(player._id, "Not Playing")}>
                    Not Playing
                </button>

                <button
                    className={`${player.gameStatus[gameKey] === 'Undecided'
                        ? "yellow-undecided-btn" : ""}`}
                    onClick={() => handleChangeGameStatus(player._id, "Undecided")}>
                    Undecided
                </button>

            </>)
    }




    return (
        <div>
            <Header />
            <MenuStatus gameId={gameId} />
            <h1>Player Status - Game {gameId}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>

                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map((player) => {
                        return (
                            <tr key={player._id}>
                                <td >{player.name} </td>
                                <td>
                                    {gameId === "1" ? (
                                        renderGameStatusButtons(player, 'gameOne')
                                    ) : null}
                                    {gameId === "2" ? (
                                        renderGameStatusButtons(player, 'gameTwo')
                                    ) : null}
                                    {gameId === "3" ? (
                                        renderGameStatusButtons(player, 'gameThree')
                                    ) : null}
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default PlayerStatus