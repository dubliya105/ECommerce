
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SideBar from './components/SideBar';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Addproduct from './components/Addproduct';
import AddCategory from './components/Category/AddCategory';
import ShowList from './components/Category/ShowList';
import Home from './components/Home';
import UpdateProduct from './components/UpdateProduct';
import ShowUsers from './components/ShowUsers';
import Order from './components/Order';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/Home' element={ <Home/>} />
        <Route path='/addProduct' element={ <Addproduct/>} />
        <Route path='/addCategory' element={ <AddCategory />} />
        <Route path='/getProduct' element={ <Products />} />
        <Route path='/showCategory' element={ <ShowList />} />
        <Route path='/edit/:id' element={ <UpdateProduct />} />
        <Route path='/showusers' element={<ShowUsers/>} />
        <Route path='/showorders' element={<Order/>} />
      </Routes>
    </BrowserRouter>
        {/* <SideBar/> */}
    </div>
  );
}

export default App;
