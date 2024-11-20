import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<Filter/>}/>
            <Route path="services" element={<Filter/>}/>
            <Route path="contact" element={<Filter/>}/>
          </Route>
            <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
