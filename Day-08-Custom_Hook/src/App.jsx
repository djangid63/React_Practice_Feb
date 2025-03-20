import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from "./Components/Counter"
import CounterTwo from "./Components/CounterTwo"
import ReduxImplementaion from './Components/ReduxImplementaion'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReduxImplementaion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
