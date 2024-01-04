import React from 'react'
import logo from '../assets/image.png'
import { Link,useNavigate } from 'react-router-dom'
import cart from '../assets/cart.jpg'
function Navbar(props) {
  const navigate = useNavigate()
    const logout = () => {
      localStorage.removeItem('token')
      navigate('/')
    }
    return (
        <>
            <div>
                <nav class="navbar sticky-top navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand">
                            <img src={logo} alt="" width="50" height="30" class="d-inline-block align-text-top" /> EcoCart</Link>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search EcoCart" aria-label="Search" />
                            <button class="btn btn-primary" type="submit">Search </button>
                        </form>
                    </div>
                </nav>
            </div>
            <div>
            <ul class="nav sticky-top nav-tabs">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Categories</Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/product?type=electronics">Electronics</Link></li>
                <li><Link class="dropdown-item" to="/product?type=jewelery">Jewelery</Link></li>
                <li><Link class="dropdown-item" to="/product?type=men's clothing">Men's clothing</Link></li>
                <li><Link class="dropdown-item" to="/product?type=women's clothing">Women's clothing</Link></li>

                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item" to="/product">More</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/customerservice">Customer Service</Link>
            </li>
            <li className="nav-item">
            {localStorage.getItem('token')? <Link class="nav-link text-danger" to="/" onClick={logout} tabindex="-1" aria-disabled="true">Logout</Link> : <Link class="nav-link" to="/login" tabindex="-1" aria-disabled="true">Login</Link>}
            </li>
            <li class="nav-item">
              <Link class={`nav-link ${localStorage.getItem('token') ? '' : "disabled" }`} to="/" tabindex="-1" aria-disabled="true">Sell</Link>              
              </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart" tabindex="-1" aria-disabled="true"><img src={cart} width='30px' alt="" /></Link>              
              </li>
              <li class="nav-item">
              {localStorage.getItem('token')? <Link class="nav-link text-danger" to="/" tabindex="-1" aria-disabled="true">UserProfile</Link> : <Link class="nav-link" to="/signup" alert={props.alert}tabindex="-1" aria-disabled="true">Signup</Link>}            
              </li>
          </ul>
            </div>
        </>
    )
}

export default Navbar
