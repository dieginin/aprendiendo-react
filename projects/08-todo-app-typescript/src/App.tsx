import Todos from "./components/Todos"
import { useState } from "react"

const mockTodos = [
  {
    id: 1,
    title: "Aprender TypeScript",
    completed: false,
  },
  {
    id: 2,
    title: "Aprender React",
    completed: true,
  },
  {
    id: 3,
    title: "Aprender Vite",
    completed: false,
  },
]

function App() {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App
