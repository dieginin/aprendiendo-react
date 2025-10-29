import type { Todo, TodoId } from "../types"

interface Props extends Todo {
  onRemove: (id: TodoId) => void
}

export default function Todo({ id, title, completed, onRemove }: Props) {
  return (
    <div className='view'>
      <input
        type='checkbox'
        checked={completed}
        className='toggle'
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemove(id)}></button>
    </div>
  )
}
