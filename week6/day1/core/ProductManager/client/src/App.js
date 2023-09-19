import './App.css';
import {Routes,Route} from 'react-router-dom'
import AddProduct from './components/AddProduct';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={< AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
