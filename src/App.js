import React from 'react'

import Menu from './components/Menu'
import Calculadora from './components/Calculadora'

import Grid from '@material-ui/core/Grid';



export default function App() {
  return(
    <>
    <Grid container >
      <Grid item xs={12}>
        <Menu style={{ overflow: 'hidden' }} />
      </Grid>
    </Grid>
    <Grid container justify="space-around" style={{ overflowX: 'hidden', marginTop: '10vh' } /* overflowX: 'hidden'*/ }>
      <Calculadora />
    </Grid>
  </>
  );
}