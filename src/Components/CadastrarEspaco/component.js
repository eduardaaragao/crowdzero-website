import React, {useState} from 'react'
import ImageUploader from '../ImageUploader'
import Button from '../Button'

const CadastrarLocalBox = () => {
    const [nomeLocal, setNomeLocal] = useState('')
    const [descricaoLocal, setDescricaoLocal] = useState('')
    const [imagemLocal, setImagemLocal] = useState(null)

    const handleImage = (e) => {
        setImagemLocal(e)
    }

    const styleInput = {
        fontSize: '0.8125rem',
        color: '#6f8ea4'
    }

    const styleLegend = {
        fontSize: '0.6875rem',
        color: 'rgba(44,105,117,0.34)',
        marginBottom: '15px'
    }

    // Disparada ao clicar no botão
    const criarLocal = () =>{
        if (imagemLocal === null) {
            alert('Por favor, adicione uma imagem')
        }
        else if (descricaoLocal === ''){
            alert('É obrigatório adicionar uma descrição do local')
        }
        else if (nomeLocal === ''){
            alert('Por favor, adicione o nome do local')
        }
        else{
            const data = {
                nome: nomeLocal,
                descricao: descricaoLocal,
                imagem: imagemLocal
            }
        }
    }

    const styleTextArea = {
        marginRight: '50px'
    }

    const handleLocalName = (e) =>{
        setNomeLocal(e.target.value)
    }

    const handleDescription = (e) =>{
        setDescricaoLocal(e.target.value)
    }

    return (
        <div key="addLocal">
            <div className="df sb">
                <div>
                    <div style={styleInput}>Nome do Local (max caracteres: 20)</div>
                    <input type="text" maxLength="20" placeholder="Digite o nome do local" className="inputWidth" onChange={(e) =>handleLocalName(e)}/>
                    
                    <div style={styleInput}>Descrição (max caracteres: 100)</div>
                    <textarea style={styleTextArea} cols="50" rows="10" maxLength="100" placeholder="Digite uma descrição sobre o local" onChange={(e) => handleDescription(e)}/>
                </div>
                
                <div className="uploadFoto">
                    <div style={styleInput}>Foto do Local (max 5000MB)</div>
                    <div style={styleLegend}>Dimensões recomendadas: 800x400 (px)</div>
                    <ImageUploader image={imagemLocal} onChange={handleImage}/>
                </div>
            </div>
            <Button name="adicionar local" onClick={criarLocal}/>
        </div>
    )
}

export default CadastrarLocalBox
