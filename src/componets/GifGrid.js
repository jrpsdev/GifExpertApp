import React, { useState, useEffect } from 'react'

export const GifGrid = ( { category } ) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=Samurai+X&limit=5&api_key=xihgKvxIn5LiQz36dS5z6Fn3p3yXMPKM';
        const resp = await fetch(URL);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                tittle: img.tittle,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        
    }

    return (
        <div>
            <h3>{ counter }</h3>
            <button onClick = { () => setCounter( counter + 1) }>1</button>
        </div>
    )
}
