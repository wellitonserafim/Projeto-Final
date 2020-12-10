import React from 'react'
import { Button } from '@material-ui/core'

export default class FormMusica extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nome": "",
                "genero":"",
                "ano": 0
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setMusica = () => {
        if(this.props.selecionado){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "nome": "",
            "genero": "",
            "ano": 0
        })
    }

render(){
    return(
        <form>
        <input type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></input>
        <input type="text" id="genero" value={this.state.genero} onChange={this.handleInput}></input>
        <input type="number" id="ano" value={this.state.ano} onChange={this.handleInput}></input>   
        <Button
        variant="contained"
        color="primary"
        type="button" 
        onClick={this.setDiscografia}>Inserir
        </Button>
    </form>
    )
}
}
