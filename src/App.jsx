import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/contact'
import About from './components/about'
import FilterResultPage from './components/FilterResult'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Filter/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="/filter-results" element={<FilterResultPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
