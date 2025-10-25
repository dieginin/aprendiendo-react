import "./App.css"

import Movies from "./components/Movies"
import debounce from "just-debounce-it"
import { useMemo } from "react"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"
import { useSort } from "./hooks/useSort"

function App() {
  const { sort, handleSort } = useSort()
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovie = useMemo(
    () => debounce((search) => getMovies({ search }), 300),
    [getMovies]
  )
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const query = event.target.value
    if (query.startsWith(" ")) return

    updateSearch(query)
    debouncedGetMovie(query)
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
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
