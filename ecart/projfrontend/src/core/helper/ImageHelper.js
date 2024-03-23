import React from 'react'

const ImageHelper =({product})=> {
  const imageurl = product ? product.image :`https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  return (
    <div className=''>
        <img src={imageurl} style={{maxHeight:"100%",maxWidth:"100%"}} className='mb-3' alt=''/>
    </div>
  )
}

export default ImageHelper