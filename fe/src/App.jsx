import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './stylesheet/default.css'
import Home from './pages/Home.jsx'
import Blank from './pages/Blank.jsx'
import Library from './pages/Library.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/library' element={<Library />} />

          <Route path='*' element={<Blank />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
