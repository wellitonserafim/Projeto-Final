import React from 'react'
export default class FormPokemon extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                "nome": "",
                "ano": 0
            }
        }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    setDiscografia = () => {
        if(this.props.selecionado){
            this.props.put(this.state)
        }else{
            this.props.save(this.state)
        }

        this.setState({
            "nome": "",
            "ano": 0
        })
    }

render(){
    return(
        <form>
        <input type="text" id="nome" value={this.state.nome} onChange={this.handleInput}></input>
        <input type="number" id="ano" value={this.state.ano} onChange={this.handleInput}></input>   
        <button type="button" onClick={this.setDiscografia}>Inserir</button>
    </form>
    )
}
}
