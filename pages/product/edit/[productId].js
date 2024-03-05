import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../../api/ProductData';
import ProductForm from '../../../components/ProductForm';

export default function ProductEdit() {
  const [editProduct, setEditProduct] = useState({});
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    getSingleProduct(productId).then(setEditProduct);
  }, [productId]);

  return (
    <ProductForm product={editProduct} onUpdate={setEditProduct} />
  );
}
