import { createContext } from "react"
import { useCartReducer } from "../hooks/useCartReducer"

const CartContext = createContext()

function CartProvider({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
