/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../api/ProductData';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState(null);
  const [products, setProducts] = useState([]);

  const renderProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
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
            <h1 className="mt-12 font-semibold fs-3">Recently Added</h1>
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
