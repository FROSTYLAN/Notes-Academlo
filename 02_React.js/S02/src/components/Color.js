import React, { useEffect, useState } from 'react';

const Color = () => {
    const [watch, setWatch] = useState(false);

    const [color, setColor] = useState("blue");
    
    useEffect(() => {

        const mouseMove = e => {
            if (window.innerWidth / 2 > e.x)
                setColor("yellow")
            else {
                setColor("lightblue")
            }
        }

        window.addEventListener('mousemove', mouseMove)
    
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div className='clase3'>
            <button onClick={() => setWatch(!watch)}>
                Mostrar / Ocultar color
            </button>
            
            {watch ? <p className='color-square' style={{background: color}}></p> : null }
        </div>
    );
};

export default Color;