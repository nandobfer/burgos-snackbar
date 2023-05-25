import React from 'react'

import { useMyHook } from 'burgos-snackbar'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
