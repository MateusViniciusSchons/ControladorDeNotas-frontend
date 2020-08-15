import React from 'react';

import { Card, CardContent, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom'

export default function ConviteParaCadastrar() {
    return(
        <>
            <Grid item xs={12} style={{ marginTop: 20, height: '100%', marginBottom: 0 }}>
                <Typography variant="h3" component="h6" style={{ textAlign: 'center', fontSize: "3rem", color: 'rgb(60, 60, 60)' }}>
                    Cadastre-se
                </Typography>

                <Typography variant="h5" component="p" style={{ textAlign: 'center', color: 'rgb(60, 60, 60)' }}>
                    Alguns dos beneficios são:
                </Typography>
            </Grid>
            <Grid container justify="space-evenly" style={{ fontSize: 20 }}>
                <Grid item xs={10} md={3} style={{ marginBottom: 20}}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Armazenamento de notas
                            </Typography>
                            <Typography color="textPrimary" variant='subtitle1' component="h6">
                            <p>Cansado de anotar suas notas em uma folha de papel? <br/>Ou de esquecer qual foi sua nota na última prova?</p>
                            <p> <strong style={{ fontWeight: 'bold' }}>Deixa com a gente! Cuidamos das suas notas até você voltar.</strong></p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={3} style={{ marginBottom: 20 }}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Acesso rápido à todas as matérias que precisar
                            </Typography>
                            <Typography color="textPrimary" component="h6">
                                <p>Isso mesmo. Chega de perder tempo anotando tudo em um caderno que você pode esquecer em casa ou até perder</p>
                                <p><strong style={{ fontWeight: 'bold' }}>Armazene quantas matérias quiser durante o ano e acesse-as de forma prática em seu celular, computador ou tablet.</strong></p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} md={3} style={{ marginBottom: 20 }}>
                    <Card style={{ height: 320 }}>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                Atualizações constantes
                            </Typography>
                            <Typography color="textPrimary" component="h6">
                                <p>Estamos sempre trabalhando para entregar uma experiência melhor para você!</p>
                                <p><strong style={{ fontWeight: 'bold' }}>Aguarde... A próxima atualização já está saindo!</strong></p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Link to='/cadastro' style={{ textDecoration: 'none'}}><Button variant="contained" color='primary'>Quero me cadastrar!</Button></Link>
            </Grid>
        </>
    );
}