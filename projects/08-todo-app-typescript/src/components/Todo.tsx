import type { Todo, TodoId } from "../types"

interface Props extends Todo {
  onComplete: (id: TodoId) => void
  onRemove: (id: TodoId) => void
}

export default function Todo({
  id,
  title,
  completed,
  onComplete,
  onRemove,
}: Props) {
  return (
    <div className='view'>
      <input
        type='checkbox'
        checked={completed}
        className='toggle'
        onChange={() => onComplete(id)}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemove(id)}></button>
    </div>
  )
}
