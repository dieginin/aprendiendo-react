export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Todo["id"]
export type TodoTitle = Todo["title"]
export type TodoCompleted = Todo["completed"]

export type ListOfTodos = Todo[]
