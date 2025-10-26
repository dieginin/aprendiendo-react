import "./Cart.css"

import { CartIcon, RemoveFromCartIcon } from "./Icons"

import { CartItem } from "./CartItem"
import { useCart } from "../hooks/useCart"
import { useId } from "react"

export default function Cart() {
  const { cart, addToCart, clearCart } = useCart()

  const cartCheckBoxId = useId()

  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <RemoveFromCartIcon />
        </button>
      </aside>
    </>
  )
}
