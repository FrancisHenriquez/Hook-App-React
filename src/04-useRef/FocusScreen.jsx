import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef ();
    console.log(inputRef)

    const onClick = () => {
      inputRef.current.select();

    }
    return (
        <>
        <h1>Focus Screen </h1>
        <hr />
       
        <input 
        ref ={ inputRef }
        type="text"
        placeholder="ya tu sabe"
        className="form-control"/>
        <button className="btn btn-primary mt-3" >Set Focus</button>
        </>

    )

}
