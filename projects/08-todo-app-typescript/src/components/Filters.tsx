import { FILTERS_BUTTONS } from "../consts"
import type { Filter } from "../types"

interface Props {
  filtersSelected: Filter
  onFilterChange: (filter: Filter) => void
}

export default function Filters({ filtersSelected, onFilterChange }: Props) {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isFilterSelected = filtersSelected === key
        const filterClassName = isFilterSelected ? "selected" : ""

        return (
          <li key={key}>
            <a
              href={href}
              className={filterClassName}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault()
                onFilterChange(key as Filter)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
