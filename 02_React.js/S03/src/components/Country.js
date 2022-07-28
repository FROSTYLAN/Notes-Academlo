import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = () => {

    const [country, setCountry] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [selected, setSelected] = useState("demography")

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/PE')
            .then(res => {
                setCountry(res.data[0]);
                setIsLoading(false);
            });
    }, [])

    console.log(country);

    return (
        <>
            { isLoading ? (
                    <p className='loading'>obtaining information...</p>
                ) : (
                    <div className='Country'>
                        <h1>{country.name?.official}</h1>
                        <img src={country.flags?.png} alt="" />        

                        <button onClick={() => setSelected("demography")}>Demography</button>
                        <button onClick={() => setSelected("location")}>Location</button>
                        <button onClick={() => setSelected("capital")}>Capital</button>

                        {selected === "demography" ? (
                            <>
                                <h3>Demography</h3>
                                <p><b>Population: </b>{country.population}.</p>
                                <p><b>Area: </b>{country.area}.</p>
                            </>
                        ) : (
                            selected === "location" ? (
                                <>
                                    <h3>Location</h3>
                                    <p><b>Continent: </b>{country.continents}.</p>
                                    <p><b>Region: </b>{country.region}.</p>
                                    <p><b>Subregion: </b>{country.subregion}.</p>
                                </>
                            ) : (
                                selected === "capital" ? (
                                    <>
                                        <h3>Capital</h3>
                                        <p><b>Capital: </b>{country.capital}.</p>
                                    </>
                                ) : (
                                    null
                                )
                            )
                        )}
                    </div> 
                )
            }
        </>
    );
};

export default Country;