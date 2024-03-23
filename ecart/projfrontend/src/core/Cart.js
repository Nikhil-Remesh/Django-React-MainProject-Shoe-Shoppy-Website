import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { loadCart } from './helper/cartHelper'
import PaymemtB from './PaymentB'

const Cart=()=> {
  const [reload,setReload]=useState(false)
  const [products,setProducts]=useState([]);  

  useEffect(()=>{
    setProducts(loadCart())
  },[reload])

  const loadAllProducts=(products)=>{
    return(
        <div className='row' style={{gap:"50px"}}>
            {products.map((product,index)=>(
                <Card
                 key={index}
                 product={product}
                 addtoCart={false}
                 removeFromCart={true}
                 reload={reload}
                 setReload={setReload}
                />
            ))}
        </div>
    )
  }  

  const loadCheckout=()=>{
    return(
        <div>
            <h1>Chekout</h1>
        </div>
    )
  }  


  return (
    <>
    <Navbar/>
    <h1 className='text-center fw-bold mb-5'>Shoppy Cart</h1>
    <div className='row text-center mx-5'>
        <div className='col-lg-8 '>
          {loadAllProducts(products)}
       </div>
        <div className='col-lg-4'>
            {products.length > 0 ? 
            (
                <PaymemtB products={products} setReload={setReload} />
            ):
            (
                <h3>Cart Is Empty</h3>
            )}
        </div>
    </div>
    </>
  )
}

export default Cart