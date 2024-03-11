import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HowToPlayRoute, DefaultRoute } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='game-wrapper'>
    <BrowserRouter>
    <Routes>
      <Route path='how-to-play' element={<HowToPlayRoute />} />
      <Route path='/' element={<DefaultRoute />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
