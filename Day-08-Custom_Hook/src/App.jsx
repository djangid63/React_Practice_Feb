import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Counter from "./Components/Counter"
import CounterTwo from "./Components/CounterTwo"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CounterTwo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
