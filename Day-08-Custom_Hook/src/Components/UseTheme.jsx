import React, { useState } from 'react'

const UseTheme = () => {
  const [isDark, setIsDark] = useState(false);


  const toggleIsDark = () => {
    // if (!isDark) {
    //   document.documentElement.classList.add('dark');
    //   setIsDark(true);
    // } else {
    //   document.documentElement.classList.remove('dark');
    //   setIsDark(false);
    // }

    setIsDark(!isDark)
  }

  return {
    isDark, toggleIsDark, black, white
  }
}

export default UseTheme
