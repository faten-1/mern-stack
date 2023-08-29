import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'


const Home = () => {
  return (
    <h1>Welcome</h1>
  )
}

const Parameter = () => {

  const { parameter } = useParams()
  if (isNaN(parameter)) {
    return <h1>The world is : {parameter}</h1>
  } else {
    return (
      <h1>The number is {parameter}</h1>
    )
  }
}


const StyledWorld = () => {
  const {world,color,bgColor} = useParams()

  const styles =  {
    color : color ,
    backgroundColor : bgColor ,
  }

  return (
    <h1 style={styles}> The world is {world}</h1>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:world/:color/:bgColor" element={<StyledWorld/>} />
        <Route path="/:parameter" element={<Parameter />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
