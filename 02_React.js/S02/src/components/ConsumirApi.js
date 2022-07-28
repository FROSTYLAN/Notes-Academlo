import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const ConsumirApi = () => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setCharacter(res.data[0]);
        });
    }, []);
    return (
        <div>
            <h1>{character.name}</h1>
            <h2>{character.address?.city}</h2>
        </div>
    );
};

export default ConsumirApi;