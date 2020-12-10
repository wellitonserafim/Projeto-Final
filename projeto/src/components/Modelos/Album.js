import React from 'react'
import FormAlbum from '../Forms/FormAlbum'
import ListaDiscografia from '../Listagem/ListaDiscografia'
import Axios from 'axios'

export default class Album extends React.Component{

    constructor(props){
        super(props)

        this.API_ENDPOINT = "http://localhost:8080/album"

        this.state = {
            "album": [],
            "selecionado": null
        }
    }

    componentDidMount = () => {
        this.getAllAlbum()
    }

    getAllAlbum = () => {
        var requisicao = Axios.get(this.API_ENDPOINT)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.setState({
                    "album": resposta.data
                })
            }
        })
    }

    SaveAlbum = (album) => {
        var requisicao = Axios.post(this.API_ENDPOINT, album)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllAlbum()
            }
        })
    }

    deleteAlbum = (albumId) => {
        var requisicao = Axios.delete(this.API_ENDPOINT + "/" + albumId)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllAlbum()
            }
        })
    }

    putAlbum = (album) => {
        var requisicao = Axios.put(this.API_ENDPOINT + "/" + this.state.selecionado._id, album)
        requisicao.then((resposta) => {
            if(resposta.status === 200){
                this.getAllAlbum()
            }
        })
    }

    selectAlbum = (album) => {
        if(this.state.selecionado === album){
            this.setState({
                "selecionado": null
            })
        } else {
            this.setState({
                "selecionado": album
            })
        }
    }

    render(){
        var selecionado = this.state.selecionado ? this.state.selecionado._id : null
        return(
            <main>
            <section>
                <h2>Album</h2>
                {selecionado}
                <FormAlbum 
                save={this.SaveAlbum}
                put={this.putAlbum}
                selecionado={this.state.selecionado}
                key={selecionado}>
                </FormAlbum>
            </section>
            <section>
                <h2>Lista de Album</h2>
                <ListaDiscografia 
                dados={this.state.album}
                delete={this.deleteAlbum}
                select={this.selectAlbum}
                ></ListaDiscografia>
            </section>
        </main>
        )
    }
}