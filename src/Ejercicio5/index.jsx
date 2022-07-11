import React from 'react'

const Ejercicio5 = () => {

  const [number, setNumber] = React.useState(0)
  const [show, setShow] = React.useState(false)


  return (
    <div>
    <div>Ejercicio5</div>
    <input type="number" name="number" id="number" onClick={e=>setNumber(e.target.value)} />
    <button onClick={()=>setShow(true)}>Enviar</button>

     {show && <ul>
        {Array.from({ length: number }).map((_, i) => (
          <li key={i}>Linea {i}</li>
        ))}
        </ul>
      }
    </div>

  )
}

export default Ejercicio5