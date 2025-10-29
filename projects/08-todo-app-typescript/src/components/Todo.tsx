import type { Todo } from "../types"

export default function Todo({ id, title, completed }: Todo) {
  return (
    <div className='view'>
      <input
        type='checkbox'
        checked={completed}
        className='toggle'
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          console.log(id)
        }}
      ></button>
    </div>
  )
}
