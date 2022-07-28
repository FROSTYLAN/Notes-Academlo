import React from 'react';

const Card = ({title, item1, item2, item3, background}) => {
    return (
        <div className='Card' style={{backgroundColor: background}}>
            <h2>{title}:</h2>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>
    );
};

export default Card;