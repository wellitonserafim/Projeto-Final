import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid } from '@material-ui/core'
import '../../index.css'

export default class ListaDiscografia extends React.Component {

    render() {
        var lista = this.props.dados
        lista = lista.map((item) => {
            return <li key={item._id}>
                <Grid container class="edit-album">
                    <Accordion>
                        <AccordionSummary>
                            <h3>{item.nome}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid>
                                <div>{item.genero}</div>
                                <div>{item.ano}</div>
                                <div>{item.gravadora}</div>
                                <div>{item.nome_completo}</div>
                                <div>{item.nacionalidade}</div>
                            </Grid>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={() => this.props.select(item)}>Selecionar
                     </Button>
                            </Grid>
                            <Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={() => this.props.delete(item._id)}>Deletar
                     </Button>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </li>
        })
        return (
            <ul>
                {lista}
            </ul>
        )
    }
}
