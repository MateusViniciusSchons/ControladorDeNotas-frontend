import React, { useState, useEffect } from 'react'

import SeletorMedia from '../../components/SeletorMedia'
import FormMedia from '../../components/FormMedia'
import Menu from '../../components/Menu'
import Alert from '../../components/Alert'

import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

import api from '../../services/api'

import updateWeight from '../../helpers/updateWeight';
import validate from '../../helpers/validate';

import Grid from '@material-ui/core/Grid';
import { Button, TextField, Snackbar } from '@material-ui/core';

import { useHistory } from 'react-router-dom'


export default function Materia(props) {
    const [ mediaType, setMediaType ] = useState('Comum')
    const [ nomeMateria, setNomeMateria ] = useState('')
    const [ campos, setCampos ] = useState([{index: 0, nota: '', peso: '', isResponse: false}]);
    const [ lastIndex, setLastIndex ] = useState(0);
    const [ erros, setErros ] = useState([]);
    const [ media, setMedia ] = useState(Number(localStorage.getItem('userAverage')));

    const history = useHistory()

    useEffect(() => {

    }, []);

    useEffect(() => {
        let errs = validate.validateFields(campos, mediaType);

        setErros(errs.length > 0? [errs[0]]:[])
      }, [campos, mediaType]);

      useEffect(() => {
        if(mediaType === "Comum") {
            let newFields = updateWeight(campos);
            setCampos(newFields);
        }
      }, [mediaType]);
    

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

      async function calcularESalvarNotas() {
        const response = await api.post('/calculations/grade', { notas: campos, media });
        const matter = await api.post(`/matters/create`, { matterName: nomeMateria, average: media }, { headers: { userid: localStorage.getItem('userId') } })

          if(mediaType === 'Comum') {
              campos.map(campo => {
                  campo.peso = ''
              })
          }

          let notas = campos;

            notas = notas.filter(nota => nota.vota !== null && nota.nota !== '');
            notas.push(...response.data.notas);

            notas.map(nota => {
                nota.weight = Number(nota.peso)
                nota.peso = Number(nota.peso)
                nota.value = Number(nota.nota)
                nota.nota = Number(nota.nota)
                nota.isResponse = nota.isResponse? nota.isResponse: false
            })
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
                            label='Nome' 
                            variant='outlined' 
                            fullWidth 
                            value={nomeMateria}
                            onChange={event => setNomeMateria(event.target.value)} 
                        />
                        <TextField 
                            style={{ marginTop: 15}}
                            label='Média' 
                            variant='outlined' 
                            fullWidth 
                            value={media}
                            onChange={event => setMedia(Number(event.target.value))} 
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
                                        disabled={ erros.length > 0 ? true: false}
                                        variant="contained"
                                        color="primary"
                                        style={{ marginTop: 10, fontFamily: 'Arial', fontWeight: 'normal', float: 'right' }}
                                        endIcon={<SendIcon />}
                                        onClick={calcularESalvarNotas}
                                    >
                                        Calcular e Cadastrar
                                    </Button>
                            </Grid>
                        </Grid>
                        {
                erros.map(erro => (
                  <Snackbar open={true} autoHideDuration={6000} key={erro.message}>
                    <Alert severity="warning">
                      { erro.message }
                    </Alert>
                  </Snackbar>
                ))
                }
                    </form>
                </Grid>
            </Grid>
        </>
    );
}