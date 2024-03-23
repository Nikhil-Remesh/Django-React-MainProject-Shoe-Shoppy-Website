import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../assets/styles/All.css"
import "../assets/styles/About.css"
function Aboutus() {
  return (
    <>
    <Navbar/>
    <main className="">
  <div className=" mb-5">
    <div className="w-100" style={{position:"relative"}}>
      <img
        src="https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&w=600"
        className=" w-100"
        alt="..."
      />
    </div>
    <div className=" d-flex flex-column justify-content-center mx-5" style={{position:"absolute",top:"300px",color:"white"}}>
      <div className="text-center">
        <p className="heading">About us</p>
        <p>
          <i>
            Welcome to Our Website, your premier destination for an exquisite
            olfactory journey. At Our Website, we believe that fragrance is a
            powerful form of self-expression, capable of evoking emotions,
            memories, and leaving an indelible impression. As avid connoisseurs
            of fine scents, we have curated a diverse collection of perfumes
            that cater to every individual's unique taste and style. Our
            commitment is to provide an unparalleled shopping experience, where
            each fragrance is carefully selected for its quality, craftsmanship,
            and ability to captivate the senses. Whether you seek the timeless
            elegance of classic perfumes or the allure of contemporary blends,
            Our Website is your go-to destination for finding the perfect scent.
            We understand that choosing a fragrance is a personal and intimate
            experience, and that's why we offer detailed product descriptions,
            expert recommendations, and a user-friendly interface to assist you
            in discovering your signature scent. Our Website is not just a place
            to shop; it's a community of fragrance enthusiasts who appreciate
            the artistry behind each bottle. With a passion for perfumery and a
            dedication to customer satisfaction, Our Website invites you to
            explore our carefully curated selection and embark on a sensory
            adventure that transcends the ordinary. Welcome to a world where
            fragrance is an expression of individuality, and each bottle tells a
            unique story. Discover your scent identity with Our Website – where
            luxury meets the essence of you.
          </i>
        </p>
      </div>
    </div>
    <div className=" d-flex flex-column justify-content-center" style={{position:"absolute",top:"700px",color:"white"}}>
      <div className="text-center">
        <p className="heading">Our Vision</p>
        <p>
          {" "}
          <i>
            At Our Website, our vision is to redefine the way you experience and
            embrace the world of fragrance. We envision a space where the
            artistry of perfumery converges seamlessly with the desires and
            aspirations of our diverse clientele. Our goal is to be more than
            just a perfume shopping website; we strive to be a catalyst for
            self-discovery and expression. In our vision, each bottle of perfume
            becomes a vessel for storytelling, a conduit through which
            individuals can articulate their unique personalities and
            sensibilities. We aspire to create a platform that not only offers
            an extensive array of scents but also fosters a community of
            fragrance enthusiasts who share in the passion for this exquisite
            form of art.
          </i>
        </p>
      </div>
    </div>
  </div>
  <div>
    <div className="text-center mt-5 mb-5 line-height">
      <p className="heading">Social Media Posts</p>
      <p className="text-muted">Here is our social posts</p>
    </div>
    <div className="d-flex flex-wrap justify-content-evenly pb-5">
      <div className="card">
        <div className="card-img text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/3197/5082/files/Press_20_1_480x480.png?v=1671425757"
            alt="image"
            height="150px"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/3197/5082/files/Press_18_1_480x480.png?v=1671425106"
            alt="image"
            height="150px"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/3197/5082/files/Press_17_1_480x480.png?v=1671424959"
            alt="image"
            height="150px"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/3197/5082/files/Press_16_1_480x480.png?v=1671424642"
            alt="image"
            height="150px"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img text-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0602/3197/5082/files/Press_14_1_480x480.png?v=1671187076"
            alt="image"
            height="150px"
          />
        </div>
      </div>
    </div>
  </div>
</main>

    <Footer/>
    </>
  )
}

export default Aboutus