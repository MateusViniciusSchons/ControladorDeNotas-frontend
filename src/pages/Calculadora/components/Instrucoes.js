import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Instrucoes() {
    return(
        <>
                <h2>Como funciona?</h2>
                <div >
                    <ExpansionPanel square={true} style={{ border: 'none', borderRadius: '10px 10px 0 0' }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                                Escolha o tipo de média
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ border: 'none' }}>
                            <Typography  style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                            Nós trabalhamos com dois tipos de média: Comum e Com Pesos.Se não sabe o que significa, role a página para baixo e descubra.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                                Digite o valor da média escolar.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                A média é o valor mínimo para um aluno ser aprovado. É um valor entre 0 e 10, assim como as notas.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                                Adicione o número de campos que seriam suas notas no semestre.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                Se terão três notas durante o semestre, adicione três campos. Se não sabe quantas notas terá, peça para seu(ua) professor(a) quantas notas terão no semestre, ele pode te ajudar com isso.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                                Preencha os campos com as notas que você tem.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                Os campos que representam as notas que você não tem, deixe em branco. Calcularemos a nota que você precisa tirar nelas.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                            Clique em <strong>calcular</strong>.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                Vamos calcular as notas que você precisará para atingir a média. Não é incrível?
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                            Os resultados aparecerão em cor verde nos campos que você deixou em branco.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                Pronto! Agora você pode dormir tranquilo sabendo a nota que precisa tirar.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel style={{ borderRadius: '0 0 10px 10px' }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '400' }}>
                                Sinta-se à vontade para modificar as informações que quiser e recalcular as notas.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={{ fontFamily: 'Roboto', fontWeight: '300' }}>
                                Você pode pensar "Tá, mas e se eu tirar 8 na próxima nota, de quanto preciso para atingir a média?".
                                Tchanam!! Nós te ajudamos com isso também. Modifique os campos e clique novamente em calcular para ver o resultado.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

        </>
    )
}