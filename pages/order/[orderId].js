import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getProductsByOrder } from '../../api/OrderData';
import ProductCard from '../../components/ProductCard';

export default function ViewOrder() {
  const [order, setOrder] = useState([]);
  const router = useRouter();
  const { orderId } = router.query;

  useEffect(() => {
    getProductsByOrder(orderId).then((data) => {
      setOrder(data);
    });
  }, [orderId]);

  return (
    <div className="flex flex-col">
      <div className="shop-layout">
        {order.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
