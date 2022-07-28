import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {

    const [user, setUser] = useState({});

    useEffect( () => {
        changeUser()
    }, []);

    const changeUser = () => {
        axios.get('https://randomuser.me/api/')
            .then(res => setUser(res.data.results[0]))
    }
    return (
        <div className='clase2'>
            <h1>{user.name?.title} {user.name?.first} {user.name?.last}</h1>
            <img src={user.picture?.large} alt=""/>
            <p>{user.email}</p>
            <p>{user.location?.country}, {user.location?.state}, {user.location?.city}</p>
            <p>{user.phone}</p>
            <button onClick={changeUser}>Change user</button>

            { user.gender === 'female' ? <h4>Es mujer</h4> : <h4>Es hombre</h4>} {/* condicional */}

        </div>
    );
};

export default User;