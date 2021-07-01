


export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=xihgKvxIn5LiQz36dS5z6Fn3p3yXMPKM`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            tittle: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
    
}