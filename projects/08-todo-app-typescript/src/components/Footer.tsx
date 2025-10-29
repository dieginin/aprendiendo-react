import type { Filter } from "../types"
import Filters from "./Filters"

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: Filter
  handleFilterChange: (filter: Filter) => void
  onClearCompleted: () => void
}

export default function Footer({
  activeCount,
  completedCount,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas
      </span>

      <Filters
        filtersSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className='clear-completed' onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
