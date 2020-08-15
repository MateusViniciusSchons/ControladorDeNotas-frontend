import React, { useState } from 'react'

import { Button, TextField, Popover, Typography } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export default function DeleteMatterButton(props) {

    const [ anchorEl, setAnchorEl ] = useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
      };

    function handleClose() {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
        <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: 10, fontFamily: 'Arial', fontWeight: 'normal', float: 'left' }}
            endIcon={<DeleteOutlinedIcon />}
            onClick={handleClick}
        >
            Deletar
        </Button>

        
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
        >
        <Typography><Button variant="outlined" color="secondary" onClick={props.deletarMateria}>Clique aqui para deletar a matéria</Button></Typography>
      </Popover>
      </>
    );
}