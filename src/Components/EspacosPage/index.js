import React, {useState} from 'react'
import '../../CSS/style.css'
import SearchBar from '../SearchBar'
import CriarLocal from '../CriarLocalCard'
import Card from '../CriarLocalCard/card'
import locais from '../../Files/locaisInternos.json'
const baseURL = 'http://localhost:3000'

class EspacosComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filter: '',
            dataLocais: locais
        }
    }

    componentDidMount(){
        console.log("Loading Page...")
        const url = baseURL + '/getEspacos'
        /*axios.get(url)
        .then(res=>{
            if (res.data.success){
                const data = res.data.data
                this.setState({dataLocais: data})
            }else{
                alert('Erro no servidor')
            }
        }).catch(e =>{alert('Erro!')})
        */
    }

    onChangeSearch = (e) =>{
        this.setState({filter: e.target.value})
    }

    render(){
        let {filter, dataLocais} = this.state
        let dataSearch = dataLocais.filter(item=>{
            return Object.keys(item).some(key =>item.id.toLowerCase().includes(filter.toLowerCase()))
        })

        return(
            <div className="overview--section">
                <h1>Espaços cadastrados</h1>
                <SearchBar onChange={this.onChangeSearch}/>

                <div className="espacos--wrapper">
                    <CriarLocal/>
                    { dataSearch.map((data) =>{
                        return(
                        <Card key={data.id} data={data}/>)})}
                </div>
            </div>
        )
    } 
}

export default EspacosComponent