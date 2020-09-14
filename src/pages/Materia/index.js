import React, { useState, useEffect } from 'react'

import SeletorMedia from '../../components/SeletorMedia'
import FormMedia from '../../components/FormMedia'
import Menu from '../../components/Menu'

import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

import api from '../../services/api'

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import DeleteMatterButton from './components/DeleteMatterButton'

import { useHistory } from 'react-router-dom'

export default function Materia(props) {
    const [ mediaType, setMediaType ] = useState(null)
    const [ nomeMateria, setNomeMateria ] = useState('')
    const [ campos, setCampos ] = useState([{index: 0, nota: '', peso: '', isResponse: false}]);
    const [ notasIniciais, setNotasIniciais ] = useState([{index: 0, nota: '', peso: '', isResponse: false}]);
    const [ lastIndex, setLastIndex ] = useState(0);

    const history = useHistory()

    useEffect(() => {
        async function pegarNome() {
            const resp = await api.get(`/matters/${props.match.params.id}`, { headers: { userid: localStorage.getItem('userId') } })
            setNomeMateria(resp.data.name)
        }
        async function consultarApi() {
            const response = await api.get(`/matters/${props.match.params.id}/grades`)
            response.data.map( nota => {

                nota.index = response.data.indexOf(nota);
                setLastIndex(response.data.indexOf(nota));

                if(nota.nota === null) {
                    nota.nota = ''
                }

                if(nota.peso !== null) {
                    setMediaType('Com Pesos')
                } else {
                    nota.peso = ''
                    setMediaType('Comum')
                }
            })
            setCampos(response.data)
            setNotasIniciais(response.data)
            
        }
        pegarNome();
        consultarApi();
    }, [])

    function addCampo() {
        setCampos([...campos, { index: lastIndex + 1, nota: '', peso: '', isResponse: false }])
        setLastIndex(lastIndex + 1)
      }    

    function removeCampo(event, index) {
        event.preventDefault();
    
        if (campos.length > 1) {
          const camposQueFicamIguais = campos.filter(campo => campo.index !== index && campo.id !== index);
          setCampos(camposQueFicamIguais);
        }
      }
    
    function updateCampo(novoCampo, isResp = false) {

        const camposQueFicamIguais = campos.filter(campo => campo.index !== novoCampo.index)
        const campoASerModificado = campos.filter(campo => campo.index === novoCampo.index)
        novoCampo.id = campos[campos.indexOf(campoASerModificado[0])].id
        /*
        campos.map(campo => {
            if(novoCampo.index === campo.id) {
                novoCampo.id = campo.id
            }
        })*/
        novoCampo.isResponse = isResp;
        setCampos([ ...camposQueFicamIguais, novoCampo ]);
    }

      async function salvarNotas() {
        await api.put(`/matters/${props.match.params.id}/update`, { matterName: nomeMateria }, { headers: { userid: localStorage.getItem('userId') } })

          if(mediaType === 'Comum') {
              campos.map(campo => {
                  campo.peso = ''
              })
          }

          let notas = campos

            notasIniciais.map(notaInicial => {
                let existe = false;

                notas.map(nota => {
                    if(nota.id && nota.id === notaInicial.id) {
                        //existe = true
                    }
                })
                
                if(!existe) {
                    //notas.push({ ...notaInicial, delete: true })
                }
            })


            notas.map(nota => {
                nota.weight = nota.peso
                nota.value = nota.nota
            })
         
          
          const notasAtualizadas = await api.put('/grades/update', {
              matter: {
                  matterId: props.match.params.id
              },
              grades: notas
          }, {headers: {
              userid: localStorage.getItem('userId')
          }})

          notasAtualizadas.data.map(nota => {
              nota.index = notasAtualizadas.data.indexOf(nota);
              setLastIndex(notasAtualizadas.data.indexOf(nota));

              if(nota.nota === null) {
                  nota.nota = ''
              }

              if(nota.peso === null) {
                  nota.peso = ''
              }
          })

          setCampos(notasAtualizadas.data)
          history.push('/materias')
          
      }

      async function deletarMateria() {

        let notas = campos
        
        notas.map(nota => {
            nota.delete = true
        })

        await api.put('/grades/update', { matter: { matterId: props.match.params.id }, grades: notas }, { headers: { userid: localStorage.getItem('userId') } })
    
        await api.delete(`/matters/${props.match.params.id}/delete`)

        history.push('/materias')
      }

    return(
        <>
            <Menu logout />
                <Grid container direction="row" alignItems="center"  style={{ marginTop: '6.5vh' }} >
                        <ArrowBackIcon style={{ cursor: 'pointer' }} onClick={() => history.goBack()} /> <h3 style={{ cursor: 'pointer' }} onClick={() => history.goBack()}> Voltar</h3>
                </Grid>
            <Grid container justify="center">
                <Grid item xs={11} md={6} lg={3}>
                    <form style={{ backgroundColor: 'white', padding: 12, borderRadius: 6 }}>
                        <h3>Matéria</h3>
                        <TextField 
                            label='Nome' 
                            variant='outlined' 
                            fullWidth 
                            value={nomeMateria}
                            onChange={event => setNomeMateria(event.target.value)} 
                        />
                        
                        <SeletorMedia type={{ mediaType, setMediaType }} />
                        <h3>Notas</h3>
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
                                <DeleteMatterButton deletarMateria={deletarMateria} />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: 10, fontFamily: 'Arial', fontWeight: 'normal', float: 'right' }}
                                    endIcon={<SendIcon />}
                                    onClick={salvarNotas}
                                >
                                    Salvar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}