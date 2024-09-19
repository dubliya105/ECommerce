import React, { useState } from 'react';
import './Log.css'
import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import Layout from './Layout';
const Login=() => {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=new useNavigate();
    const cookies = new Cookies();
    const login=async(e)=>{
        try {
            e.preventDefault();
            const response=await axios.post('http://localhost:8080/api/users/login',{
                email:email,
                password:password
            })
            if(response.status===200){
                // toast.success('Login Success'); 
                cookies.set('user',response.data.data);
                navigate('/Home')
            }
        } catch (error) {
            toast.error(error.response.data.error,{
                position:"top-center"
            });
    } 
}  

  return (
            <Layout>
            <div class="wrapper"> 
                <div class="container">
                    <div class="col-left">
                        <div class="login-text">
                        <h2>Admin Login</h2>
                        <p><br/>WellCome Back</p>
                    </div>
                </div>
                <div class="col-right">
                    <div class="login-form">    
                    <h2>Login</h2>
                        <form onSubmit={login}>
                            <p>
                                <label>Username or email address<span>*</span></label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Username or Email" name='email' required />
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" name='password' required/>
                            </p>
                            <p>
                                <input type="submit" value="Sing In" />
                            </p>
                            <ToastContainer />
                            <p>
                                <a href="">Forget Password?</a>
                            </p>
                        </form>
                    {/* <Toaster /> */}
                    </div>
                </div>
            </div>
        </div>
        </Layout>
  );
};
export default Login;