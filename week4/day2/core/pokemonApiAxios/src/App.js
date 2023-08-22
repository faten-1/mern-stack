import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [pokemons,setPokemon] = useState([])
  useEffect( () => {

    Axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      
      setPokemon(response.data.results)
  
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      {/*<button onClick={fetchPokemon}>
        Fetch Pokemon
  </button>*/}
      <ul>
        {pokemons.map((pok,index) =>{
          return <li key={index}>{pok.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
