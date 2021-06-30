import React, {Component} from 'react'
import '../../CSS/style.css'
import SearchBar from '../SearchBar'
import CriarLocal from '../CriarLocalCard'
import Card from '../CriarLocalCard/card'
import axios from 'axios'

export default class EspacosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            filter: '',
            dataLocais: [],
            updated: false,
        }
    }

    // Método para chamar API e obter dados dos locais internos da instituição
    getLocais = async () =>{
        let id = localStorage.getItem("instituicao")

        const data = {
            id: id,
        }

        try{
            const res = await axios.get('local/list', {params: data})
            this.setState({
                dataLocais: res.data.data})
        }catch(e){
            alert(e)
        }
    }

    componentDidMount(){
        this.getLocais()
    }

    componentDidUpdate(){
        if (this.state.updated){
            this.getLocais()
            this.handleUpdate()
        }
    }

    onChangeSearch = (e) =>{
      this.setState({filter: e.target.value})
    }

    handleUpdate =(e) => {
        this.setState({
            updated: !this.state.updated
        })
    }

    render(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        let {filter, dataLocais} = this.state
        let dataSearch = dataLocais.filter(item => {
            return Object.keys(item).some(key => item.nome.toLowerCase().includes(filter.toLowerCase()))
        })
        return(
            <div className="overview--section">
                <h1>Espaços cadastrados</h1>
                <SearchBar onChange={this.onChangeSearch} value={filter}/>

                <div className="espacos--wrapper">
                    <CriarLocal/>

                    {dataSearch.map(item => {
                        return(
                            <Card updated={this.handleUpdate} key={item.id} data={item}/>
                        )
                    })}
                </div>
            </div>
        )
    } 
}