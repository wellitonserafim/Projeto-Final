import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

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

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-album">
                    <TextField label="Nome" variant="filled" type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></TextField>
                    <TextField label="Gênero" variant="filled" type="text" id="genero" value={this.state.genero} onChange={this.handleInput}></TextField>
                    <TextField label="Ano" variant="filled" type="number" id="ano" value={this.state.ano} onChange={this.handleInput}></TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setMusica}>Incluir
                     </Button>
                </Grid>
            </form>
        )
    }
}
