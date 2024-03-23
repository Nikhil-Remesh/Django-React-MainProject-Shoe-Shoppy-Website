import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { API } from '../backend';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../core/helper/cartHelper';
import { isAuthenticated } from '../auth/helper';
import "../assets/styles/ProductDetail.css"

function ProductDetail() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API}product/${productId}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    const addToCart = () => {
        if (isAuthenticated()) {
            addItemToCart(product, () => { navigate("/cart"); });
            console.log("Added to cart");
        } else {
            navigate("/signin");
            console.log("Login please!");
        }
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className=" mt-2">
                    <div className="">
                        <div className="product-image">
                            <img
                                src={product.image}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" product-details">
                        <h2>{product.name}</h2>
                        <p className="text-muted">{product.description}</p>
                        <p id="price">Rs.{product.price}.00</p>
                        <div className="add-to-cart">
                            <button onClick={addToCart} className="btn btn-dark ">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
