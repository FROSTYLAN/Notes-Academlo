import './App.css';
import FreeTime from './components/FreeTime';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import User from './components/User';
import Module from './components/Module';
import Card from './components/Card';
import { useState } from 'react';
import Foco from './components/Foco';
import UserC4 from './components/UserC4';
import users from './users.json'

function App() {

  /* CLASE 2 --> Cambiando nombre con un botón (lin71) */
  const [name, setName] = useState("ariel");
  const changeName = () => {
    setName("Charles")
    //const name = document.getElementById("name");
    //name.textContent="Sebastian";
  }
  /**********************************************/
  const [isVisible, setIsVisible] = useState(false)

  const togglePassword = () => {
    setIsVisible(!isVisible);
  }

  /* EJERCICIO DE LA CLSE 3 -> UN FOCO */
  const [on, setOn] = useState(true)
  const focus = () => {
    setOn(!on);
  }

  /* TAREA DE LA CLASE 3 -> VARIOS FOCOS */
  const [onFocus, setOnFocus] = useState(true)
  const statusFocus = () => {
    setOnFocus(!onFocus);
  }

  /* CLASE 4 --> */
  console.log(users);
  const color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
  const getColor = () => color[Math.floor(Math.random() * color.length)];
  const [colors, setColors] = useState(getColor())
  const changeColor = () => {
    setColors(getColor())
  }

  return (
    <>
      {/*******************************************************************************/}

      {/* clase 2 --> Componentes funcionales props */}

      <div className="container">
        <div><h1>Sobre mi:</h1></div>
        <div className="app">
          <AboutMe />
          <Hobbies />
          <FreeTime />
        </div>{/*******************************************************************************/}
      </div>
      <div className="container">
        <div><h1>Usuarios:</h1></div>
        <div className='app'>
          <User name="Moises" age="23 años" email="moises@gmail.com" />
          <User name="Cristian" age="26 años" email="cristian@gmail.com" />
          <User name="Charles" age="18 años" email="castillo089frosty@gmail.com" />
        </div>
      </div>
      <div className="container">
        <div><h1>Módulos:</h1></div>
        <div className='app'>
          <Module name="React" teacher="Andres" />
          <Module name="Fundamentos" teacher="Brenda" />
        </div>
      </div>

      {/* Tarea de la clase 2 */}

      <div className="container" id='tarea'>
        <div><h1>TAREA:</h1></div>
        <div className="app">
          <AboutMe />
          <Card title="Pasatiempo" item1="Programar." item2="Tocar guitarra." item3="Puzzles" background={'blue'} />
          <Card title="Tiempo Libre" item1="Música." item2="Gimnasio." item3="Videojuegos." background={'darkorange'} />
        </div>
        <div className="espacio"></div>
        <div className="app">
          <Card title="Comida Favorita" item1="Pizza." item2="Arroz chaufa." item3="Pollo a la brasa." background={'darkcyan'} />
          <Card title="Tecnologías" item1="HTML" item2="CSS" item3="JavaScript" background={'greenyellow'} />
        </div>
      </div>

      {/*******************************************************************************/}

      {/* Clase 3 --> ejemplo useState - Cambiando nombre con botón  */}

      <div className="container" id='clase3'>
        <div><h1>Clase 2: hooks-useState</h1></div>

        <h2>ejemplo 1:</h2>
        <div className="app">
          <h3>{name}</h3>
          <button class="boton1" onClick={changeName}>Cambiar nombre (sin regreso)</button>
        </div>

        <h2>ejemplo 2:</h2>
        <div className="app">
          <label htmlFor="password">Contraseña:</label>
          <input type={isVisible ? "text" : "password"} id='password' />
          <button onClick={togglePassword}>
            {isVisible ? "Ocultar comntraseña" : "Mostrar contraseña"}
          </button>
        </div>
      </div>

      {/* Ejercicio de la clase 3 --> Preder y apagar foco */}

      <div className="container exerciseFocus">
        <h2>Ejercicio:</h2>
        <div className="app">
          <div className='foco' style={{
            backgroundPosition: on ? "0%" : "93.6%",
            width: "270px",
            height: "400px"
          }}>
          </div>
          <button className='botonFoco' onClick={focus}>
            {on ? "PRENDER FOCO" : "APAGAR FOCO"}
          </button>
        </div>
      </div>

      {/* TAREA CLASE 3 -> FOCOS INTERCONECTADOS */}
      <div className="container exerciseFocus">
        <h2>Tarea:</h2>
        <div className="app">
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
        </div>
        <div className="app">
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
        </div>
        <div className="app">
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
        </div>
        <div className="app">
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
          <Foco onFocus={onFocus} onClick={statusFocus} />
        </div>
      </div>

      {/*******************************************************************************/}

      {/* Clase 4 --> ejemplo useState - Cambiando nombre con botón  */}

      <div className="container">
        <div><h1>Clase 4: Repaso useState</h1></div>
        <div className="app clase4" style={{ backgroundColor: colors }}>
          <UserC4 changeColor={changeColor} />
        </div>
      </div>

    </>
  );
};

export default App;