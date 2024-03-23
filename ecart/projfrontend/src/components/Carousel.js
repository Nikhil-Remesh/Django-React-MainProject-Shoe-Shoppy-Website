import React from 'react'
import "../assets/styles/Carousel.css"
import { Link } from 'react-router-dom'

function Carousel() {
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="//keiton-store-demo.myshopify.com/cdn/shop/files/s8.jpg?v=1688630789" className="img-fluid w-100" alt="slideshow"/>
      <div className='w-100 h-100' style={{position:"absolute",top:"0",left:"0", backgroundColor:"rgba(0,0,0,0.5)",zIndex:"1"}}></div>
      <div className="carousel-caption d-none d-md-block" style={{zIndex:"2"}}>
        <h1 className='fw-bold'>Step Into Style</h1>
        <p>Discover Your Perfect Pair: Shoe Shoppy's Trendsetting Collection.</p>
        <Link to={"/all"}><button className='p-3'>SHOP NOW</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://keiton-store-demo.myshopify.com/cdn/shop/files/s9.jpg?v=1688630789" className="d-block w-100" alt="..." />
      <div className='w-100 h-100' style={{position:"absolute",top:"0",left:"0", backgroundColor:"rgba(0,0,0,0.5)",zIndex:"1"}}></div>
      <div className="carousel-caption d-none d-md-block" style={{zIndex:"2"}}>
        <h1 className='fw-bold'>Step Into Style</h1>
        <p>Discover Your Perfect Pair: Shoe Shoppy's Trendsetting Collection.</p>
        <Link to={"/all"}><button className='p-3'>SHOP NOW</button></Link>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel