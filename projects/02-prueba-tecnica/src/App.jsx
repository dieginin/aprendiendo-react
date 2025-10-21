import './style.css'

import { getCatImageFromFact, getRandomFact } from './services/helpers'
import { useEffect, useState } from 'react'

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Cargar un hecho aleatorio al iniciar el componente
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // Cargar la imagen del gato al cambiar el hecho
  useEffect(() => {
    if (!fact) return

    getCatImageFromFact({ fact }).then(setImageUrl)
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={getRandomFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <p><img src={imageUrl} alt={`Imagen aleatoria de gato generada con las primeras tres palabras de "${fact}"`} /></p>}
    </main>
  )
}
