import React from 'react'

import Menu from '../../components/Menu'
import Calculadora from './components/Calculadora'
import TextoExplicativo from './components/TextoExplicativo'
import ConviteParaCadastrar from './components/ConviteParaCadastrar'

import Grid from '@material-ui/core/Grid';

export default function Home() {
  return(
    <div style={{ overflow: 'hidden' }}>
    <div id="cima" style={{ minHeight: '100vh', height: '100%', paddingBottom: 20 }}>
      <Grid container style={{ border: '13px solid black' }} >
        <Grid item xs={12}>
          <Menu login style={{ overflow: 'hidden' }} />
        </Grid>
      </Grid>
      <Grid container justify="space-around" style={{  marginTop: '10vh' }}>
        <Calculadora />
      </Grid>
    </div>
   
    <Grid container alignItems="center" alignContent="space-around" style={{ minHeight: '100vh', height: '100%', overflow: "hidden", backgroundColor: '#1976d2' }}>
      <TextoExplicativo />
    </Grid>

    <Grid container alignItems="center" alignContent="space-evenly" style={{ minHeight: '100vh', height: '100%', overflow: "hidden", backgroundColor: '#C5D3E3' }}>
      <ConviteParaCadastrar />
    </Grid>
  </div>
  );
}