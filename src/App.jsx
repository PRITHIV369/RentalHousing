import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
function App() {
  return (
    <>
     {/* <BrowserRouter>
     <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<Filter/>}/>
            <Route path="services" element={<Filter/>}/>
            <Route path="contact" element={<Filter/>}/>
    
          </Route>
      </Routes> */}
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        title="Sample Product"
        description="This is a sample description for the card component. It demonstrates using props in React."
        imgSrc="https://via.placeholder.com/300"
        buttonText="Buy Now"
        onClick="ok"
      />
    </div>
    {/* </BrowserRouter>  */}
    </>
  )
}

export default App
