import React from 'react';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';

const BreakingBad = () => {

    const {counter, decrement, increment} = useCounter(0);
    const [response] = useFetch('https://breakingbadapi.com/api/quotes', counter);

    return (
        <div className='clase3'>
            <h3>{response?.quote}</h3>
            <button onClick={decrement}><i className='fa-solid fa-arrow-left'></i></button>
            <button onClick={increment}><i className='fa-solid fa-arrow-right'></i></button>
        </div>
    );
};

export default BreakingBad;