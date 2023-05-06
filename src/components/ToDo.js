import {useState} from 'react'
import uuid from 'uuid';
import AddToDoForm from './AddToDoForm'

const ToDo = () => {

  const [todos, setTodos] = useState([
    {id : 1, todo: 'Acheter du lait'},
    {id : 2, todo: 'Acheter du pain'},
    {id : 3, todo: 'Acheter du fromage'}
  ])

  const [warning, setWarning] = useState(false);

  const myTodos = todos.map(todo => {
    return (
      <li className="list-group-item" key="{todo.id}"> {todo.todo} </li>
    )
  })

  const addNewTodo = (newTodo) => {

    if(newTodo !== ''){
      setTodos([...todos, {
        id: uuid(),
        todo: newTodo
      }])
      setWarning(false);
    } else {
      setWarning(true);
    }
  }

  const warningMsg = warning && <div className="alert alert-danger mt-5" role="alert"> Veuillez indiquer un To do </div>

  return(
    <div>
      {warningMsg}
      <h1 className = "text-center"> {todos.length} To-do </h1>

      <ul className="list-group"> 
        {myTodos}
      </ul>
      <AddToDoForm addNewTodo={addNewTodo}/>
    </div>
  )
}
export default ToDo;