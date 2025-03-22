import React, { useState } from 'react'

const UseDarkMode = () => {
  const [isDark, setDarkMode] = useState(false)
  const [isFlex, setIsflex] = useState(false)

  const handleApperance = () => {
    setDarkMode(!isDark)
  }
  const handleFlex = () => {
    setIsflex(!isFlex)
  }

  return {
    isDark,
    handleApperance,
    isFlex,
    handleFlex

  }
}

export default UseDarkMode