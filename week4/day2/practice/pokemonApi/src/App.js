import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons,setPokemon] = useState([])
  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      return response.json()
      
    }).then(response => {
      setPokemon(response['results'])
  
    })
    .catch(err => {
      console.log(err)
    })
  })
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
