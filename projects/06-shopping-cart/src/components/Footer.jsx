import "./Footer.css"

import { IS_DEVELOPMENT } from "../config"

export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {IS_DEVELOPMENT && JSON.stringify(filters, null, 2)}

      <h4>
        Prueba técnica de React ⚛️ － <span>@dieginin</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
