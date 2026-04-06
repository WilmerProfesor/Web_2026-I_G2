import { useState } from 'react';
import './App.css';
import Boton from './Components/Boton/Boton';
import BotonMui from './Components/BotonMui/BotonMui';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola Mundo</h1>
      <Boton />
      <BotonMui />
    </>
  )
}

export default App
