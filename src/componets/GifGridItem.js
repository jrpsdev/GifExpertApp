import React from 'react'

const GifGridItem = ({id, tittle, url}) => {
    
    //console.log(id, tittle, url);
    return (
        <div className = 'card'>
            <img src = {url} alt = {tittle}></img>      
            <p>{tittle}</p>
        </div>
    )
}

export default GifGridItem