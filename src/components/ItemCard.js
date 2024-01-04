import React, { useContext, useState } from 'react'
import Alert from './Alert'
import { MyContext } from './Context/cartContext'

function ItemCard(props) {
  
  const addTocart = () => {
    props.alerts('Item has been added to cart!', 'success');
    fetch('http://localhost:5000/api/carts/addtocart',{
      method :'POST',
      headers:{
        'Content-Type': "application/json",
        'auth-token' : localStorage.getItem('token')
      },
      body: JSON.stringify({
        title: props.title,
        description: props.description,
        imageURL: props.image,
        category: props.category,
        price: props.price,
      })
    
    
    })
    
    .then(res=>res.json())
    .then(json=>console.log(json))
    // Use the functional form of setArray to ensure you are working with the latest state
    
  };
  return (
    <div className='container mb-2'>
      <div class="card" >
        <img src={props.image} style={{ width: '5rem', imageFit: 'cover' }} class="mt-3 rounded mx-auto d-bloc" alt="..." />
        <div class="card-body">
          <span class="badge bg-danger">{props.category}</span>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description.length > 130 ? props.description.slice(0, 130) + '...' : props.description}</p>
          <small><b>${props.price}</b></small>
          <button className="btn btn-primary mx-3" onClick={() => addTocart()}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
