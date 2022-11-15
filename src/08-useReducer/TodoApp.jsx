import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar piedra del Alma',
        done: false,
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, initialState,)
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
        <TodoList todo = { todos }/>
    </div>

    <div className="col-5">
        {/* TodoAdd */}
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewtodo={ handleNewTodo( ) }/>
    </div>

</div>
</>
  )
}
