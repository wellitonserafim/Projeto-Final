import React from 'react'
import FormDiscografia from './FormDiscografia'
import ListaDiscografia from './ListaDiscografia'
import Axios from 'axios'

export default class Discografia extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/album"

        this.state = {
            "discografia": []
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

    render(){
        return(
            <main>
            <section>
                <h2>Formulario</h2>
                <FormDiscografia 
                save={this.SaveDiscografia}>
                </FormDiscografia>
            </section>
            <section>
                <h2>Lista</h2>
                <ListaDiscografia discografia={this.state.discografia}></ListaDiscografia>
            </section>
        </main>
        )
    }
}