import React from 'react'
import { Button } from '@material-ui/core'

export default class FormAlbum extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nome": "",
                "genero": "",
                "ano": 0,
                "gravadora": ""
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setAlbum = () => {
        if(this.props.selecionado){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "nome": "",
            "genero": "",
            "ano": 0,
            "gravadora": ""
        })
    }

render(){
    return(
        <form>
        <input type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></input>
        <input type="text" id="genero" value={this.state.genero} onChange={this.handleInput}></input>
        <input type="number" id="ano" value={this.state.ano} onChange={this.handleInput}></input>
        <input type="text" id="gravadora" value={this.state.gravadora} onChange={this.handleInput}></input>   
        <Button
        variant="contained"
        color="primary"
        type="button" 
        onClick={this.setAlbum}>Inserir
        </Button>
    </form>
    )
}
}
