import "./Products.css"

import Product from "./Product"
import { useFilters } from "../hooks/useFilters"

export function Products() {
  const { products } = useFilters()

  return (
    <main className='products'>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </main>
  )
}
