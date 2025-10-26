import { FiltersContext } from "../context/filters"
import { products as initialProducts } from "../mocks/products.json"
import { useContext } from "react"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) =>
    products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    )

  const products = filterProducts(initialProducts)

  return { filters, setFilters, products }
}
