import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SideBar from './SideBar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='row'>
            <div className='col-md-3' >
                <SideBar/>
            </div>
            <div className='col-md-9 h-50' style={{maxHeight:'98vh'}}>
                <main style={{marginTop:"90px"}}>{children}</main>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout