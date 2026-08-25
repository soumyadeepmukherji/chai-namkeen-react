import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AuthPage from './pages/Auth'
import CheckoutPage from './pages/Checkout'

function App() {
 console.log('hello')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
