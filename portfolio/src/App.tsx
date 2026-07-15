import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Portfolio } from './pages/Portfolio'
import { Curriculo } from './pages/Curriculo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
