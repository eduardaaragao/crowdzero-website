import React from 'react'
import Chart from './lineChart'
import Whiteboard from '../../Whiteboard'

/* Gráfico de Reportes por Local */

const LineChart = ({data}) => {
    const style = {
        width: '100%',
        height: '100%'
    }
    const pageData = [
        <div style={style} key="grafico-2">
            <div className="grafico-topbar">

            <h2 className="graphtitle">Quantidade de reportes em: Auditório 1</h2>

            <div className="grafico-labels">
                    <span className="dot red"> <span className="inner-dot red"/></span>
                    <div className="label-name">Alto</div>
                    <span className="dot yellow"> <span className="inner-dot yellow"/></span>
                    <div className="label-name">Médio</div>
                    <span className="dot green"> <span className="inner-dot green"/></span>
                    <div className="label-name">Baixo</div>
                </div>
            </div>
            <Chart data={data} className="line-chart" key="grafico-2-2"/>
        </div>
    ]


    return (
        <Whiteboard data={pageData} width='45%' height='410px' marginRight='30px'/>
    )
}

export default LineChart
