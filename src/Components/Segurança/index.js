import React, { useState }  from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import Button from '../Button'

const Seguranca = () => {
    const [icone, setIcone] = useState(false)

    const onSave = () => {
        console.log("Save")
    }

    const onClear = () => {
        console.log("Clear")
    }

    return (
        <div className="configuracoes--page">
            <h3>Alterar password</h3>

            <div class="inputContainer">
                <div onClick={() => setIcone(prev => !prev)}>
                    {icone ? <VisibilityOutlinedIcon className="icone"/> : <VisibilityOffOutlinedIcon className="icone"/>}
                </div>
                
                <input class="password-field" type={`${icone ? 'text' : 'password'}`} placeholder="Digite sua password atual"/>
                <br/>
                <input class="password-field" type={`${icone ? 'text' : 'password'}`} placeholder="Digite sua nova password"/>
            </div>

            <div style={{display:"flex", alignItems:"center", paddingBottom:"100px"}}>
                <p style={{textTransform:"uppercase", fontWeight:"bold", cursor:"pointer", fontSize:"0.725rem", marginRight:"20px", color:"#329D9C"}} onClick={onClear}>Descartar Alterações</p>
                <Button name="salvar alterações" onClick={onSave}/>
            </div>
            
        </div>
    )
}

export default Seguranca
