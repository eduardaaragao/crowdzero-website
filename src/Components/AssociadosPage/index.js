import React from 'react'
import associados from '../../Files/associados.json'
import Button from '../Button'
import Search from '../SearchBar'

export default class AssociadosPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            listAssociados: [],
            filter: ''            
        }
    }

    componentDidMount(){
        this.setState({listAssociados: associados})
    }

    onChange = (e) => {
        this.setState({filter: e.target.value})
    }

    render() {
        let {filter, listAssociados} = this.state
        let dataSearch = listAssociados.filter(item=>{
            return Object.keys(item).some(key => item.nome.toString().toLowerCase().includes(filter.toLowerCase()))
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
                                       <Button onClick={null} colorFrom='#F57272' colorTo='#F57272' name="Remover"/>
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

