import React from 'react';
import { useSelector } from 'react-redux';

const ToDosList = () => {

    const toDos = useSelector(state => state.toDos)

    console.log(toDos);
    return (
        <ul>
            {
                toDos.map(() => (
                    <li key={toDos.id}>
                        <h3>{toDos.name}</h3>
                        <div><b>Time:</b> {toDos.time}</div>
                    </li>
                ))
            }
        </ul>
    );
};

export default ToDosList;