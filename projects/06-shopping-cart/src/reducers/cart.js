import { CART_ACTION_TYPE } from "../constants/cart"

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state))
  return state
}

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (item) => item.id === payload.id
      )

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity++
        return updateLocalStorage(newState)
      }

      const newState = [...state, { ...payload, quantity: 1 }]
      return updateLocalStorage(newState)
    }

    case CART_ACTION_TYPE.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== payload.id)
      return updateLocalStorage(newState)
    }

    case CART_ACTION_TYPE.CLEAR_CART: {
      return updateLocalStorage([])
    }
  }
}
