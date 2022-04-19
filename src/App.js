import React from 'react';
import styles from './App.module.scss'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Travel Trek
        </Typography>
        <img src={memories} alt="travel trek" height={'60'} />
      </AppBar>
    </Container>
  )
}

export default App;
