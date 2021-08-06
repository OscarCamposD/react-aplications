import React, { useState } from "react";
import PropTypes from  'prop-types';
const AddCatory =({setCategories})=>{

    
    const [inputValue,setInputValue]=useState('');
    
    const handleImputValue= (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        if (inputValue.trim().length>2){
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
          
            <input
                type="text"
                value={inputValue}
                onChange={handleImputValue}
            />

        </form>
    )

}

AddCatory.propTypes ={
    setCategories:PropTypes.func.isRequired
}
export default AddCatory;