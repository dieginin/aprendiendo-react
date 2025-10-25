import { useMemo, useRef, useState } from "react"

import { searchMovies } from "../services/movies"

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(
    () => async () => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        setMovies(await searchMovies({ search }))
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    },
    [search]
  )
  const sortedMovies = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [movies, sort]
  )

  return { movies: sortedMovies, getMovies, loading, error }
}
