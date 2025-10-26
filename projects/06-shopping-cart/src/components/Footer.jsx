import "./Footer.css"

import { IS_DEVELOPMENT } from "../config"
import { useCart } from "../hooks/useCart"
import { useFilters } from "../hooks/useFilters"

export function Footer() {
  const { cart } = useCart()
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {IS_DEVELOPMENT && (
        <p>
          {JSON.stringify(
            cart.map((item) => {
              return { title: item.title, quantity: item.quantity }
            }),
            null,
            2
          )}
        </p>
      )}
      {IS_DEVELOPMENT && <p>{JSON.stringify(filters, null, 2)}</p>}

      <h4>
        Prueba técnica de React ⚛️ － <span>@dieginin</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
