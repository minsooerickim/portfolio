import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

/** Button to toggle light/dark mode. */
export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      className='flex flex-col justify-center items-center w-11 h-11 rounded-md md:shadow text-2xl bg-secondary text-sub-bright rounded-md cursor-pointer'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      { theme === 'light' ? <BiMoon /> : <BiSun /> }
    </motion.button>
  )
}