import React from 'react'
import {Link} from 'react-router-dom'

const CriarLocal = () => {
    return (
        <Link className="local-wrapper" to="/home/espaco/cadastrarEspaco">
            <p>Criar novo local</p>
        </Link>
    )
}

export default CriarLocal
