import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getOrder } from './helper/orderHelper';
import { isAuthenticated } from '../auth/helper';
import '../assets/styles/Order.css';

function Order() {
    const UserId = isAuthenticated && isAuthenticated().user.id;

    const [error, setError] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const data = await getOrder();
                if (data.error) {
                    setError(data.error);
                    console.log(data.error);
                } else {
                    const userOrders = data.filter(order => {
                        // Extract user ID from the order URL
                        const userIdFromUrl = order.user.match(/\/api\/user\/(\d+)\/$/);
                        if (userIdFromUrl) {
                            // Compare extracted user ID with the authenticated user's ID
                            return userIdFromUrl[1] === UserId.toString();
                        }
                        return false; // Return false if user ID couldn't be extracted from the URL
                    });
                    setOrders(userOrders);
                }
            } catch (error) {
                setError(error.message);
                console.error('Error loading orders:', error);
            }
        };

        loadOrder();
    }, [UserId]); 

    return (
        <>
            <Navbar />
            <div className='O-container'> 
                <h1>My Orders</h1>
                <div className='order-list'>
                    {orders.map((order, orderIndex) => (
                        <div key={orderIndex} className='order-container'> 
                            <div className='order-details'> 
                                <h2>Order {orderIndex + 1}</h2>
                                <ul>
                                    <li><strong>Products:</strong> {order.product_names}</li>
                                    <li><strong>Total Products:</strong> {order.total_products}</li>
                                    <li><strong>Total Amount:</strong> {order.total_amount}</li>
                                    <li><strong>Date:</strong> {order.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Order;
