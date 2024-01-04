import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { useSearchParams } from 'react-router-dom'

const Searchproduct = (props) => {
    let [category] = useSearchParams()
    const [data, setData] = useState([])
    
    const fetchdata = async () => {
      console.log(category.get('type'))
      fetch(`https://fakestoreapi.com/products/category/${category.get('type')}?limit=4`)
              .then(res=>res.json())
              .then(json=>setData(json))
    }

    useEffect(() => {
      fetchdata()
    }, [data])
    

    return (
      
        <div class="row mt-2 row-cols-md-4 g-2">
          {data.map((element) => (
            <ItemCard alerts={props.alert} title={element.title} description={element.description}  price={element.price} image={element.image} ></ItemCard>
    ))}
        </div>
    )
}

export default Searchproduct
