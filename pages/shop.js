/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAllProducts, getProductsByCategory } from '../api/ProductData';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);

  const renderProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleSort = (e) => {
    getProductsByCategory(e.target.value).then((data) => setProducts(data));
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <Form.Select className="mt-4 w-25 sort-dropdown rounded-sm">
          <option onClick={renderProducts}>All</option>
          <option value="1" onClick={handleSort}>Men's Apparel</option>
          <option value="2" onClick={handleSort}>Women's Apparel</option>
          <option value="3" onClick={handleSort}>Kid's Apparel</option>
          <option value="4" onClick={handleSort}>Electronics</option>
        </Form.Select>
      </div>
      <div className="shop-layout">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} onUpdate={renderProducts} />
        ))}
      </div>
    </>
  );
}
