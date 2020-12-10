import React from 'react'
import { Button } from '@material-ui/core'

export default class FormCompositor extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nome": "",
                "nome_completo": "",
                "nacionalidade": ""

            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setCompositor= () => {
        if(this.props.selecionado){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "nome": "",
            "nome_completo": "",
            "nacionalidade": ""
        })
    }

render(){
    return(
        <form>
        <input type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></input>
        <input type="text" id="nome_completo" value={this.state.nome_completo} onChange={this.handleInput}></input>
        <input type="text" id="nacionalidade" value={this.state.nacionalidade} onChange={this.handleInput}></input>   

        <Button
        variant="contained"
        color="primary"
        type="button" 
        onClick={this.setCompositor}>Inserir
        </Button>
    </form>
    )
}
}
