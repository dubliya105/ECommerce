import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Navbar() {
    const cookies = new Cookies()
    const navigate=useNavigate();
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar navbar-light bg-dark fixed-top" style={{backgroundColor:''}}>
                <div className="container-fluid">
                    <a className="navbar-brand"><img src="https://img.freepik.com/premium-vector/shopping-logo-design-template-with-bag_502185-127.jpg?w=1060" alt="logo"  width="100px" height="50px" className='rounded-4'/></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-t   oggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item ">
                            <Link to='/Home' className="nav-link text-light" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/abouts' className="nav-link text-light">Abouts</Link>
                        </li>
                        {cookies.get('admin')!==undefined?<li className="nav-item">
                            <Link to='/' className="nav-link text-light" onClick={()=>{cookies.remove('admin') 
                            navigate('/')} }>Logout</Link>

                        </li>:      
                        <li className="nav-item">
                        <Link to='/' className="nav-link text-light">login</Link>
                        </li>
                        }
                        
                    </ul>
                    {/* <form className="d-flex mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar