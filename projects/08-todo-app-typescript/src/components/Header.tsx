import CreateTodo from "./CreateTodo"
import type { TodoTitle } from "../types"

interface Props {
  addTodo: (title: TodoTitle) => void
}

export default function Header({ addTodo }: Props) {
  return (
    <header className='header'>
      <h1>
        todo
        <img
          style={{ width: "60px", height: "auto" }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
        />
      </h1>

      <CreateTodo saveTodo={addTodo} />
    </header>
  )
}
