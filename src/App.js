import React from 'react'

import Menu from './components/Menu'
import Calculadora from './components/Calculadora'

import Grid from '@material-ui/core/Grid';



export default function App() {
  return(
    <>
    <Menu />
    <Grid container justify="space-around" style={{ marginTop: '5vh' }}>
      <Calculadora />
    </Grid>
  </>
  );
}