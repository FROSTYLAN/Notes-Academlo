import React from 'react';

const User = ({ name, age, email}) => {
    return (
        <div className='User'>
            <h3>{name}</h3>
            <div>{age}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;