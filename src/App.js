import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home.';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import CustomerService from './components/CustomerService';
import Searchproduct from './components/Dropdowns';
import Cart from './components/Cart';
import { useState } from 'react';
import Alert from './components/Alert';
import { MyContext } from './components/Context/cartContext';

function App() {
  const [alert,setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 800);
  }

  const [cart, setCart] = useState([]);

  return (
    
    <BrowserRouter>
    <MyContext.Provider value={{ cart, setCart }}>
    <div>
      <Navbar alert={showAlert}></Navbar>
      <Alert alert= {alert}/>
      
      </div>
      <Routes>
      <Route path='/' element={<Home alert={showAlert}></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup alert={showAlert}></Signup>}></Route>
      <Route path='/customerservice' element={<CustomerService></CustomerService>}></Route>
      <Route path='/product' element={<Searchproduct alert={showAlert}></Searchproduct>}></Route>
      <Route path='/cart' element={<Cart alert={showAlert}></Cart>}></Route>
      </Routes>
      
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
