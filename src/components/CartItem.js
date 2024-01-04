import React from 'react'


function CartItem(props) {


  return (
    <div className='container mb-2'>
      <div class="card" >
        <img src={props.image} style={{ width: '5rem', imageFit: 'cover' }} class="mt-3 rounded mx-auto d-bloc" alt="..." />
        <div class="card-body">
          <span class="badge bg-danger">{props.category}</span>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description.length > 130 ? props.description.slice(0, 130) + '...' : props.description}</p>
          <small><b>${props.price}</b></small>
          <button className="btn btn-danger mx-3" onClick={() => props.remove(props.id)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
