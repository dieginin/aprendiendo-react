import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

import { useCart } from "../hooks/useCart"

export default function Product({ product }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const isProductInCart = cart.some((item) => item.id === product.id)

  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button
          style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
          onClick={() => {
            isProductInCart ? removeFromCart(product) : addToCart(product)
          }}
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  )
}
