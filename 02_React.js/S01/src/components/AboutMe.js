import React from 'react';

const me = {
    name: "Charles",
    age: "18 años",
    movieFav: "Spider-Man",
    musicFav: "Pop"
};

const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <ul>
                <li><b>Nombre: </b>{me.name}.</li>
                <li><b>Edad: </b>{me.age}.</li>
                <li><b>Pelicula favorita: </b>{me.movieFav}.</li>
                <li><b>Musica favorita: </b>{me.musicFav}.</li>
            </ul>           
        </div>
    );
};

export default AboutMe;