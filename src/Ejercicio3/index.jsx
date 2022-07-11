import React from 'react'

const Ejercicio3 = () => {

  const [number, setNumber] = React.useState(0)
  const [factorial, setFactorial] = React.useState(null)
  
  const createFactorial = (n) => {
    if (n === 0) {
      return 1
    }
    return n * createFactorial(n - 1)
  }

  const handleClick = () => {
    console.log('Clicked')
    setFactorial(createFactorial(number))
  }

  return (
    <div>
      <h1>Ejercicio 3</h1>
      <input type="number" placeholder='Ingrese numero' onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={handleClick}>Enviar</button>
      {factorial && <p>El factorial de {number} es {factorial}</p>}
    </div>
  )
}

export default Ejercicio3