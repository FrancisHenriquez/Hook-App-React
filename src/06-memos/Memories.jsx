import React, { useState } from "react"
import { useCounter } from "../Hooks"
import { Small } from "./Small"

export const Memories = () => {
   const { counter, increment } = useCounter( 7 );
   const [Show, setfShow ]= useState(true)

  return (
    <>
    <h1>Counter:   <Small value= { counter }/></h1>
    <hr />
    <button
            className="btn btn-primary"
            onClick={ () => increment() }
    > + 1 </button>
    <button
            className="btn btn-outline-primary"
            onClick={ () => setfShow( !Show )}
    >
        Show/Hide {JSON.stringify(Show)}
    </button>
    
    </>
  )
}
