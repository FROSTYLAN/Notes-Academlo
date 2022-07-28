import React, { useEffect } from 'react';

const Image = () => {

    useEffect (() => {

        console.log("El componente se está montando");

        return() => {
            console.log("El componente se está desmontado");
        }
    }, [])
    return (
        <img width="300px" src="https://okdiario.com/img/2020/11/11/alimentar-a-un-pollito-655x368.jpg" alt="pollito" />
    );
};

export default Image;