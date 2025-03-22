import React, { useState } from 'react'

const UseDarkMode = () => {
  const [isDark, setDarkMode] = useState(false)

  const handleApperance = () => {
    setDarkMode(!isDark)
  }

  return {
    isDark,
    handleApperance
  }
}

export default UseDarkMode