import './style.css'

import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={refreshFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <p><img src={imageUrl} alt={`Imagen aleatoria de gato generada con las primeras tres palabras de "${fact}"`} /></p>}
    </main>
  )
}
