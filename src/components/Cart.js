import React, { useContext, useEffect, useState } from 'react'

import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
  const [data, setdata] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()  
  // fetch carts 
  useEffect(() => {
    if (!token) {
      // No token found, redirect to login
      navigate('/login');
    } else {
      // Fetch cart data
      fetchcart();
    }
  }, [token, navigate]);
  const fetchcart = async () => {
    let url = "http://localhost:5000/api/carts/fetchcart"
    fetch("http://localhost:5000/api/carts/fetchcart", {
      method: 'GET',
      headers: {
        "auth-token": localStorage.getItem('token')

      }
    })
      .then(res => res.json()).then(json => setdata(json))
  }


  const [cart, setcart] = useState()
  const [totalprice,setTotalprice] = useState(0)

  const removeFromCart = (id) => {
    props.alert('Item has been removed from cart!', 'danger');
    fetch(`http://localhost:5000/api/carts/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTY3Njc2MThhY2IxYjYwZjhiYzBjIn0sImlhdCI6MTcwNDM0MzMyMX0.z8D5LjSAdvoCgtIRvZujshycgVug6TBtiAa7Zd0SVIE"
      }
    })
      .then(res => res.json())
      .then(json => setcart(json))
  
      setTotalprice(totalprice - data.find(item => item._id === id).price);
    }

  useEffect(() => {
    fetchcart()
  }, [cart])

  useEffect(() => {
    const total = data.reduce((acc,element) => acc+element.price ,0)
    setTotalprice(total)
  },[data])


  return (
    <div className={`${!token ? "container d-none": "container" }`}>
      <div class="row mt-2 row-cols-md-4 g-2">
        {data.map((element) =>

          <CartItem remove={removeFromCart} id={element._id} title={element.title} key={element.id} category={element.category} description={element.description} price={element.price} image={element.imageURL}></CartItem>

        )

        }
      </div>
      <button className="btn btn-warning">Checkout, Total = {totalprice.toFixed(2)} </button>
    </div>
  )
}

export default Cart
