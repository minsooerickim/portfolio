import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import router from 'next/router'

export default function BasicPagination() {
  const handleChange = (event, value) => {
    console.log(event.target.textContent)
    if (event.target.textContent == 1) {
      router.push('/')
    } else if (event.target.textContent == 2) {
      router.push('/Projects')
    } else if (event.target.textContent == 3) {
      router.push('/Experience')
    }
  }
  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        onChange={handleChange}
        sx={{
          '& .MuiButtonBase-root': { color: '#339989' },
        }}
      />
    </Stack>
  )
}
