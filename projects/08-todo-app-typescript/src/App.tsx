import type { Filter, TodoId, TodoTitle } from "./types"

import Footer from "./components/Footer"
import Header from "./components/Header"
import { TODO_FILTERS } from "./consts"
import Todos from "./components/Todos"
import { useState } from "react"

const mockTodos = [
  {
    id: "1",
    title: "Aprender TypeScript",
    completed: false,
  },
  {
    id: "2",
    title: "Aprender React",
    completed: true,
  },
  {
    id: "3",
    title: "Aprender Vite",
    completed: false,
  },
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<Filter>(TODO_FILTERS.ALL)

  const handleComplete = (id: TodoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleRemove = (id: TodoId) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

  const handleFilterChange = (filter: Filter) => setFilterSelected(filter)

  const handleClearCompleted = () =>
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

  const handleAddTodo = (title: TodoTitle) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ])
  }

  return (
    <div className='todoapp'>
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
      <Footer
        activeCount={filteredTodos.length}
        completedCount={todos.filter((todo) => todo.completed).length}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
