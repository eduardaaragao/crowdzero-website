import React from 'react'
import {Link} from 'react-router-dom'

const CriarLocal = () => {
    return (
        <Link className="local-wrapper" to="/cadastrarEspaco">
            <p>Criar novo local</p>
        </Link>
    )
}

export default CriarLocal
