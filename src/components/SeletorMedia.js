import React from 'react';
import { Typography, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Chip } from '@material-ui/core';

export default function SeletorMedia(props) {
    return(
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <FormControl fullWidth component="fieldset">
                <h3>Tipo de média</h3>
                <RadioGroup aria-label="média" name="média1" value={props.type.mediaType} onChange={e => props.type.setMediaType(e.target.value)}>
                  <Grid container spacing={4}>
                  
                    <Grid item>
                    <Chip label={
                        <FormControlLabel value="Comum" control={<Radio style={{ display: 'none' }} />} label={"Comum"} style={{ marginLeft: 0, marginRight: 0 }} />
                      } 
                      style={props.type.mediaType === 'Comum'? {backgroundColor: '#50AABD' }: {backgroundColor: '#DBDBDB'}}
                    />
                    
                    </Grid>

                    <Grid item >

                    <Chip label={
                        <FormControlLabel value="Com Pesos" control={<Radio style={{ display: 'none' }} />} label="Com Pesos" style={{ marginLeft: 0, marginRight: 0}} />
                      } 
                      style={props.type.mediaType === 'Com Pesos'? {backgroundColor: '#50AABD' }: {backgroundColor: '#DBDBDB'}}
                    />
                      
                    
                  </Grid>
                    
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Typography>

    );
}