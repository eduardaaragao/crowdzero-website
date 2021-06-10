import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function enviarDados (dados, servico) {
    try{
        console.log('A enviar dados...')
        const URL = BASE_URL + servico
        const data = dados
    }catch(e){
        console.log("Erro")
    }

   /*axios.post(URL, data)
   .then(response =>{
       if (response.data.success === true){
           return 'sucesso'
       }else{
           return 'erro'
       }
   }).catch(e => console.log('Erro ' + e))*/
}