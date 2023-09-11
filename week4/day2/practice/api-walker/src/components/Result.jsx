import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const  Result = (props)  =>{
    const {search,id} = useParams();

    const [result,setResult] = useState({});
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
        .then ((response) => setResult(response.data))
        .catch((err)=> console.log(err))
    }, [search,id])

    //console.log(result)
    if (search === 'people'){
        return (
            <div>
    
            <h1>{result.name}</h1>
            <p><span>Height: </span>{result.height} cm</p>
            <p><span>Mass: </span>{result.mass} kg</p>
            <p><span>Eye Color: </span>{result.hair_color}</p>
            <p><span>Skin Color: </span>{result.skin_color}</p>
    
            </div>
        )
    }
    else if (search === 'planets'){
        return (
            <div>
    
            <h1>{result.name}</h1>
            <p><span>Climate: </span>{result.climate} cm</p>
            <p><span>Terrain: </span>{result.terrain} kg</p>
            <p><span>Surface Water: </span>{result.surface_water}</p>
            <p><span>Population: </span>{result.population}</p>
    
            </div>
        )
    }
    
}

export default Result