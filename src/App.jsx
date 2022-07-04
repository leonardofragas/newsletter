import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Newsletter from './components/Newsletter';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Box sx={{
      flexDirection: 'column',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      <CssBaseline />

      <Container>
        <Typography
          gutterBottom
          align="center"
          variant="subtitle1"
        >
          Inscreva-se para receber minhas confissões, cartas e dicas.
        </Typography>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          justifyItems: 'center'
        }}
      >
        <Newsletter />
      </Container>
    </Box>
  )
}

export default App