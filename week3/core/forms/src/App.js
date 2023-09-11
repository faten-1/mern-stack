import { useState } from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const addNewOne = (onePerson) => {
    console.log(onePerson)
    setSubmitted(true)
    setAllUsers([...allUsers, onePerson])

  }

  return (
    <div className="App">
      <Form addNewOne={addNewOne} />
      <h1>Your data</h1>
      {submitted && (
        <div>
          
          {allUsers.map((user, indx) => (
            <div key={indx}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.confirmPassword}</p>
              
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
