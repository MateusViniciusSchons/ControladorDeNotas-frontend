import React, { useState, useEffect } from 'react';

import FormMedia from './FormMedia';
import SeletorMedia from './SeletorMedia';
import Instrucoes from './Instrucoes';

import '../App.css';
import api from '../services/api';

import MuiAlert from '@material-ui/lab/Alert';

import { Button, Snackbar,TextField, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

import Grid from '@material-ui/core/Grid';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Calculadora() {
  let errs = []
  const [ campos, setCampos ] = useState([{index: 0, nota: '', peso: '', isResponse: false}]);
  const [ lastIndex, setLastIndex ] = useState(0);
  const [ mediaType, setMediaType ] = useState("Comum");
  const [ erros, setErros ] = useState([])
  const [ media, setMedia ] = useState('');
  useEffect(() => {
    function atualizarNotasNulas() {
      let soma = 0;
      campos.map(campo => {
        if(campo.nota === '' || campo.nota === undefined || campo.nota === null || campo.isResponse === true) {
          soma += 1;
        }
        return null;
      })
      if(soma === 0) {
          let novoArray = errs.filter(erro => erro.message !== "Deve ter no mínimo 1 nota sem valor")
          errs = [...novoArray, { message: "Deve ter no mínimo 1 nota sem valor"}]
          
      } else {
         
          let novoArray =  errs.filter(erro => erro.message !== "Deve ter no mínimo 1 nota sem valor")
        errs = [
          ...novoArray
        ]
      }
      
    }

    function atualizarSomaPesos() {
    
        let soma = 0
        campos.map(campo => {
          if(!isNaN(campo.peso)) {
            soma += Number(campo.peso)
          }
          return null;
        })

        if(soma !== 10 && mediaType === "Com Pesos") {
          let novoArray = errs.filter(erro => erro.message !== "A soma dos pesos deve ser 10")
          errs = [
            ...novoArray,
            { message: "A soma dos pesos deve ser 10"}
          ]
          
        } else {
          let novoArray = errs.filter(erro => erro.message !== "A soma dos pesos deve ser 10")
          errs = [
            ...novoArray
          ]
        }
      }

      function TodosOsCamposTemPeso() {
        if(mediaType === "Com Pesos" && campos.filter(campo => campo.peso === "").length > 0) {
          let novoArray = errs.filter(erro => erro.message !== "Todos os campos devem ter peso")
          errs = [
            ...novoArray, 
            { message: "Todos os campos devem ter peso"}
          ]
          
        } else {
          let novoArray = errs.filter(erro => erro.message !== "Todos os campos devem ter peso")
          errs = [
            ...novoArray
          ]
          
        }
      }

      function notasMaioresQue10() {
        campos.map(campo => {
          if(!campo.isResponse) {
            if(Number(campo.nota) > 10) {
              let novoArray = errs.filter(erro => erro.message !== "As notas devem ser menores do que 10")
              errs = [
                ...novoArray, 
                { message: "As notas devem ser menores do que 10"}
              ]
            } else if(Number(campo.nota) < 0) {
              let novoArray = errs.filter(erro => erro.message !== "As notas devem ser maiores do que 0")
              errs = [
                ...novoArray, 
                { message: "As notas devem ser maiores do que 0"}
              ]
            } else {

            }
          }
          return null;
        })
      }

    atualizarSomaPesos();
    atualizarNotasNulas();
    TodosOsCamposTemPeso();
    notasMaioresQue10();

    setErros(errs.length > 0? [errs[0]]:[])
  }, [campos, mediaType])

  useEffect(() => {

    function updatePesos() {
      if(mediaType === "Comum") {
        campos.map(campo => {
          campo.peso = ''
          return null;
        })
        setCampos(campos)
        
      }
    }

    updatePesos();
    setErros(errs)
  }, [mediaType])

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

  async function consultarApi(e) {
    e.preventDefault();
    campos.map(nota => {
      if(nota.nota !== "") {
        nota.nota = Number(nota.nota)
      }
      if(nota.peso !== "") {
        nota.peso = Number(nota.peso)
      }
      return null;
    })
    const response = await api.post('/calculations/grade', { notas: campos, media });

    let camposNormais = campos;

    camposNormais.map(campo => {
      response.data.notas.map(nota => {
        if(campo.index === nota.index) {
          campo.nota = Number(nota.nota);
          campo.isResponse = true;
        }
        return null;
      })
      return null;
    })
    setCampos([...camposNormais])
  }

  return (
    <>
    <Grid container direction="row" justify="space-evenly" spacing={2}>
        <Grid item xs={10} sm={7} md={4} style={{ backgroundColor: 'white', marginTop: '30px', borderRadius: 5, padding: 20 } /* #1CC6E6  #DB1A3C bgcolor ADB4B8 */}>
            <form autoComplete="off">
            <Grid container >
                <Grid item xs={12} >
                    <SeletorMedia type={{ mediaType, setMediaType }} />
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={10} >
                    <h3>Média Escolar</h3>
                    <TextField
                        type="number"
                        fullWidth
                        required
                        inputProps={{
                          required: true
                        }}
                        max={10}
                        min={0}
                        step="1.3"
                        id="outlined-basic"
                        label="Media" 
                        variant="outlined" 
                        value={media} 
                        onChange={e => setMedia(!isNaN(e.target.value) && e.target.value !== '' && e.target.value >= 0 && e.target.value <= 10 ? e.target.value: e.target.value === ''? '': media)}
                    />
                </Grid>
            </Grid>

            <h3>Notas</h3>
            <Grid container justify="center">
                <Grid item xs={12}>
                    {
                        campos.sort(function(a, b) {return parseInt(a.index) - parseInt(b.index)}).map(campo => (
                            <FormMedia key={campo.index} campo={campo} removeCampo={removeCampo} updateCampo={updateCampo} mediaType={mediaType} />
                        ))
                    }
                </Grid>
                <Grid item xs={10}>
                    <Button fullWidth onClick={addCampo} style={{ marginTop: 10 }} variant="contained" color="primary">
                        <AddIcon />
                    </Button>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
                
                <br/>
                
                <Grid container>
                  <Grid item xs={10}>
                  <Grid container justify="flex-end">
                  <Button
                  disabled={ erros.length > 0 || media === undefined || media === null || media === ''? true: false}
                  style={{ marginTop: 10 }} 
                  variant="contained"
                  color="primary"
                  type="submit"
                  endIcon={<SendIcon />}
                  onClick={consultarApi}
                  >
                    Calcular
                  </Button>
                  </Grid>
                  </Grid>
                  <Grid item xs={2}></Grid>
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

        <Grid item xs={11} md={6}>
            <Instrucoes />
        </Grid>
    </Grid>
    </>
  );
}

export default Calculadora;
