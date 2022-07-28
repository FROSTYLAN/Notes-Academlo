import React, { useState } from 'react';
import users from '../users.json';

const UserC4 = ({changeColor}) => {

    //const userC4 = users[0]
    
    const [userC4, setUser] = useState(users[getRandom()]) 
    const changeUser = () => {
        setUser(users[getRandom()])
    }

    return (
        <>
            
            <h1> {userC4.name.title} {userC4.name.first} {userC4.name.last} </h1>
            <img src={userC4.picture.large} alt="foto de perfil" />
            <li>
                <ul>
                    <i class="fa-solid fa-envelope"></i>
                    {userC4.email}
                </ul>
                <ul>
                    <i class="fa-solid fa-phone"></i>
                    {userC4.phone}
                </ul>
                <ul>
                    <i class="fa-solid fa-location-dot"></i>
                    {userC4.location.country + " "}{userC4.location.city + " "}{userC4.location.state}
                </ul>
            </li>            
            <i className="random fa-solid fa-shuffle" onClick={() => {const f1=changeColor; const f2=changeUser; f1(); f2()}}></i>
        </>
    );
};

const getRandom = () => Math.floor(Math.random() * users.length)

export default UserC4;