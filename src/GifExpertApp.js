import {React, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
        
    //     // setCategories(categories.concat(['nuevo']));
    //     // setCategories(['HunterxHunter', ...categories]);
    //     // setCategories( cats => [...cats, 'HunterXHunter'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map(cat => 
                            (<GifGrid key={cat} category={cat}/>)      
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;