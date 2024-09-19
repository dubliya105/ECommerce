import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import GetCategory from './components/GetCategory';
// import Cart from './components/Cart';
import ProductD from './components/ProductD';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ShowCart from './components/ShowCart';
import { counterContext } from './components/context/CartContext';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartCount,setCartCount]=useState(0);
  
  return (
    <div className="App">
    <counterContext.Provider value={{cartCount,setCartCount}}>
   {/* <Navbar/> */}
    {/* <Navbar/> */}
    <Routes>
      <Route path='Home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/cart/:id' element={<ProductD/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cartshow' element={<ShowCart/>}/>
    </Routes>
   {/* <GetCategory/> */}
    </counterContext.Provider>
    </div> 
  );
}

export default App;
