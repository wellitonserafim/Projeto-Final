import React from 'react'
import FormDiscografia from './FormDiscografia'
import ListaDiscografia from './ListaDiscografia'
import Axios from 'axios'

export default class Discografia extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/album"

        this.state = {
            "discografia": [],
            "selecionado": null
        }
    }

    componentDidMount = () => {
        this.getAllDiscografia()
    }

    getAllDiscografia = () => {
        var requisicao = Axios.get(this.API_ENDPOINT)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.setState({
                    "discografia": resposta.data
                })
            }
        })
    }

    SaveDiscografia = (discografia) => {
        var requisicao = Axios.post(this.API_ENDPOINT, discografia)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllDiscografia()
            }
        })
    }

    deleteDiscografia = (discografiaId) => {
        var requisicao = Axios.delete(this.API_ENDPOINT + "/" + discografiaId)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllDiscografia()
            }
        })
    }

    putDiscografia = (discografia) => {
        var requisicao = Axios.put(this.API_ENDPOINT + "/" + this.state.selecionado._id, discografia)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllDiscografia()
            }
        })
    }

    selectDiscografia = (discografia) => {
        if(this.state.selecionado == discografia){
            this.setState({
                "selecionado": null
            })
        } else {
            this.setState({
                "selecionado": discografia
            })
        }
    }

    render(){
        var selecionado = this.state.selecionado ? this.state.selecionado._id : null
        return(
            <main>
            <section>
                <h2>Formulario</h2>
                {selecionado}
                <FormDiscografia 
                save={this.SaveDiscografia}
                put={this.putDiscografia}
                selecionado={this.state.selecionado}
                key={selecionado}>
                </FormDiscografia>
            </section>
            <section>
                <h2>Lista</h2>
                <ListaDiscografia 
                discografia={this.state.discografia}
                delete={this.deleteDiscografia}
                select={this.selectDiscografia}
                ></ListaDiscografia>
            </section>
        </main>
        )
    }
}