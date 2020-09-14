import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import Menu from '../../components/Menu'

import { Grid, Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
 
export default function Cadastro() {

    const [matters, setMatters] = useState([])
    const history = useHistory()

    useEffect(() => {
        
        async function getMatters() {
            const userId = localStorage.getItem('userId')
            const response = await api.get('/matters', {
                headers: {
                    userid: userId,
                }
            })
            if(!response.data.error) setMatters(response.data);
        }
        getMatters();
        
    }, [])

    return (
        <>
            <Menu logout /> 
            <Grid container style={{ marginTop: '10vh' }} justify="center">
                <Grid item xs={11} md={6} lg={3} style={{ backgroundColor: 'white', borderRadius: 10, boxSizing: 'border-box', padding: 10 }}>
                    <h1 style={{ textAlign: 'center' }}>Matérias</h1>
                    <Grid container spacing={3} justify="space-evenly">
                        {
                            matters.map(matter => (
                                <Grid item xs={10} key={matter.id}>
                                    <Button variant='outlined'  fullWidth style={{ borderColor: '#459DDB', color: '#459DDB', fontWeight: 'normal', textAlign: 'center', boxSizing: 'border-box', height: 50, padding: 13, /*backgroundColor: '#459DDB', /*boxShadow: '3px 2px 12px black'*/ }} onClick={() => history.push(`/materias/${matter.id}`)}>{matter.name}</Button>
                                </Grid>
                            ))
                        }
                        <Grid item xs={10}>
                            <Button variant="contained" color="primary" fullWidth style={{ textAlign: 'center', boxSizing: 'border-box', height: 50, padding: 13, /* backgroundColor: 'rgb(60, 200, 160)' */ }} onClick={() => history.push(`/materias/create`)}>
                                <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    );
}