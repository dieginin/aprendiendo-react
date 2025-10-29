export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, "id">["id"]
export type TodoTitle = Pick<Todo, "title">["title"]
export type TodoCompleted = Pick<Todo, "completed">["completed"]

export type ListOfTodos = Todo[]
