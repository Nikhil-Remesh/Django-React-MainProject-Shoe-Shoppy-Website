import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted successfully.');
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <>
      <Navbar />
      <main className="">
        <div className="">
          <div className="" style={{ position: "relative" }}>
            <img
              src="https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-100 h-100"
            />
          </div>
          <div className="d-flex flex-column px-3 py-3 rounded" style={{ position: "absolute", top: "300px", right: "33%", backgroundColor: "rgba(0,0,0,0.5)", width: "500px" }}>
            <div className="text-center">
              <p className="heading text-light">Contact us</p>
              <p className="text-light">
                <i>
                  <b>Contact Us To Find Out More</b>
                </i>
              </p>
            </div>
            <div className="">
              <form id="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input form-control mt-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="input  form-control mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="">
                  <input
                    type="text"
                    placeholder="Message"
                    className="input form-control mt-3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="alert-danger errorcontact">
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-dark w-100 mt-1"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="px-3 d-flex justify-content-evenly my-5"></div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
