import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from "./Components/Counter"
import CounterTwo from "./Components/CounterTwo"
import ReduxImplementaion from './Components/ReduxImplementaion'
import Footer from "./Components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ReduxImplementaion />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
