import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { authenticate, isAuthenticated, signin } from '../auth/helper'
import { Navigate } from 'react-router-dom'
import "../assets/styles/Login.css"


const Signin=()=> {
    const [values,setValues]= useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false,
        loading:false,
        didRedirect:false
    })

    const {name,email,password,error,success,loading,didRedirect}=values;

    const handleChange=(name)=>(event)=>{
        setValues({...values,error:false,[name]:event.target.value});
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true});
        signin({email,password})
        .then((data)=>{
            console.log("DATA",data);
            if(data.token){
                // let sessionToken = data.token;
                authenticate(data, ()=>{
                    console.log("TOCKEN ADDED")
                    setValues({
                        ...values,
                        didRedirect:true,
                        error:"",
                        success:true,
                    })
                });
            }else{
                setValues({
                    ...values,
                    loading:false,
                    error:true,
                    success:false,

                })
            }
        })
        .catch(e=>console.log(e))
    }


    const performRedirect = () =>{
        if(success){
            return <Navigate to="/"/>
        }
    }

    const loadingMessage = () =>{
        return(
            loading && (
                <div className='alert alert-info'>
                    <h2>Loading...</h2>
                </div>
            )
        )
    }


    const errorMessage =()=>{
        return(
            <div className='row' >
                <div className='col-md-6 offset-sm-3 text-left'>
                    <p className='alert alert-danger' style={{display:error?"":"none"}}>
                        Check all fields again
                    </p>
                </div>
            </div>
        )
    }



  return (
    <>
    <Navbar/>
    <div className='login-body'>
    {loadingMessage()}
    {errorMessage()}
        <div className=' d-flex flex-column justify-content-center login-container'>
                <div className=''>
                    <form>
                        <h3>LOGIN</h3>
                        <div className=''>
                            <label className='fw-bold'>Email</label>
                            <input className='form-control' value={email} onChange={handleChange("email")} type='text' />
                        </div>
                        <div className=''>
                            <label className='fw-bold'>Password</label>
                            <input className='form-control' value={password} onChange={handleChange("password")} type='password' />
                        </div>
                        <div className='text-center'>
                        <button onClick={onSubmit}  className='btn btn-dark mt-4 '>Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    {performRedirect()}
    </div>
    </>
  )
}

export default Signin