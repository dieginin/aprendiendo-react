import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { useState } from "react"

function useFilters(products) {
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 })

  const filterProducts = (products) =>
    products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    )

  const filteredProducts = filterProducts(products)

  return { filters, setFilters, filteredProducts }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters, setFilters, filteredProducts } = useFilters(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
