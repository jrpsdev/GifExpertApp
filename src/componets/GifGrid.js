import GifGridItem from '../componets/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading...</p> }
                 <div className='card-grid'>
                    { images.map( (img) => (
                        <GifGridItem key = {img.id} {...img}/>
                    ))
                    }
            </div>
        </>
    )
}
