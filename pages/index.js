/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../api/ProductData';
import { createOrder } from '../api/OrderData';

function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [authUser, setAuthUser] = useState(null);
  const [products, setProducts] = useState([]);

  const renderProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const createCart = () => {
    createOrder(user).then(router.push('/order'))
      .then(() => renderProducts());
  };

  const onUpdate = () => {
    checkUser(user.uid).then((data) => {
      setAuthUser(data);
    });
  };

  useEffect(() => {
    checkUser(user.uid).then((data) => {
      setAuthUser(data);
    });
    renderProducts();
  }, []);

  return (
    <>
      { authUser ? (
        authUser.uid === user.uid ? (
          <>
            <div className="flex mt-12">
              <h1 className="font-semibold fs-3">Recently Added</h1>
              <Button type="button" onClick={createCart} className="bg-slate-800 border-slate-800 rounded-md shadow-sm last:ml-auto h-10 w-30">
                Start Shopping
              </Button>
            </div>
            <div className="shop-layout">
              {products.toReversed().slice(0, 20).map((product) => (
                <ProductCard key={product.productId} product={product} onUpdate={renderProducts} />
              ))}
            </div>
          </>
        ) : (
          <RegisterForm user={user} onUpdate={onUpdate} />
        )
      ) : (
        <div className="flex justify-center mt-40 fw-semibold fs-1">Loading...</div>
      )}
    </>
  );
}

export default Home;
