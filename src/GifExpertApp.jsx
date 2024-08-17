import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory)=>{
        //const updateCategoty = [...categories]
        //updateCategoty.push(newCategoty);
        //setCategories(updateCategoty)
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory onAddCategory={onAddCategory}/>

        
                {
                    categories.map( (category) => (
                        <GifGrid 
                        key={ category } 
                        category={ category } />
                    ) )
                }
    </>
  )
}
