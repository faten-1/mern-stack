import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './Views/Main';
import OneProductDisplay from './components/OneProductDisplay';
import UpdateProduct from './components/UpdateProduct';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={< Main />} />
        <Route path = "/product/:id" element ={< OneProductDisplay />} />
        <Route path="/product/:id/edit" element={<UpdateProduct />} />
        
      </Routes>
    </div>
  );
}

export default App;
