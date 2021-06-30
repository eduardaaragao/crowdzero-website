import '../../CSS/style.css';
import List from '../AlertasBox/component'
import Button from '../Button'
import Wrapper from '../Whiteboard'

/* Componente Alerta */

export default({data, onDelete, onClick}) => {
  const labels = [
    "Local",
    "Horário",
    "Data",
    "Tipo",
    "Status",
    "Marcar como resolvido"
  ]

  const statusColors = new Map();

  statusColors.set('Em Desinfeção', 'desinfec')
  statusColors.set('Alta Ocupação', 'altaocupacao')

  const pageData = [
    <div key="alerta-data">
        <div className="table-labels">
                {labels.map((l) =>
                  <p key={l} className="table-title">{l}</p>
                )}
        </div>
        
        <List
          list={data}
          statusColors={statusColors}
          onDelete={onDelete}
        />
        
        <div className="button-align">
          <Button onClick={onClick} name="Ver mais" colorFrom="#7BE495" colorTo="#329D9C"/>
        </div>
    </div>
  ]

  return <Wrapper data={pageData} width='fit-content' padding='20px' height='fit-content'/>
}