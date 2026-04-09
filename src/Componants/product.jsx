import { useState } from 'react'
import { Data } from '../Data/Data'
import Projucttwo from './projucttwo' 



const Product = () => {
    
    const [products] = useState(Data);

    return (
        <div className='flex flex-wrap justify-between'>
            {products && products.map((p) => {
                return (
                    <Projucttwo key={p.id} Product={p} /> 
                )
            })}
          
        </div>
    )
}

export default Product; 