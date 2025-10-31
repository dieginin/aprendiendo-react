import type { TodoTitle } from "../types"
import { useState } from "react"

interface Props {
  saveTodo: (title: TodoTitle) => void
}

export default function CreateTodo({ saveTodo }: Props) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
        placeholder='Que quieres hacer?'
        autoFocus
      />
    </form>
  )
}
