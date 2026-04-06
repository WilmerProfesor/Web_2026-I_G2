import { useState } from 'react';
import './App.css';
import Boton from './Components/Boton/Boton';
import BotonMui from './Components/BotonMui/BotonMui';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola Mundo <AccountBalanceIcon /> </h1>
      <Boton />
      <BotonMui />
    </>
  )
}

export default App
