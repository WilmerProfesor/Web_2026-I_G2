import { useState, useEffect } from 'react'
import './App.css'
import CardCharacter from './Componets/CardCharacter/CardCharacter.jsx'

const datosDePrueba=[
  {id:1,name:"Goku", description:"alguna cosa", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70CqGaZ23V3UDmCeRSOz6CRKhL_6YL-bkXjdiYPnq_DJVnIirOPklhiIkATjZWl6LgN_aBkP-50KuCGvr6yDTgxfgFzhOBBKHf2KGGA&s=10"},
  {id:2,name:"Vegeta", description:"alguna cosa", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70CqGaZ23V3UDmCeRSOz6CRKhL_6YL-bkXjdiYPnq_DJVnIirOPklhiIkATjZWl6LgN_aBkP-50KuCGvr6yDTgxfgFzhOBBKHf2KGGA&s=10"},
  {id:3,name:"Piccolo", description:"alguna cosa", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70CqGaZ23V3UDmCeRSOz6CRKhL_6YL-bkXjdiYPnq_DJVnIirOPklhiIkATjZWl6LgN_aBkP-50KuCGvr6yDTgxfgFzhOBBKHf2KGGA&s=10"}
]

function App() {
  const [characters, setCharacters] = useState([]);
  const [x, setX] = useState(datosDePrueba);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data.items))
      .catch(error => console.error('Error fetching data:', error));
    

    console.log(x);
    
  }, []);


  return (
    <>
      
      <h1>HOla mundo</h1>
      <p>{characters.length} personajes</p>
      { 
        // x.map((subX) => (
        //   <CardCharacter key={subX.id} name={subX.name} image={subX.image} description={subX.description} />
        // ))       
        characters.map((subX) => (
          <CardCharacter key={subX.id} name={subX.name} image={subX.image} description={subX.description} />
        ))
      }
      {/* <CardCharacter name={x[0]?.name} image={x[0]?.image} description={x[0]?.description} /> */}
    </>
  )
}

export default App
