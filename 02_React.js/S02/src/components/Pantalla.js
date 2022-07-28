import React, { useEffect, useState } from 'react';

const Pantalla = () => {

    const [view, setView] = useState(false);
    const [screenSize, setScreenSize] = useState("Pantalla grande");
    
    useEffect(() => {

        const resize = () => {
            if (window.innerWidth > 500) {
                setScreenSize("Pantalla grande")
            } else {
                setScreenSize("Pantalla pequeña")
            }
        }

        window.addEventListener('resize', resize)

        return() =>{
            window.removeEventListener('resize', resize);
        }

    },[]);

    return (
        <div className='clase3'>
            <button onClick={() => setView(!view)}>Mostrar / Ocultar pantalla</button>
            {view ? <h2>{screenSize}</h2> : null}
        </div>
    );
};

export default Pantalla;