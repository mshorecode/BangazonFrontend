/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getProductsBySellerId } from '../api/ProductData';
import ProductCard from '../components/ProductCard';
import { getOrdersBySeller } from '../api/OrderData';
import OrderCard from '../components/OrderCard';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  const renderProducts = async () => {
    const data = await getProductsBySellerId(user.id);
    setProducts(data);
  };

  const renderOrders = async () => {
    const data = await getOrdersBySeller(user.id);
    setOrders(data);
  };

  useEffect(() => {
    renderProducts();
    renderOrders();
  }, []);

  return (
    <div className="page-layout">
      <div>
        <div className="flex flex-col">
          <h1 className="text-center fs-3 fw-semibold mt-5 p-3">Products</h1>
          <div className="shop-layout">
            {products.map((product) => (
              <ProductCard key={product.productId} product={product} onUpdate={renderProducts} />
            ))}
          </div>
          <h1 className="text-center fs-3 fw-semibold mt-5 p-3">Orders</h1>
          <div className="shop-layout">
            {orders.map((order) => (
              <OrderCard key={order.orderId} order={order} onUpdate={renderOrders} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-5 p-3 rounded-sm user-card">
          <div className="flex flex-col items-center">
            <img src={user.fbUser.photoURL} alt="Profile Image" className="object-center w-38 h-38 rounded-full" />
            <p className="fw-semibold fs-3">{user.username}</p>
          </div>
          <div className="flex justify-center">
            <Button type="button" href="/product/new" className="bg-slate-800 border-slate-800 rounded-sm">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
