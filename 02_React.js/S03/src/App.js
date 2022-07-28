import './App.css';
import Country from './components/Country';
import React, { useState } from 'react';
import InputController from './components/InputController';
import Users from './components/Users';

function App() {

  const [view, setView] = useState(true)

  return (
    <div className="App">
      <h1>CLASE 11</h1>
      <button className='boton' onClick={() => setView(!view)}>Mostrar/Ocultar país</button>
      {view === true && <Country />}

      <h1>CLASE 12</h1>
      <p>Explican como se puede realizar el ejercicio anterior con if else y switch.</p>
    <InputController />

      <h1>CLASE 13</h1>
      <p>Lista y keys.</p>
      <Users />
      </div>
  );
}

export default App;
