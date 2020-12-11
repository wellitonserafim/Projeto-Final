import React from 'react'
import FormCompositor from '../Forms/FormCompositor'
import ListaDiscografia from '../Listagem/ListaDiscografia'
import Axios from 'axios'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core'
import '../../index.css'

export default class Compositor extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/compositor"

        this.state = {
            "compositor": [],
            "selecionado": null
        }
    }

    componentDidMount = () => {
        this.getAllCompositor()
    }

    getAllCompositor = () => {
        var requisicao = Axios.get(this.API_ENDPOINT)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.setState({
                    "compositor": resposta.data
                })
            }
        })
    }

    SaveCompositor = (compositor) => {
        var requisicao = Axios.post(this.API_ENDPOINT, compositor)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllCompositor()
            }
        })
    }

    deleteCompositor = (compositorId) => {
        var requisicao = Axios.delete(this.API_ENDPOINT + "/" + compositorId)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllCompositor()
            }
        })
    }

    putCompositor = (compositor) => {
        var requisicao = Axios.put(this.API_ENDPOINT + "/" + this.state.selecionado._id, compositor)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllCompositor()
            }
        })
    }

    selectCompositor = (compositor) => {
        if(this.state.selecionado === compositor){
            this.setState({
                "selecionado": null
            })
        } else {
            this.setState({
                "selecionado": compositor
            })
        }
    }

    render() {
        var selecionado = this.state.selecionado ? this.state.selecionado._id : null
        return (
            <main>
                <Grid>
                    <section>
                        <h2>Compositor</h2>
                        {selecionado}
                        <FormCompositor
                            save={this.SaveCompositor}
                            put={this.putCompositor}
                            selecionado={this.state.selecionado}
                            key={selecionado}>
                        </FormCompositor>
                    </section>
                    <section>
                    <Accordion>
                    <AccordionSummary>
                        <h3>Lista de Compositor</h3>
                        </AccordionSummary>
                        <AccordionDetails class="edit-album">
                        <ListaDiscografia
                            dados={this.state.compositor}
                            delete={this.deleteCompositor}
                            select={this.selectCompositor}
                        ></ListaDiscografia>
                        </AccordionDetails>
                        </Accordion>
                    </section>
                </Grid>
            </main>
        )
    }
}