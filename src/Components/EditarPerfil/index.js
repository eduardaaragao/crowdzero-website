import React, {useState} from 'react'
import Button from '../Button'
import axios from 'axios'

const EditarPerfil = () => {
    const [primeiroNome, setprimeiroNome] = useState('')
    const [ultimoNome, setultimoNome] = useState('')
    const [email, setemail] = useState('')
    const [telemovel, settelemovel] = useState('')

    const onClear = () => {
        setprimeiroNome('')
        setultimoNome('')
        setemail('')
        settelemovel('')
    }

    const onUpdate = async () => {
        const id = localStorage.getItem('id')
        const data = {
            nome: primeiroNome + ' ' + ultimoNome,
            email: email
        }

        try{
            const res = axios.post('gestor/update', data, {params: {id}})
            if (res){
                console.log(res)
            }

        }catch(e){
            console.log(e)
        }

    }

    return (
        <div className="configuracoes--page">
            <h3>Editar Perfil</h3>
            <br/>
            
            <input className="input--configuracoes" value={primeiroNome} placeholder="Primeiro Nome" onChange={(e) => setprimeiroNome(e.target.value)}/>
            <input className="input--configuracoes" value={ultimoNome} placeholder="Último Nome" onChange={(e) => setultimoNome(e.target.value)}/>
            <input className="input--configuracoes" value={email} placeholder="E-mail" onChange={(e) => setemail(e.target.value)}/>
            <input className="input--configuracoes" value={telemovel} placeholder="Telemóvel para contacto" onChange={(e) => settelemovel(e.target.value)}/>
            
            <hr className="divisor-horizontal"/>

            <h3>Notificações</h3>
            <p style={{marginBottom:"50px"}}>Escolha os tipos de notificações que deseja receber.</p>
            
            
            <div className="df">
                    <label className="containerCheck">
                        <p style={{fontSize:"0.9375rem"}}>Alertas de locais super movimentados</p>
                        <input type="checkbox"/>
                        <span className="checkmarkClass"></span>
                    </label>
                    
                    <label className="containerCheck">
                        <p style={{fontSize:"0.9375rem"}}>Alertas de espaços sem reportes por muito tempo</p>
                        <input type="checkbox"/>
                        <span className="checkmarkClass"></span>
                    </label>
                </div>
                
                <div className="df"> 
                    <label className="containerCheck">
                        <p style={{fontSize:"0.9375rem"}}>Alertas de novos associados</p>
                        <input type="checkbox"/>
                        <span className="checkmarkClass"></span>
                    </label>
                    
                    <label className="containerCheck">
                        <p style={{fontSize:"0.9375rem"}}>Alertas de relatórios semanais</p>
                        <input type="checkbox"/>
                        <span className="checkmarkClass"></span>
                    </label>
            </div>
            <hr className="divisor-horizontal"/>

            <div style={{display:"flex", alignItems:"center", float:"right", paddingBottom:"100px"}}>
                <p style={{textTransform:"uppercase", fontWeight:"bold", cursor:"pointer", fontSize:"0.725rem", marginRight:"20px", color:"#329D9C"}} onClick={onClear}>Descartar Alterações</p>
                <Button name="salvar alterações" onClick={onUpdate}/>
            </div>
        </div>
    )
}

export default EditarPerfil
