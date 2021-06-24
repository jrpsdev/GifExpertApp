import React from 'react'

const GifExpertApp = () => {
    
    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    
    return (
        <>
            <h1>Hola Silvito</h1>
            <hr></hr>

            <ol>
                { 
                    categories.map(category => {
                        return <li key = {category} > { category } </li>
                    }) 
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
