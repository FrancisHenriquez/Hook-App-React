import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar piedra del Alma',
    //     done: false,
    // },
  
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState,);
    useEffect(() => {
        localStorage.setItem('todos')
        
    }, [ todos ])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
           }
           dispatch( action );
          
    }
  return (
<>
<h1> TodoApp: 10, <small> pendientes: 2</small></h1>
<hr />

<div className="row">
    <div className="col-7">
        {/* TodoList  */}
        <TodoList todos={ todos } />


    <ul className="list-group">
        {
            todos.map (todo => (
                //TodoItem ...
                <TodoItem />
            //     <li className="list-group-item d-flex justify-content-between">
            // <span className="aling-self-center">Item 1</span>
            // <button className="btn btn-danger"> Borrar </button>
            // </li>
            ) )
            }
    </ul>
            {/* Fin TodoList  */}
    </div>
    <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />

        <TodoAdd onNewtodo={ handleNewTodo( ) }/>
        {/* <form action="">
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"/>
                <button type="submit"
                className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
        </form> */}
    </div>

</div>
</>
  )
}
