import React from 'react'
import Block from '../Block'
import '../../CSS/style.css'

const DataOverview = ({data}) => {
    return (
        <div className="overview--dados">
            {data.map((item, i) =>{
                if (data.length === i + 1){
                    return <Block key={item.id} color={item.cor} description={item.descricao} quantity={item.quantidade} hasRectangle={false}/>
                }else{
                    return  <Block key={item.id} color={item.cor} description={item.descricao} quantity={item.quantidade}/>
                }
            })}
         </div>
    )
}

export default DataOverview