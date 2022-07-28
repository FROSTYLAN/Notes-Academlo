import React, { useState } from 'react';

const counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Renderizado condicional con &&</h1>
            <p>Para cuando quieres mostrar algo si ocurre algo, de lo contrario no mostrar nada.</p>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

            { counter % 2 === 0 ? (
                <p>El número es par.</p>
            ) : (
                counter % 3 === 0 ? (
                    <p>Es múltiplo de 3.</p>
                ) : (
                    counter % 5 === 0 ? (
                        <p>Es múltiplo de 5.</p>
                    ) : (
                        <p>No es múltiplo de 2, 3 ni 5.</p>
                    )
                )
            )}
        </div>
    );
};

export default counter;