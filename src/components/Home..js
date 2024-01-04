import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const Home = (props) => {
  
  const [data, setData] = useState([])

  const fetchdata = async () => {
    fetch('https://fakestoreapi.com/products?limit=64')
            .then(res=>res.json())
            .then(json=>setData(json))
  }

  useEffect(() => {
    fetchdata()
    
  }, [])
  

  return (
    
      <div class="row mt-2 row-cols-md-4 g-2">
        {data.map((element) => (
          
          <ItemCard alerts={props.alert} title={element.title} key={element.id} category={element.category} description={element.description}  price={element.price} image={element.image} ></ItemCard>
  ))}
      </div>
  )
}

export default Home
