import React, { useState } from 'react'

import { Grid, TextField, Button } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send'

import Menu from '../../components/Menu'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Cadastro() {
    const [ user, setUser ] = useState({
        email: '',
        name: '',
        password: '',
        average: ''
    })

    const [ error, setError ] = useState(null)

    const history = useHistory()

    function changeUser(event) {
        if(event.target.name === "average" && event.target.value !== '') {
            event.target.value = isNaN(Number(event.target.value))? '': event.target.value 
        }

        if(event.target.name === 'email') {
            setError(null)
        }

        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function gravarUsuario(event) {
        event.preventDefault()

        const response = await api.post('/users/create', {
            email: user.email,
            name: user.name,
            password: user.password,
            average: user.average
        })

        if(!response.data.error) {
            localStorage.setItem('userId', response.data.id)
            history.push('/materias')
        } else {
            setError(response.data.error)
        }

    }
    return (
        <>
            <Menu login />
            <Grid container justify="center" style={{ marginTop: '10vh' }}>
                <Grid item xs={10} md={6} lg={4}>
                    <form onSubmit={gravarUsuario} style={{ backgroundColor: 'white', padding: 12, borderRadius: 8, float: 'right' }}>
                    <h1 style={{ textAlign: 'center' }}>Cadastro</h1>
                        <TextField 
                            variant="outlined"
                            style={{ marginTop: 10 }}
                            label="Email"
                            required
                            fullWidth
                            name="email"
                            value={user.email}
                            onChange={changeUser}
                        />

                        <TextField 
                            variant="outlined"
                            style={{ marginTop: 10 }}
                            label="Nome"
                            required
                            fullWidth
                            name="name"
                            value={user.name}
                            onChange={changeUser}
                        />
                        
                        <TextField 
                            variant="outlined"
                            style={{ marginTop: 10 }}
                            label="Média Escolar"
                            required
                            fullWidth
                            name="average"
                            value={user.average}
                            onChange={changeUser}
                        />

                        <TextField 
                            variant="outlined"
                            style={{ marginTop: 10 }}
                            label="Senha"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={changeUser}
                        />

                        <Grid container justify="space-between" style={{ marginTop: 10 }}>

                        <Grid item xs={5} style={{ float: 'left', height: '100%' }}>
                            {
                                error && 
                                <Alert severity="error" style={{ float: 'left', height: '100%' }}>
                                    {error}
                                </Alert>
                            }
                        </Grid>

                        <Grid item xs={5} style={{ float: 'right' }}>
                            <Button
                                variant="contained"
                                style={{ float: 'right' }}
                                color="primary"
                                endIcon={<SendIcon />}
                                type='submit'
                            >
                                Cadastrar
                            </Button>
                        </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}