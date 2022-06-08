import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>UseState</h2>
      <Counter />
      <Usuario />
      <hr />
      <h2>UseEffect + useRef</h2>
      <TimerPadre />
      <hr />
      <ContadorRed />
    </>
  );
}

export default App;
