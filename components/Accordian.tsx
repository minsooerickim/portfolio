import * as React from 'react'
import { styled, StyledEngineProvider } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: 'bg-background',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // backgroundColor: 'bg-subBackground'
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
  // const [expanded, setExpanded] = React.useState<string | false>('panel1'); //panel1 open when refreshed
  const [expanded, setExpanded] = React.useState<string | false>('')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <StyledEngineProvider injectFirst>
      <div className="flex justify-center items-center">
        <div className="space-y-2 md:w-6/12">
          <Accordion
            sx={{
              '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
                color: '#339989',
              },
            }}
            className="shadow-md rounded-lg bg-card"
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className="text-normalText font-bold">
                What tools do I use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-secondaryNormalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
                color: '#339989',
              },
            }}
            className="shadow-md rounded-lg bg-card"
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className="text-normalText font-bold">
                Favorite Project?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-secondaryNormalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
                color: '#339989',
              },
            }}
            className="shadow-md rounded-lg bg-card"
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography className="text-normalText font-bold">
                Think of another question...
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-secondaryNormalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </StyledEngineProvider>
  )
}
