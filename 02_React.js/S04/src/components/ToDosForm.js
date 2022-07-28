import React, { useEffect, useState } from 'react';

const ToDosForm = ({addToDo, toDoEdit, selectToDo, updateToDo}) => {

    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ isCompleted, setIsCompleted ] = useState(false);

    const reset = () => {
        setTitle("");
        setDescription("");
        setIsCompleted(false);
    }

    useEffect (() => {
        if (toDoEdit){
            setTitle(toDoEdit.title);
            setDescription(toDoEdit.description);
            setIsCompleted(toDoEdit.isCompleted);
        } else{
            reset();
        }
    },[toDoEdit])

    const submit = e => {
        e.preventDefault();
        const data = {
            title,
            description,
            isCompleted
        }
        if (toDoEdit) {
            data.id = toDoEdit.id;
            updateToDo(data);
        } else {
            addToDo(data);
        }
        reset();
        
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className='input-container'>
                    <label htmlFor="title">Título</label>
                    <input 
                        type="text" 
                        id='title'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="description">Descripción</label>
                    <textarea 
                        cols="25" 
                        rows="3"
                        id='description'
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        >
                    </textarea>
               </div>

               <div className='input-container'>
                    <label htmlFor="isCompleted">Completado</label>
                    <input 
                        type="checkbox"
                        id='isCompleted'
                        onChange={e => setIsCompleted(e.target.checked)}
                        checked={isCompleted}
                    />
               </div>
                
                <div className='btn-container'>
                    <button className='green'>Submit</button>
                    {toDoEdit && 
                        <button onClick={() => selectToDo(null)}>
                            Cancelar
                        </button> 
                    }
                </div>
            </form>
        </div>
    );
};

export default ToDosForm;