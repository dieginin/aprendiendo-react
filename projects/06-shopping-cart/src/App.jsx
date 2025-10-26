import Cart from "./components/Cart"
import { CartProvider } from "./context/cart"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  )
}

export default App
