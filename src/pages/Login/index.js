import React, { useState } from 'react'

import Menu from '../../components/Menu'

import { Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

import { VpnKey, Send } from '@material-ui/icons'

import { useHistory, Link } from 'react-router-dom'

import api from '../../services/api'

export default function Login() {
    const [ user, setUser ] = useState({ email: '', password: '' })
    const [ error, setError ] = useState({})

    const history = useHistory()

    function changeUser(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
        setError({})
    }

    async function submitData(event) {
        event.preventDefault()
        const response = await api.post('/login', user)
        if(response.data.error) {
            setError({ message: response.data.error })
        } else {
            localStorage.setItem('userId', response.data.userId)
            history.push('/materias')
        }
    }

    return(
        <>
            <Menu />
            <Grid container justify="center" alignContent="center" direction='column' style={{ marginTop: '10vh', textAlign: 'center' }}>
                <Grid item xs={12}>
                <VpnKey color="primary" style={{ fontSize: 180}} />
                </Grid>
                <h1>Login</h1>
                
                <Grid item xs={9} md={5} lg={4} component="form" onSubmit={submitData} style={{ backgroundColor: 'rgb(249, 249, 249)', padding: 10, borderRadius: 10 }} >
                    <TextField error={error.message? true: false} id="standard-basic" fullWidth required label="Email" name="email" type="email" onChange={changeUser} value={user.email} />
                    <TextField error={error.message? true: false} id="standard-basic" fullWidth required label="Senha" name="password" onChange={changeUser} value={user.password} />
                    <Grid item xs style={{ marginTop: 20 }}>
                        { error.message &&
                            <Alert severity="error" style={{ float: "left" }}>
                            { error.message }
                            </Alert>
                        }
                    </Grid>

                    <Grid item xs style={{ marginTop: 20 }}>

                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<Send />}
                        style={{ float: "right" }}
                    >
                        Entrar
                    </Button>
                        
                    </Grid>
                    
                    <Alert style={{ float: 'right', marginTop: 20 }}><p style={{ float: 'right', textAlign: "left" }}>Ainda não está cadastrado? Está esperando o que? 
                        <Link to="/cadastro">cadastre-se agora mesmo</Link> e aproveite as vantagens</p>
                    </Alert>
                        
                </Grid>
            </Grid>
        </>
    )
}