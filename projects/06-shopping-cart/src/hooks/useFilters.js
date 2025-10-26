import { FiltersContext } from "../context/filters"
import { useContext } from "react"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) =>
    products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    )

  return { filters, setFilters, filterProducts }
}
