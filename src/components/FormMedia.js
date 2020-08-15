import React from 'react';
import { TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Grid from '@material-ui/core/Grid';


export default function FormMedia(props) {
    return(
        <div style={{ flexGrow: 1 }}>
        <Grid container justify="center" direction="row" spacing={1} style={{ marginTop: 6 }}>
                <Grid item xs={props.mediaType === "Com Pesos"? 5: 10}>
                    <TextField
                        type="number"
                        fullWidth
                        max={10}
                        min={0}
                        step="1.3"
                        inputProps={props.campo.isResponse?{
                            style:{
                                color: "#069C38",//#00c853
                                fontSize: 23,
                            }
                        }:{}}
                        id="outlined-basic"
                        label="Nota" 
                        variant="outlined" 
                        value={!isNaN(props.campo.nota)? props.campo.nota: ''} 
                        onChange={e => props.updateCampo({ 
                            index: props.campo.index, 
                            nota: !isNaN(e.target.value) && e.target.value!== ''? Number(e.target.value): e.target.value, 
                            peso: !isNaN(props.campo.peso) && props.campo.peso!== ''? Number(props.campo.peso): props.campo.peso 
                        })}
                    />
                </Grid>
                {
                    props.mediaType === "Com Pesos" && 
                    <Grid item xs={5}>
                        <TextField
                            inputProps={props.campo.isResponse?{
                                style:{
                                    fontSize: 23,
                                }
                            }:{}}
                            fullWidth
                            id="outlined-basic" 
                            label="Peso" 
                            variant="outlined" 
                            value={props.campo.peso} 
                            onChange={e => props.updateCampo({ 
                                index: props.campo.index, 
                                nota: !isNaN(props.campo.nota) && props.campo.nota!== ''? Number(props.campo.nota): props.campo.nota, 
                                peso: !isNaN(e.target.value) && e.target.value !== ''? Number(e.target.value): e.target.value
                            }, props.campo.isResponse)}
                        />
                    </Grid>
                }
                <Grid item xs={2}>
                    <IconButton
                    style={{ color: 'rgba(219, 26, 60, 0.86)' }/*#DB1A3C*/} 
                        onClick={e => props.removeCampo(e, props.campo.index)}
                        aria-label="Remover"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Grid>
        </Grid>
        </div>
    );
}