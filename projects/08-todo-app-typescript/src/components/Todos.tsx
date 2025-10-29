import type { ListOfTodos, TodoId } from "../types"

import Todo from "./Todo"

interface Props {
  todos: ListOfTodos
  onComplete: (id: TodoId) => void
  onRemove: (id: TodoId) => void
}

export default function Todos({ todos, onComplete, onRemove }: Props) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onComplete={onComplete}
            onRemove={onRemove}
          />
        </li>
      ))}
    </ul>
  )
}
