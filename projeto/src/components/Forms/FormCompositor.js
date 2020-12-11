import React from 'react'
import { TextField, Button, Grid  } from '@material-ui/core'
import '../../index.css'

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

    render() {
        return (
            <form>
                <Grid container spacing={1} class="edit-album">
                    
                    <TextField label="Nome" variant="filled" type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></TextField>
                    <TextField label="Nome Completo" variant="filled" type="text" id="nome_completo" value={this.state.nome_completo} onChange={this.handleInput}></TextField>
                    <TextField label="Nacionalidade" variant="filled" type="text" id="nacionalidade" value={this.state.nacionalidade} onChange={this.handleInput}></TextField>

                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={this.setCompositor}>Incluir
        </Button>
                </Grid>
            </form>
        )
    }
}
