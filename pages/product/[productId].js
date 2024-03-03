/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getSingleProduct } from '../../api/ProductData';

export default function ViewProduct() {
  const [product, setProduct] = React.useState({});
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    getSingleProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <>
      <div className="flex justify-center gap-10 mt-40">
        <div>
          <img src={product.productImageUrl} alt="Thumbnail" width="350" height="350" />
        </div>
        <div className="p-2">
          <h1 className="fs-1 fw-semibold">{product.productName}</h1>
          <p className="fs-4 fw-semibold">${product.productPrice}</p>
          <p>{product.productDescription}</p>
        </div>
      </div>
    </>
  );
}
