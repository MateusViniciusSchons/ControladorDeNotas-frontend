import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MobileStepper from '@material-ui/core/MobileStepper';

export default function Menu () {
    return(
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Controlador de Notas
            </Typography>
          </Toolbar>
        </AppBar>
    );
}