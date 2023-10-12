import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Details from './pages/Details'
import CreateArticle  from './pages/CreateArticle'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/create" element={<CreateArticle/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App