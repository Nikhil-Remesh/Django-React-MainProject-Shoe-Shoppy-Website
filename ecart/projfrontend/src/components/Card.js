import React, { useState } from 'react'
import "../assets/styles/Card.css"
import ImageHelper from '../core/helper/ImageHelper'
import { useNavigate } from 'react-router-dom'
import { addItemToCart , removeItemFromCart} from '../core/helper/cartHelper'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'

const Card=({product, addtoCart = true, removeFromCart=false, reload=undefined,setReload=(f)=>f})=> {
  const navigate =useNavigate();

  const cartTitle = product?product.name:"Title"
  const cartDescription = product?product.description:"Description"
  const cartPrice = product?product.price:"0.00"

  const addToCart =()=>{
    if (isAuthenticated()){
      addItemToCart(product, ()=>getAredirect())
      console.log("Added to cart");
    }else{
      navigate("/signin")
      console.log("Login please!")
    }
  }

  const getAredirect = () =>{
      return navigate("/cart");
  }

  const showAddToCart = (addToCart) =>{
    return(
      addtoCart && (
        <>
        <button onClick={addToCart} className="btn btn-dark w-100">Add to cart</button>
        <Link to={`/productdetail/${product.id}`}><button className="btn btn-secondary w-100 mt-1">View Details</button></Link>
        </>
      )
    )
  }

  const showRemoveFromCart = (removeFromCart)=>{
    return(
      removeFromCart && (
        <button onClick={()=>{
          removeItemFromCart(product.id);
          setReload(!reload);
          console.log("Product removed from cart");
        }} 
        className="btn btn-dark w-100">Remove From Cart</button>
      )
    )
  }

  return (
    <>
    <div className="cardm mb-3">
     
     <div className="card-body">
       <ImageHelper product={product}/>
       <div className='mb-2'>
       <h5 className="card-title">{cartTitle}</h5>
       </div>
       <p className="card-text description-limit">{cartDescription}</p>
       <p className="text-muted">RS.{cartPrice}</p>      
       <div className="row d-flex justify-content-center">
            <div className="">
                {showAddToCart(addToCart)}
            </div>
            <div className="">
                {showRemoveFromCart(removeFromCart)}
            </div>
       </div>
       
     </div>
    </div>
    </>
  )
}

export default Card