import React from 'react';

const Foco = ({width, height, onFocus, onClick}) => {

    return (
        <>
            <div className='foco' style={{ 
                backgroundPosition: onFocus ? "0%" : "93.6%", 
                width: width,
                height: height 
                }}>
            </div>
            <button className='botonFoco' onClick= {onClick}>
                on/off
            </button>
        </>
    );
};

export default Foco;