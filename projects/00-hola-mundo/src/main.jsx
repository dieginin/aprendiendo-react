import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'

import { Button } from './components/Button'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Button text="Hoola Mundo" />
    <Button text="Hola Mundo" />
  </Fragment>
)
