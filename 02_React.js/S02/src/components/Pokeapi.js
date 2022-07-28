import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokeapi = () => {
    
    const [pokemon, setPokemon] = useState({});
    const [on, setOn] = useState(true);
    const [height,  setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
            .then(res => {
                setPokemon(res.data)
                setHeight(res.data.height)
                setWeight(res.data.weight)
            });
    }, []);

    const convert = () => {
        if(on){
            setHeight(height / 10);
            setWeight(weight / 10);
            setOn(false)
        } else {
            setHeight(height * 10);
            setWeight(weight * 10); 
            setOn(true);   
        }
    }

    console.log(pokemon);

    return (
        <div className='clase9 '>
          <div  className='pokeapi'>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.front_default} width="150px" alt="pokemon" />
                <p><strong>Weight: </strong>{weight} {on? "hectograms." : "kilograms."}</p>
                <p><strong>Height: </strong>{height} {on? "decimeters." : "meters."}</p>
                <p><strong>Type: </strong>{pokemon.types?.[0].type?.name}.</p>
                
                <button onClick={convert}>{on? "Covert to units for defect" : "Covert to decimeters/hectograms"}</button>
           </div>
        </div>
    );
};

export default Pokeapi;