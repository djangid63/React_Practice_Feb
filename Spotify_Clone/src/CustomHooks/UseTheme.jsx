import React, { useState } from 'react'

const UseTheme = () => {

  const [isDark, setIsDark] = useState(false)

  const handleAppearance = () => {
    setIsDark(!isDark)
  }

  return { 
    isDark, handleAppearance
  }
}

export default UseTheme
