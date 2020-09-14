import React, { useState } from 'react'

import SeletorMedia from '../../components/SeletorMedia'
import FormMedia from '../../components/FormMedia'
import Menu from '../../components/Menu'

import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

import api from '../../services/api'

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

import { useHistory } from 'react-router-dom'

export default function Materia(props) {
    const [ mediaType, setMediaType ] = useState('Comum')
    const [ nomeMateria, setNomeMateria ] = useState('')
    const [ campos, setCampos ] = useState([{index: 0, nota: '', peso: '', isResponse: false}]);
    const [ lastIndex, setLastIndex ] = useState(0);

    const history = useHistory()

    function addCampo() {
        setCampos([...campos, { index: lastIndex + 1, nota: '', peso: '', isResponse: false }])
        setLastIndex(lastIndex + 1)
      }    

    function removeCampo(event, index) {
        event.preventDefault();
    
        if (campos.length > 1) {
          const novosCampos = campos.filter(campo => campo.index !== index)
          setCampos(novosCampos);
        }
      }
    
      function updateCampo(novoCampo, isResp = false) {
    
          const novosCampos = campos.filter(campo => campo.index !== novoCampo.index)
          
          novoCampo.isResponse = isResp;
          setCampos([ ...novosCampos, novoCampo ]);
      }

      async function salvarNotas() {
        const matter = await api.post(`/matters/create`, { matterName: nomeMateria }, { headers: { userid: localStorage.getItem('userId') } })

          if(mediaType === 'Comum') {
              campos.map(campo => {
                  campo.peso = ''
              })
          }

          let notas = campos;

            notas.map(nota => {
                nota.weight = nota.peso
                nota.peso = nota.peso
                nota.value = nota.nota
                nota.nota = nota.nota
            })
         
            console.log("Notas: ", notas)
          
          await api.put('/grades/update', {
              matter: {
                matterId: matter.data.id
              },
              grades: notas
          }, {
              headers: {
              userid: localStorage.getItem('userId')
          }})

          history.push('/materias')
          
      }

    return(
        <>
            <Menu logout />
            <Grid container justify="center" style={{ marginTop: '10vh' }}>
                <Grid item xs={11} md={6} lg={3}>
                    <form style={{ backgroundColor: 'white', padding: 12, borderRadius: 6 }}>
                        <h5 onClick={() => history.goBack()}>voltar</h5>
                        <h3>Matéria</h3>
                        <TextField 
                            label='nome' 
                            variant='outlined' 
                            fullWidth 
                            value={nomeMateria}
                            onChange={event => setNomeMateria(event.target.value)} 
                        />
                        <SeletorMedia type={{ mediaType, setMediaType }} />
                        {
                            campos.sort(function(a, b) {return parseInt(a.index) - parseInt(b.index)}).map(campo => (
                                <FormMedia key={campo.id? campo.id: campo.index} campo={campo} removeCampo={removeCampo} updateCampo={updateCampo} mediaType={mediaType} />
                            ))
                        }
                        <Grid item xs={10}>
                            <Button 
                            variant="contained" 
                            color='primary'
                            fullWidth
                            style={{ marginTop: 10 }}
                            onClick={addCampo}
                            >
                                <AddIcon />
                            </Button>
                        </Grid>
                        <Grid container justify='flex-start'>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: 10, fontFamily: 'Arial', fontWeight: 'normal', float: 'right' }}
                                    endIcon={<SendIcon />}
                                    onClick={salvarNotas}
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