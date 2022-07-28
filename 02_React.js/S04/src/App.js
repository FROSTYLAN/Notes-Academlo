import { useEffect, useState } from 'react';
import './App.css';
import ToDosForm from './components/ToDosForm';
import ToDosList from './components/ToDosList';
import axios, { Axios } from 'axios';

function App() {

  // ESTADO PRINCIPAL
  const [toDos, setToDos] = useState([])
  const [toDoEdit, setToDoEdit] = useState(null);

  useEffect(() => {
    getToDos();
  }, []);

  const getToDos = () => {
    axios.get('https://todo-app-academlo.herokuapp.com/todos/')
      .then(res => setToDos(res.data));
  }

  const addToDo = toDo => {
    axios.post('https://todo-app-academlo.herokuapp.com/todos/', toDo)
      .then(() => getToDos());
      //setToDos([...toDos, toDo]);
  }

  const removeToDo = id => {
    axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
      .then(() => getToDos());
    //const index = toDos.findIndex(toDo => toDo.id === id);
    //toDos.splice(index,1);
    //setToDos([...toDos])
    //setToDos(toDos.filter(product => product.id !== id)); //Se puede usar este método xq no muta.
  }

  const selectToDo = toDo => {
    setToDoEdit(toDo);
  }

  const updateToDo = toDoInfo => {
    axios.put(`https://todo-app-academlo.herokuapp.com/todos/${toDoInfo.id}/`, toDoInfo)
      .then(() => {
        getToDos();
        selectToDo(null);
       });
    //const index = toDos.findIndex(toDo => toDo.id === toDoInfo.id) //Detecta a quien va a actualizar.
    //toDos[index] = toDoInfo;
    //setToDos ([...toDos])
  }

  return (
    <div>

      <h1>TO DO</h1>

      <ToDosForm 
        addToDo={addToDo} 
        toDoEdit={toDoEdit} 
        selectToDo={selectToDo} 
        updateToDo={updateToDo} 
      />

      <ToDosList 
        toDos={toDos} 
        removeToDo={removeToDo} 
        selectToDo={selectToDo} 
      />
    </div>
  );
}

export default App;
