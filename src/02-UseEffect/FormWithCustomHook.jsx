// import React from 'react'
import { useEffect, useState } from "react"
import { UseForm } from "../Hooks/UseForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = UseForm({
            username: ' ',
            email: ' ',
            password: ' '
    })

    // const  {username, email, password} = formState;
 
  return (
    <>
    <h1>Fromulario con Custom Hook</h1>
    <hr />

    <input type="text"
    className="form-control mt-2"
    placeholder="Username"
    name="Username" 
    value={username}
    onChange = { onInputChange }/>


    <input type="email" 
    name="email" 
    className="form-control mt-2" 
    placeholder="francishenriquez07@gmail.com"
    value={ email }
    onChange = { onInputChange }
    />

      <input type="password" 
    name="password" 
    className="form-control mt-2" 
    placeholder="contraseńa"
    value={ password }
    onChange = { onInputChange }
    />
    </>
  )
}
