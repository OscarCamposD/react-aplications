import React,{useState} from 'react';
import AddCatory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp=()=>{
   const [categories,setCategories]=useState(['one punch']);

    return (
        <>
            <h2>GifExpertApp </h2>
            <AddCatory setCategories={setCategories} />
            <hr />

          
            <ol>
                {
                    categories.map(category=>
                        <GifGrid 
                            key={category}
                            category={category}

                        />    
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;