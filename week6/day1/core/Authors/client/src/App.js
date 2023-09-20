import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './Views/Home';
import NewAuthor from './Views/NewAuthor';
import Edit from './Views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>} /> 
        <Route path='/new' element = {<NewAuthor/>} />
        <Route path='/edit/:id' element = {<Edit/>} />
        

      </Routes>
    </div>
  );
}

export default App;
