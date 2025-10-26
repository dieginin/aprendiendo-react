import "./Filters.css"

import { useFilters } from "../hooks/useFilters"
import { useId } from "react"

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) =>
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }))

  const handleChangeCategory = (event) =>
    setFilters((prevState) => ({ ...prevState, category: event.target.value }))

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Min price</label>
        <input
          type='range'
          id={categoryFilterId}
          min='0'
          max='35000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={minPriceFilterId}>Category</label>
        <select id={minPriceFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='kitchen-accessories'>Kitchen Accessories</option>
          <option value='laptops'>Laptops</option>
          <option value='mens-shirts'>Mens Shirts</option>
          <option value='mens-shoes'>Mens Shoes</option>
          <option value='mens-watches'>Mens Watches</option>
          <option value='mobile-accessories'>Mobile Accessories</option>
          <option value='motorcycle'>Motorcycle</option>
          <option value='skin-care'>Skin Care</option>
          <option value='smartphones'>Smartphones</option>
          <option value='sports-accessories'>Sports Accessories</option>
          <option value='sunglasses'>Sunglasses</option>
          <option value='tablets'>Tablets</option>
          <option value='tops'>Tops</option>
          <option value='vehicle'>Vehicle</option>
          <option value='womens-bags'>Womens Bags</option>
          <option value='womens-dresses'>Womens Dresses</option>
          <option value='womens-jewellery'>Womens Jewellery</option>
          <option value='womens-shoes'>Womens Shoes</option>
          <option value='womens-watches'>Womens Watches</option>
        </select>
      </div>
    </section>
  )
}
