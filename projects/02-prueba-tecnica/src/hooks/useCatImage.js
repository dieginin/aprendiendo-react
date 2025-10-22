import { useEffect, useState } from 'react'

import { getCatImageFromFact } from '../services/helpers'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  const refreshCatImage = () => {
    if (!fact) return

    getCatImageFromFact({ fact }).then(setImageUrl)
  }

  useEffect(refreshCatImage, [fact])

  return { imageUrl }
}
