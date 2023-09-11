import './App.css';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Result from './components/Result'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Form /> 
        <Routes>
          <Route path="/:search/:id" element={<Result/>}/>
  
        </Routes>
        </BrowserRouter>

    </div>



  );
}

export default App;
