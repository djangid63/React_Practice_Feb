import React, { useState } from 'react'

const useTheme = () => {

  const [isDark, setIsDark] = useState(false)

  const handleAppearance = () => {
    setIsDark(!isDark)
  }
  return {
    isDark,
    handleAppearance
  }
}

export default useTheme
