import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category} ) => {

    const {images, isLoading} = useFetchGifs(category);


    return (
   <>
   <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando.....</h2>)
        }
   
    <div className="card-grid" >
        {images.map(
                    (gifItem) => (
                        <GifItem 
                        key={gifItem.id} 
                        //gif={gifItem}/>
                        { ...gifItem }/>
                    ) )}
        </div>

   </>
  )
}
