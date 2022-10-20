import React, { useState } from 'react'

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        counter1: 20,
        counter2: 30,
        counter3: 40
    });

    const  { counter1, counter2, counter3 } = state;

  return (
    <>
    <h1>Counter1: { counter1 }</h1>
    <h1>Counter2: { counter2 }</h1>
    <h1>Counter3: { counter3 }</h1>
    <hr />
    <button className='btn' onClick={ 
        () => setCounter({
            ...state,
            counter2: counter2 + 2,
        }

         )}> + 1 </button>
    
    </>
  )
}
