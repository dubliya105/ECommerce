import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import {cartLength} from './ShowProducts.jsx'

const Layout = ({children}) => {
  return (
    <div>
    {/* <cartLength.provider> */}
        <Navbar/>
        <div className='row'>
    
            <div    >
                <main style={{marginTop:"70px"}}>{children}</main>
            </div>
        </div>
    
       {/* </cartLength.provider> */}
    </div>
  )
}

export default Layout