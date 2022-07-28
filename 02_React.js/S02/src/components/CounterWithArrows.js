import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterWithArrows = () => {
    
    const {counter, increment, decrement} = useCounter(0);

    return (
        <div className='clase3'>
            <h2>{counter}</h2>
            <button onClick={decrement}><i className='fa-solid fa-arrow-left'></i></button>
            <button onClick={increment}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    );
};

export default CounterWithArrows;