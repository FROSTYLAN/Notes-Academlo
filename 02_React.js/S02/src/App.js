import './App.css';
import ConsumirApi from './components/ConsumirApi';
import Counter from './components/Counter';
import User from './components/User';
import Chicken from './components/Chicken';
import Color from './components/Color';
import Pantalla from './components/Pantalla';
import CounterWithArrows from './components/CounterWithArrows';
import BreakingBad from './components/BreakingBad';
import Pokeapi from './components/Pokeapi';

function App() {
  return (
    <div className="App">
      <h1>CLASE 6</h1>
      <Counter /> {/* clase 6 */}
      <ConsumirApi /> {/* clase 6 */}

      <h1 className='clase2'>CLASE 7</h1>
      <User /> {/* clase 7 */}
      <Chicken /> {/* clase 7 */}

      <h1 className='clase3'>CLASE 8</h1>
      <h2 className='clase3'><strong>RENDERIZADO CONDICIONAL, CLEAN UP</strong></h2>
      <Color /> {/* Clase 8 */}
      <Pantalla /> {/* Clase 8 */}
      <h2 className='clase3'><strong>HOOKS PERSONALIZADOS</strong></h2>
      <CounterWithArrows /> {/* Clase 8 */}
      <BreakingBad /> {/* Clase 8 */}

      <h1 className='clase9'> CLASE 9 </h1>
      <Pokeapi />

      <h1 className='clase10'> CLASE 10</h1>
    </div>
  );
}

export default App;
