
import { TodoItem } from "./TodoItem";
const TodoList = (props) =>{
    
    console.log('props:', props)
    console.log('props:', props)
    return (
        <div className = "AllTodoList">
            {props.AllTodo.map((element) =>{

                return (

                    <TodoItem Todoitem = { element } statusfntoitem = {props.statusfn} />

                )

            })}
        </div>
    )
}

export { TodoList }