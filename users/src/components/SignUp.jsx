import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

// import axios from 'axios';
function SignUp() {
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [confPassword,setconfPassword]=useState('');
  const [error,setError]=useState(''); 

  async function handleSignup(e) {
    e.preventDefault()
    console.log(name,email,password,confPassword);
    // let result =await axios.post("http://127.0.0.1:8000/users/singup",name,email,password,confPassword);
    let result = await fetch('http://localhost:8080/api/users/signup',{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
                name:name,
                email:email,
                password:password,
                confPassword:confPassword, 
                address:address,
                phone:phone
            })
	 })
	
	 if (result.status===201)
		{
			result = await result.json();
			console.log(result.data); 
			navigate('/')
    }
   else if(result.status===400){
    result = await result.json();
    setError(result.error)
    setInterval(()=>{
      setError('')
    },5000)
   }

  }
  


  return (
    <Layout>
    <div  className='Signup' >
       <form onSubmit={handleSignup}>
            <div>
             <h3>SignUp</h3>
             <hr/>
              {error?<div className='alert alert-danger error'>{error}</div>:<div style={{height:'8vh'}}> </div>}
              <div className='row' >
                    <div className='col-sm-6' >
                            <input type='text' name ='name' placeholder='Enter your Name'   className='in form-control' onChange={(e)=>{setName(e.target.value)}}  required/><br/>
                            <input type='text' name ='email' placeholder='Enter your Email' className='input form-control' onChange={(e)=>{setEmail(e.target.value)}}  required/><br/>
                               <input type='text' name ='phone' placeholder='Enter your Phone No.' className='input form-control' onChange={(e)=>{setPhone  (e.target.value)}}  required/><br/>
                            
                    </div>
                    <div className='col-sm-6' >
                             <input type='text' name ='address' placeholder='Enter your Address ' className='input form-control' onChange={(e)=>{setAddress(e.target.value)}}  required/><br/>
                            <input type='password' name ='password' placeholder='Enter your Password' className='input form-control' onChange={(e)=>{setPassword(e.target.value)}}  required/><br/>
                            <input type='password' name ='confPassword' placeholder='Enter your ConfirmPassword' className='input form-control' onChange={(e)=>{setconfPassword(e.target.value)}} required/><br/>
                    </div>
             </div>
             <hr/>
             <button type='submit' className='sign-btn btn btn-primary '>SignUp</button>
            </div>
       </form>
    </div>
</Layout>
  )
}

export default SignUp
