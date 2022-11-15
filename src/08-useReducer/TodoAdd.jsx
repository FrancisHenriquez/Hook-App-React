import { UseForm } from "../Hooks/UseForm"

export const TodoAdd = ({ onNewtodo }) => {
     const { description, onInputChange, onResetForm } = UseForm ({
        description: ' '
     })
     const onFormSubmit = ( event ) => {
        event.preventDeafoult();
        if ( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
           description: description,
            done: false,
        }
         onNewtodo( newTodo );
         onResetForm();
     }
  return (
   <>
   < form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                value={ description }
                onChange= { onInputChange}
                />
            <button type="submit"
                className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
        </form>
   </>
  )
}
