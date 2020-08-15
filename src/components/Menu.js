import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { Menu as MenuIcon, ExitToApp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Mountain from '../img/Mountain.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu (props) {
    const classes = useStyles();

    const history = useHistory()

    function logout() {
      localStorage.removeItem('userId')
      history.push('/')
    }

    return(
        <AppBar className={classes.root}>
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => history.push('/')}>
                <img src={Mountain} alt="Logo Controlador de Notas"  />
                
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Controlador de Notas
              </Typography>

              {
                props.login &&
                <Link to='/login' style={{ color: 'white', textDecoration: 'none' }}><Button color="inherit">Login</Button></Link>
              }
              {
                props.logout &&
                
                <Button variant="text" color="inherit" onClick={logout} style={{ fontWeight: 'normal' }}>Sair</Button>
              
              }
          </Toolbar>
        </AppBar>
    );
}