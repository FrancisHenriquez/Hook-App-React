import React, { memo } from 'react'

export const Small = memo (({ value }) => {

    console.log(' Me volvy a dibujar ')


  return (
   <small>{ value }</small>
  )
}
)