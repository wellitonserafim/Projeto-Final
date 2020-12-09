import React from 'react'

export default class ListaDiscografia extends React.Component{

    render(){
        var lista = this.props.discografia
        lista = lista.map((item) =>{
            return <li key={item._id}>
            <div>{item.nome}</div>
            <div>{item.genero}</div>
            <div>{item.ano}</div>
            <div>{item.gravadora}</div>
            <div>
            <button onClick={() => this.props.delete(item._id)}>Deletar</button>
            <button onClick={() => this.props.select(item)}>Selecionar</button>
            </div>
            </li>
        })
        return(
            <ul>
                {lista}
            </ul>
        )
    }
}
