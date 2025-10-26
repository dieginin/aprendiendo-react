import "./index.css"

import App from "./App.jsx"
import { FiltersProvider } from "./context/filters.jsx"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
