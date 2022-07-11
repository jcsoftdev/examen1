import React from 'react'

const Hijo1 = ({numbers=[]}) => {
  return (
    <>
      <div>Hijo1 par</div>
      <ul>
        {
          numbers.map((number, i) => {
            if (i % 2 === 0) {
              return <li key={i}>{number}</li>
            }
          }
        )}
      </ul>
    </>
  )
}

export default Hijo1