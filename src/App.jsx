import { useState } from 'react'
import { MenuWindow } from './components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='game-wrapper'>
        <MenuWindow />
      </div>
    </>
  )
}

export default App
