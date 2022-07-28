import React from 'react';

const ToDosList = ({toDos, removeToDo, selectToDo}) => {
    return (
        <div className='ToDos-container'>
            {toDos.map(toDos => (
                <div className='toDo' key={toDos.id}>
                        <p><b>Título: </b> {toDos.title}</p>
                        <p><b>Descripción: </b> {toDos.description}</p>
                        <p><b>Completado: </b>{toDos.isCompleted ? "si" : "no"}</p>

                    <div className='btn-container'>
                        <button onClick={() => removeToDo(toDos.id)}>
                            Eliminar
                        </button>
                        <button className='blue' onClick={() => selectToDo(toDos)}>
                            Actualizar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ToDosList;