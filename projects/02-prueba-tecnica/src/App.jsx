import './style.css'

import { getCatImageFromFact, getRandomFact } from './services/helpers'
import { useEffect, useState } from 'react'

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Cargar un hecho aleatorio al iniciar el componente
  function loadRandomFact () {
    getRandomFact().then(setFact)
  }
  useEffect(loadRandomFact, [])

  // Cargar la imagen del gato al cambiar el hecho
  const loadCatImage = () => {
    if (!fact) return

    getCatImageFromFact({ fact }).then(setImageUrl)
  }
  useEffect(loadCatImage, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={loadRandomFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <p><img src={imageUrl} alt={`Imagen aleatoria de gato generada con las primeras tres palabras de "${fact}"`} /></p>}
    </main>
  )
}
