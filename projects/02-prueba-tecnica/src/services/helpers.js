// Obtener un dato aleatorio de gato
export const getRandomFact = () => {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => data.fact)
}

// Obtener una imagen de gato con las primeras tres palabras del dato anterior
export const getCatImageFromFact = ({ fact }) => {
  const firstThreeWords = fact.split(' ', 3).join(' ')
  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`

  return fetch(CAT_ENDPOINT_IMAGE_URL)
    .then(res => res.json())
    .then(data => data.url)
}
