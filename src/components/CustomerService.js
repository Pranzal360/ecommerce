import React from 'react'
import order from '../assets/customerService/order.png'
import address from '../assets/customerService/address.png'
import login from '../assets/customerService/login.png'
import someelse from '../assets/customerService/else.png'
import { Link } from 'react-router-dom'



const CustomerService = () => {
    return (
        <div>
            <div class="container mt-3">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <span class="navbar-text">
                            Welcome to EcoCart's Customer Service, <br></br>
                            What would you like help with today? You can quickly take care of most things here, or connect with us when needed.

                        </span>
                    </div>
                </nav>

                <div class=" mt-2 mx-5 row row-cols-1 row-cols-md-2 g-4">
                    <div class="card mb-3 mx-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={order} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><Link class="stretched-link text-danger">A delivery, order or return</Link></h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus aliquid totam nesciunt quidem unde officiis molestias tempore minima. Quas illo, minima reiciendis animi exercitationem asperiores atque nisi assumenda excepturi?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={address} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><Link class="stretched-link text-danger">Address, security and privacy</Link></h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis aut nam officiis aliquam nostrum! Voluptates, perferendis odio! Quos adipisci ratione, sequi placeat unde facilis ducimus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3  mx-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={login} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"> <Link class="stretched-link text-danger">Login and passwords</Link></h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga hic facere provident, at ut iste possimus est vitae, molestias id neque. Suscipit, modi quis..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={someelse} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><Link class="stretched-link text-danger">Something else</Link></h5>
                                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus assumenda nulla nostrum, ea illo nesciunt alias, dicta labore maxime inventore harum pariatur quas, adipisci reiciendis.</p>
                                    <small>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CustomerService
