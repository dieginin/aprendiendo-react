import "./App.css"

import Movies from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(" ")) return
    updateSearch(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            value={search}
            onChange={handleChange}
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
