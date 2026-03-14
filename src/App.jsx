import './index.css'
import './App.css'
import HomePage from '../pages/homePage'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/adminPage'
import ProductsPage from '../pages/productsPage'
import TestPage from '../pages/test'

function App() {
   
  return (
   
      <div className=' bg-primary w-full h-screen flex justify-center items-center text-secondary '>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/admin/*' element = {<AdminPage/>} />
          <Route path='/page' element = {<ProductsPage/>} />
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </div>
        
    
  )
}

export default App
