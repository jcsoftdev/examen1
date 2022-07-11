
import React from 'react'

const Ejercicio4 = () => {
  const [r, setR] = React.useState(0)
  const [g, setG] = React.useState(0)
  const [b, setB] = React.useState(0)
  const [bgColor, setBgColor] = React.useState('#000000')
  const handleClick = () => {
    setBgColor(`rgb(${r},${g},${b})`)
  }
  
  return (
    <div style={{backgroundColor: bgColor}}>
    <div>Ejercicio4</div>
    <input type="number" name="r" id="r" onChange={e=>setR(e.target.value)} />
    <input type="number" name="g" id="g" onChange={e=>setG(e.target.value)} />
    <input type="number" name="b" id="b" onChange={e=>setB(e.target.value)} />
    <button onClick={handleClick}>Enviar</button>
    
    </div>

  )
}

export default Ejercicio4