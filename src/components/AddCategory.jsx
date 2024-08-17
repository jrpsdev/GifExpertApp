import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="text"
            placeholder="buscar gif"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
            />
    </form>
  )
}
