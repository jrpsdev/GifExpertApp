import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Samurai X']);
    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterxHunter']);
    //     setCategories(cats => [...cats, 'HunterxHunter']);
    // }



    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>

            <ol>
                { 
                    categories.map(category => (
                        <GifGrid key = { category } category = { category }/>
                        )
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
