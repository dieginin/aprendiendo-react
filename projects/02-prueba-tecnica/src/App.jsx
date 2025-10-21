import './style.css'

import { useEffect, useState } from 'react'

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const firstThreeWords = fact ? fact.split(' ', 3).join(' ') : ''

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`

  // Obtener un dato aleatorio de gato
  const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }

  // Obtener una imagen de gato con las primeras tres palabras del dato anterior
  const getCatImageFromFact = () => {
    if (!fact) return

    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then(res => res.json())
      .then(data => setImageUrl(data.url))
  }

  useEffect(getRandomFact, [])

  useEffect(getCatImageFromFact, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={getRandomFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <p><img src={imageUrl} alt={`Imagen aleatoria de gato generada con las primeras tres palabras de "${fact}"`} /></p>}
    </main>
  )
}
