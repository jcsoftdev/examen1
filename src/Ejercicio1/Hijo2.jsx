import React from 'react'

const Hijo2 = ({numbers=[]}) => {
  return (
   <>
    <div>Hijo2 impar</div>
    <ul>
      {
        numbers.map((number, i) => {
          if (i % 2 === 1) {
            return <li key={i}>{number}</li>
          }
        }
      )}
    </ul>
    </>
  )
}

export default Hijo2