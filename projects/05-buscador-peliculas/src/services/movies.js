const API_KEY = "5cda34af"

export async function searchMovies({ search }) {
  if (search === "") return

  try {
    const apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    const response = await fetch(apiUrl)
    const json = await response.json()

    const movies = json.Search
    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch {
    throw new Error("Error searching movies")
  }
}
