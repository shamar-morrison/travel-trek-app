import React from 'react';
import styles from './App.module.scss'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from '../src/images/memories.png'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <AppBar position="static" color="inherit" className={styles.container}>
        <Typography variant="h2" align="center">
          Travel Trek
        </Typography>
        <img src={memories} alt="travel trek" height={'60'} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
