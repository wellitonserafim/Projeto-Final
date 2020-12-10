import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core'
import '../../index.css'

export default class ListaDiscografia extends React.Component {

    render() {
        var lista = this.props.dados
        lista = lista.map((item) => {
            return <li key={item._id}>
                <Accordion>
                    <AccordionSummary>
                        <div>{item.nome}</div>
                        <div>{item.genero}</div>
                        <div>{item.ano}</div>
                        <div>{item.gravadora}</div>
                        <div>{item.nome_completo}</div>
                        <div>{item.nacionalidade}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={() => this.props.select(item)}>Selecionar
                     </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={() => this.props.delete(item._id)}>Deletar
                     </Button>
                    </AccordionDetails>
                </Accordion>
            </li>
        })
        return (
            <ul>
                {lista}
            </ul>
        )
    }
}
