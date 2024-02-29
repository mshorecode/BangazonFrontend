import { useEffect, useState } from 'react';
import getAllProducts from '../api/ProductData';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);

  const renderProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <>
      <h1 className="mt-12 font-semibold fs-3">Newest Items</h1>
      <div className="shop-layout">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} onUpdate={renderProducts} />
        ))}
      </div>
    </>
  );
}
