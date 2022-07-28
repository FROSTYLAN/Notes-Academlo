import React, { useState } from 'react';
import Image from './Image';

const Chicken = () => {

    const [ isShowing, setIsShowing ] = useState(false);


    return (
       
        <div className='clase2'>
            <button onClick={() => setIsShowing(!isShowing)}>Mostrar pollito / Ocultar pollito</button>
            <div>
                {isShowing ?
                    <Image />
                    :
                    <h4>NO HAY POLLITO</h4> 
            }
            </div>
        </div>
    );
};

export default Chicken;