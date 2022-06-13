import React, { useState, useEffect } from 'react'
import Switch from '@mui/material/Switch';
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#7de2d1',
      darker: '#339989',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
export default function ColorSwitches() {
    const [mounted, setMounted] = useState(false)
    const [checked, setChecked] = React.useState(true);
    const { theme, setTheme } = useTheme()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <ThemeProvider theme={muTheme}>
          <motion.button className='bg-transparent'>
              <>
              <Switch
                  checked={checked}
                  onChange={handleChange}
                  defaultChecked color="primary" 
              />
              </>
          </motion.button>
        </ThemeProvider>
    );
}