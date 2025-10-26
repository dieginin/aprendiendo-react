import { CART_ACTION_TYPE } from "../constants/cart"
import { cartReducer } from "../reducers/cart"
import { useReducer } from "react"

const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || []

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({ type: CART_ACTION_TYPE.ADD_TO_CART, payload: product })

  const removeFromCart = (product) =>
    dispatch({ type: CART_ACTION_TYPE.REMOVE_FROM_CART, payload: product })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPE.CLEAR_CART })

  return { cart: state, addToCart, removeFromCart, clearCart }
}
