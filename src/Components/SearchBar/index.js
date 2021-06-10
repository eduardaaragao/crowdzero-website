import React from 'react'


const SearchBar = ({onChange}) => {
    return (
        <div className="search-bar">
            <input placeholder="Pesquisar..." onChange={(e) => onChange(e)}/>
        </div>
    )
}

export default SearchBar
