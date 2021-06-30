import MyResponsivePie from './piechart'
import Wrapper from '../../Whiteboard'

// Wrapper do gráfico 

const PieChart = ({data}) => {
    const style ={
        width: '100%',
        height: '100%'
    }
    const pageData = [
        <div style={style} key="grafico-mais-reportados">
            <h2 className="graphtitle">Locais mais reportados</h2>
            <MyResponsivePie data={data}/>
        </div>
    ]
    return( <Wrapper data={pageData} width='290px' height='420px' marginRight='30px' textAlign='center'/>

    )
}

export default PieChart