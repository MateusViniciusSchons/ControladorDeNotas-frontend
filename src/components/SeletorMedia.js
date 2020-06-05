import React from 'react';
import { Typography, Grid, Switch, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';

export default function SeletorMedia(props) {
    return(
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <FormControl component="fieldset">
                <h3>Tipo de média</h3>
                <RadioGroup aria-label="média" name="média1" value={props.type.mediaType} onChange={e => props.type.setMediaType(e.target.value)}>
                  <FormControlLabel value="Comum" control={<Radio color="primary" /> } label={"Comum"}  />
                  <FormControlLabel value="Com Pesos" control={<Radio color="primary" />} label="Com Pesos"  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Typography>

    );
}