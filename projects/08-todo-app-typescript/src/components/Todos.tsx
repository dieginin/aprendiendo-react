import type { ListOfTodos } from "../types"
import Todo from "./Todo"

interface Props {
  todos: ListOfTodos
}

export default function Todos({ todos }: Props) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  )
}
