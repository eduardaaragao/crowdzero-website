import React,{Component} from 'react'
import Button from '../Button'
import Search from '../SearchBar'
import axios from 'axios'

export default class AssociadosPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            associados: [],
            filter: '',
            updated: false           
        }
    }

    getAssociados = async () => {
        const id = localStorage.getItem('instituicao')

        const data = {
            id: id
        }

        if (data.id){
            try{
                const res = await axios.get('associacao/list', {params: data})
                this.setState({
                    associados: res.data.data
                })
            }catch(e){
                alert(e)
            }
        }
    }

    componentDidMount(){
        this.getAssociados()
    }

    handleUpdate = () => {
        this.setState({
            updated: !this.state.updated
        })
    }
    
    componentDidUpdate(){
        if (this.state.updated){
            this.getAssociados()
            this.handleUpdate()
        }
    }

    onChange = (e) => {
        this.setState({filter: e.target.value})
    }

    onDelete = async (e) => {
        const data = {
            id: e
        }

        try{
            await axios.post('associado/delete', data)
        }catch(e){
            alert(e)
        }
        this.handleUpdate()
    }

    render() {
        let {filter, associados} = this.state
        let dataSearch = associados.filter(item =>{
            return Object.keys(item).some(key => item.nome.toLowerCase().includes(filter.toLowerCase()))
        })

        return (
        <div className="overview--section">
            <h1>Associados</h1>
                <p>Nesta página você encontra a lista de todas as pessoas que estão associadas<br/>
                à sua instituição e/ou fizeram reportes recentemente. Podes filtrar as pesquisas por:<br/>
                <b>nome</b>, <b>ID</b> e <b>data de associação</b>.</p>
                <Search onChange={this.onChange}/>
                
                <table id="customers">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Data de Associação</th>
                            <th scope="col">Reportes Realizados</th>
                            <th scope="col">Último reporte</th>
                            <th scope="col">Acção</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {dataSearch.map((data =>{
                            return(
                                <tr key={data.id}>
                                    <th>{data.id}</th>
                                    <td>{data.nome}</td>
                                    <td>{data.data}</td>
                                    <td>{data.reportes}</td>
                                    <td>{data.ultimo}</td>
                                    <td>
                                       <Button onClick={() => this.onDelete(data.id)} colorFrom='#F57272' colorTo='#F57272' name="Remover"/>
                                    </td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>        
        </div>
        )
    }
}

/**
                         */
