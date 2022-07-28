import React from 'react';

const Module = ({name, duration="7 semanas", teacher}) => {
    return (
        <div className='Module'>
            <h3>{name}</h3>
            <div>{duration}</div>
            <div>{teacher}</div>
        </div>
    );
};

export default Module;