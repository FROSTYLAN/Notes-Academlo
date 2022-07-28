import React, { useState } from 'react';

const InputController = () => {

    const [ value, setValue] = useState("")

    return (
        <div className='clase12'>
            <input 
                type="text" 
                onChange={e => setValue(e.target.value)} 
                // value={value}
                placeholder= "Esto es un placeholder"   
            />
            <h2>El valor del value es:</h2>
            <p>{value}</p>
        </div>
    );
};

export default InputController;