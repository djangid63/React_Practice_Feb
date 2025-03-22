import React, { useState } from 'react'

const UseTheme = () => {
  const [isDark, setIsDark] = useState(false);


  const toggleIsDark = () => {
    setIsDark(!isDark)
  }

  return {
    isDark, toggleIsDark
  }
}

export default UseTheme
