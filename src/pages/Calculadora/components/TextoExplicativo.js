import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function TextoExplicativo() {
    return(
        <>
            <Grid item xs={12} style={{ marginTop: 20, height: '100%', marginBottom: 0 }}>
                <Typography variant="h3" component="h6" style={{ textAlign: 'center', fontSize: "3rem", color: 'rgb(255, 255, 255)' }}>
                    Tipos de Média
                </Typography>
            </Grid>
            <Grid container justify="space-evenly">
                <Grid item xs={10} md={3} style={{ marginBottom: 20}}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                            Média Comum
                            </Typography>
                            <Typography color="textPrimary" component="h6">
                            <p>Também conhecida como <strong>média aritmética</strong>, é calculada quando todas as notas <strong>valem a mesma quantidade de pontos</strong> na <strong>média</strong>.</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={3} style={{ marginBottom: 20 }}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Média Com Pesos
                            </Typography>
                            <Typography color="textPrimary" component="h6">
                                <p>É calculada quando algumas notas <strong>valem a mais pontos</strong> do que as outras na <strong>média</strong>.</p>
                                <p>Cuidado para não confundir média com pesos com somatória. Na média com pesos, se o peso para uma nota for 4, ainda podemos tirar até a nota 10 nela, por exemplo.</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={3} style={{ marginBottom: 20 }}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Somatória
                            </Typography>
                            <Typography color="textPrimary" component="h6">
                                <p>É calculada quando <strong>as notas tem valores máximos menores do que 10</strong> e são somadas para definir a média.</p>
                                <p>Cuidado para não confundir somatória com média com pesos. Na somatória, se o peso para uma nota for 4, podemos tirar no máximo a nota 4 nela, por exemplo.</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}