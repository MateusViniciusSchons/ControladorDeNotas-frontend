import React from 'react';
import { Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Instrucoes() {
    return(
        <>
                <h1>Como funciona?</h1>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Escolha o tipo de média
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                            Nós trabalhamos com dois tipos de média: Comum e Com Pesos.Se não sabe o que significa, <a href="/">clique aqui</a> e descubra.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Digite o valor da média escolar.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
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
                            <Typography>
                                Adicione o número de campos que seriam suas notas no semestre.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
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
                            <Typography>
                                Preencha os campos com as notas que você tem.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
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
                            <Typography>
                            Clique em <strong>calcular</strong>.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
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
                            <Typography>
                            Os resultados aparecerão em cor verde nos campos que você deixou em branco.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Pronto! Agora você pode dormir tranquilo sabendo a nota que precisa tirar.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                Sinta-se à vontade para modificar as informações que quiser e recalcular as notas.
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Você pode pensar "Tá, mas e se eu tirar 8 na próxima nota, de quanto preciso para atingir a média?".
                                Tchanam!! Nós te ajudamos com isso também. Modifique os campos e clique novamente em calcular para ver o resultado.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

        </>
    )
}