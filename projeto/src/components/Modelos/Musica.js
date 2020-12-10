import React from 'react'
import FormMusica from '../Forms/FormMusica'
import ListaDiscografia from '../Listagem/ListaDiscografia'
import Axios from 'axios'

export default class Musica extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/musica"

        this.state = {
            "musica": [],
            "selecionado": null
        }
    }

    componentDidMount = () => {
        this.getAllMusica()
    }

    getAllMusica = () => {
        var requisicao = Axios.get(this.API_ENDPOINT)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.setState({
                    "musica": resposta.data
                })
            }
        })
    }

    SaveMusica= (musica) => {
        var requisicao = Axios.post(this.API_ENDPOINT, musica)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllMusica()
            }
        })
    }

    deleteMusica = (musicaId) => {
        var requisicao = Axios.delete(this.API_ENDPOINT + "/" + musicaId)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllMusica()
            }
        })
    }

    putMusica = (musica) => {
        var requisicao = Axios.put(this.API_ENDPOINT + "/" + this.state.selecionado._id, musica)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllMusica()
            }
        })
    }

    selectMusica = (musica) => {
        if(this.state.selecionado == musica){
            this.setState({
                "selecionado": null
            })
        } else {
            this.setState({
                "selecionado": musica
            })
        }
    }

    render(){
        var selecionado = this.state.selecionado ? this.state.selecionado._id : null
        return(
            <main>
            <section>
                <h2>Música</h2>
                {selecionado}
                <FormMusica 
                save={this.SaveMusica}
                put={this.putMusica}
                selecionado={this.state.selecionado}
                key={selecionado}>
                </FormMusica>
            </section>
            <section>
                <h2>Lista de Música</h2>
                <ListaDiscografia 
                dados={this.state.musica}
                delete={this.deleteMusica}
                select={this.selectMusica}
                ></ListaDiscografia>
            </section>
        </main>
        )
    }
}