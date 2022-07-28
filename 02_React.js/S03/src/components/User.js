import React from 'react';

const User = ({user}) => {
    return (
        <div className='user'>
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <img src={user.picture.large} alt="foto de perfil" />
        </div>
    );
};

export default User;