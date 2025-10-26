import { AddToCartIcon } from "./Icons"

export default function Product({ product }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button>
          <AddToCartIcon />
        </button>
      </div>
    </li>
  )
}
