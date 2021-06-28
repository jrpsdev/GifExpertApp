import React from 'react'

export const GifGrid = ( { category } ) => {

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=Samurai+X&limit=5&api_key=xihgKvxIn5LiQz36dS5z6Fn3p3yXMPKM';
        const resp = await fetch(URL);
        const data = await resp.json();

        console.log(data);
        
    }

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
