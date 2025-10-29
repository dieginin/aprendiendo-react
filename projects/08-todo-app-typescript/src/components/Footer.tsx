import type { Filter } from "../types"
import Filters from "./Filters"

interface Props {
  activeCount: number
  filterSelected: Filter
  handleFilterChange: (filter: Filter) => void
  onClearCompleted: () => void
}

export default function Footer({
  activeCount,
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
    </footer>
  )
}
