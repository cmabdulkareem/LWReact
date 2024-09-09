import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
    </>
  )
}

export default App
