
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xihgKvxIn5LiQz36dS5z6Fn3p3yXMPKM&q=${category}&limit=10`
    const  respose = await fetch(url);
    const {data} = await respose.json();

    const gifs =  data.map( gif => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    ) )
    return gifs;
}