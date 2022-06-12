import React, { useState, useEffect } from 'react'
import Switch from '@mui/material/Switch';
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mutheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#C2410C',
      darker: '#C2410C',
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
        <ThemeProvider theme={mutheme}>
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