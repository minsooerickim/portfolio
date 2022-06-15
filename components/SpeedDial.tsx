import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Router from 'next/router'

const actions = [
  { icon: <FileCopyIcon />, name: 'Resume' },
  { icon: <SaveIcon />, name: 'LinkedIn' },
  { icon: <PrintIcon />, name: 'GitHub' },
  { icon: <ShareIcon />, name: 'Email' },
];

export default function BasicSpeedDial() {
  const handleClick = (e: { preventDefault: () => void; }, name) => {
    console.log(name)
    if (name=="Resume"){

    } else if(name=="LinkedIn"){
      window.open ('https://www.linkedin.com/in/minsookime/', '_ blank')
    } else if(name=="GitHub"){
      window.open ('https://github.com/minsooerickim', '_ blank')
    } else if(name=="Email"){
      window.open ('mailto:minsooerickim@gmail.com') // make it not open a new tab
    }
  }
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon sx={{'& .MuiSvgIcon-root': {color: '#339989'}}}/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              handleClick(e, action.name)
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
