import {useState} from 'react'
import './App.css'

const App=() =>{
  const [edad, setEdad] = useState(0);

  const handleClick=(increment) => () => setEdad(edad + increment);

  return (
    <>
    <header>
      <h1>Hola Mundo {edad} años </h1>
      <div className='boton' onClick={handleClick(5)}>Mas</div>
      <div className='boton' onClick={()=>setEdad(edad-1)}>Menos</div>

    </header>
    </>
  )
}

export default App
