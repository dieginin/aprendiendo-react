import "./Filters.css"

import { useState } from "react"

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange((prevState) => ({ ...prevState, minPrice: event.target.value }))
  }

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({ ...prevState, category: event.target.value }))
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 1,
  })

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Min price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{formatter.format(minPrice)}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
