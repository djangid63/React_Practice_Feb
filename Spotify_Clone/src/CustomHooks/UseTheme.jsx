import React, { useState } from 'react'

const useTheme = () => {

  const [isDark, setIsDark] = useState(true)

  const handleAppearance = () => {
    setIsDark(!isDark)
  }

  return {
    isDark,
    handleAppearance
  }
}

export default useTheme
