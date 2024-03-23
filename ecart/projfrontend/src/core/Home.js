import React,{useState,useEffect} from 'react';
import {getProducts} from "./helper/coreapicalls";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';


export default function Home() {

  const [products ,setProducts]=useState([]);
  const [error,setError]=useState(false);

  const loadAllProducts=()=>{
    getProducts()
    .then((data)=>{
      if(data.error){
        setError(data.error);
        console.log(error);
      } else{
        setProducts(data);
      }
    });
  };

  useEffect(()=>{
    loadAllProducts();
  },[]);

  return (
    <div>
        <Navbar/>
        <div className="">
            <Carousel/>
        </div>
        <h3 className='px-5 pt-5 fw-bold'>New Arrivals</h3>  


        <div className='row ms-2'>
                {products.slice(0, 4).map((product,index)=>{
                  return(
                    <div key={index} className='col-3 mb-4'>
                        <Card product={product}/>
                    </div>
                  )
                })}
              </div>
        <Footer/>
    </div>
  );
}
