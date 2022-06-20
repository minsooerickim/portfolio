import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import ArticleIcon from '@mui/icons-material/Article'
import { StyledEngineProvider } from '@mui/material/styles'

const actions = [
  { icon: <ArticleIcon />, name: 'Resume' },
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <GitHubIcon />, name: 'GitHub' },
  { icon: <EmailIcon />, name: 'Email' },
]

export default function BasicSpeedDial() {
  function downloadFile(filePath) {
    var link = document.createElement('a')
    link.href = filePath
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1)
    link.click()
  }

  const handleClick = (e: { preventDefault: () => void }, name) => {
    console.log(name)
    if (name == 'Resume') {
      downloadFile('/resume.pdf')
    } else if (name == 'LinkedIn') {
      window.open('https://www.linkedin.com/in/minsookime/', '_ blank')
    } else if (name == 'GitHub') {
      window.open('https://github.com/minsooerickim', '_ blank')
    } else if (name == 'Email') {
      window.open('mailto:minsooerickim@gmail.com', '_self') // make it not open a new tab
    }
  }
  return (
    <StyledEngineProvider>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={
            <SpeedDialIcon
              sx={{ '& .MuiSvgIcon-root': { color: '#339989' } }}
            />
          }
          FabProps={{
            sx: {
              '&:hover': {
                bgcolor: 'transparent',
              },
              bgColor: 'transparent',
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={(e) => {
                handleClick(e, action.name)
              }}
              FabProps={{
                sx: {
                  color: '#339989',
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </StyledEngineProvider>
  )
}
