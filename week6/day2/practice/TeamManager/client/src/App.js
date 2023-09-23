import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import Home from './Views/Home';
import PlayersList from './components/PlayersList';
import AddPlayer from './Views/AddPlayer';
import PlayerStatus from './Views/PlayerStatus';



function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Navigate to="/players/list" />}  />
        <Route path='/players/list' element={<Home/>} />
        <Route path='/players/addplayer' element={<AddPlayer/>} />
        <Route path= '/status/game/:gameId' element= {<PlayerStatus />} />
      </Routes>
    </div>
  );
}

export default App;
