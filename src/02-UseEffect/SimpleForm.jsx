import { useEffect, useState } from "react"


export const SimpleForm = () => {
  const [ formState, setFormState] = useState({
    username: 'Francis',
    email:'LordConfle@dragonball.com'
  });

 const { username, email } = formState;
 const onInputChange = ( { target } ) => {
  const { name , value } = target;
  console.log( name , value)

 setFormState({
    ...formState,
    [name]: value
 })

 }

 useEffect ( () => {
  console.log(' useEffect called ')
 }, [])
 useEffect ( () => {
  console.log(' formState called ')
 }, [ formState ])
 useEffect ( () => {
  console.log(' email changed !')
 }, [ email ])

  return (
    <>
    <h1>Simple Form</h1>
    <hr />
    <input type="text"
    className="fomr-control"
    placeholder="Username"
    name="Username" 
    value={username}
    onChange = { onInputChange }/>


    <input type="email" 
    name="email" i
    className="form-control mt-2" 
    placeholder="francishenriquez07@gmail.com"
    value={ email }
    onChange = { onInputChange }
    />
    </>
  )
}
