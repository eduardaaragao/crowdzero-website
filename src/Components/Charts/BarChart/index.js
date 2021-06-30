import Chart from './barChart'
import Whiteboard from '../../Whiteboard'

/* Gráfico de Reportes */
const ResponsiveChart = ({data}) => {
    const style = {
        width: '100%',
        height: '100%'
    }
    const graphData = [
        <div style={style} key="grafico-1"> 
            <div className="grafico-topbar">
                <h2 className="graphtitle">Gráfico de Reportes</h2>
                    <div className="grafico-labels">
                        <span className="dot red"> <span className="inner-dot red"/></span>
                        <div className="label-name">Alto</div>
                        <span className="dot yellow"> <span className="inner-dot yellow"/></span>
                        <div className="label-name">Médio</div>
                        <span className="dot green"> <span className="inner-dot green"/></span>
                        <div className="label-name">Baixo</div>
                    </div>
            </div>
            <Chart data={data} key="grafico-1-1"/>
        </div>
    ]
    return (
        <Whiteboard height='410px' data={graphData}/>
    )
}

export default ResponsiveChart
