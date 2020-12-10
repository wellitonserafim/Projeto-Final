import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

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

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-album">
                    <TextField label="Nome" variant="filled" type="text" id="nome" value={this.state.nome} onChange={this.handleInput}> </TextField>
                    <TextField label="Gênero" variant="filled" type="text" id="genero" value={this.state.genero} onChange={this.handleInput}> </TextField>
                    <TextField label="Ano" variant="filled" input type="number" id="ano" value={this.state.ano} onChange={this.handleInput}></TextField>
                    <TextField label="Gravadora" variant="filled" input type="text" id="gravadora" value={this.state.gravadora} onChange={this.handleInput}></TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setAlbum}>Inserir
        </Button>
                </Grid>
            </form>
        )
    }
}
