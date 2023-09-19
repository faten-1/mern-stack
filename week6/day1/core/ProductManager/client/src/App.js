import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './Views/Main';
import OneProductDisplay from './components/OneProductDisplay';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={< Main />} />
        <Route path = "/product/:id" element ={< OneProductDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
