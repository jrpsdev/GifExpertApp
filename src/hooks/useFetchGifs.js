import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState(
        {
            data: [],
            loading: true,
        }
    );

    useEffect(() => { // no son asyng
        getGifs(category)
            .then(img => {
                //setTimeout( ()=> {

                    setState({
                        data: img,
                        loading: false,
                    })

                //}, 3000 )
                
            }); //img => setImages(img)
    }, [ category ]);

    setTimeout(()=>{
        
    }, 3000)

    return state;
    
}
