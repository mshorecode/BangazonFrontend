/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  GrView, GrAddCircle, GrEdit, GrFormTrash,
} from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import { deleteProduct } from '../api/ProductData';

export default function ProductCard({ product }) {
  const router = useRouter();
  const { pathname } = router;

  const isMainPage = pathname === ('/');
  const isShop = pathname.includes('/shop');
  const isDashboard = pathname.includes('/dashboard');

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${product.productName}?`)) {
      deleteProduct(product.productId);
    }
  };

  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col items-center gap-2 p-3 mt-2">
        <img
          src={product.productImageUrl}
          alt="Thumbnail"
          width="100"
          height="100"
          className="aspect-square object-cover border border-gray-200 rounded-md overflow-hidden dark:border-gray-800"
        />
        <div className="grid gap-2 text-sm">
          <h3 className="font-semibold fs-6">{product.productName}</h3>
        </div>
      </div>
      <div className="flex p-3">
        {isMainPage && !isShop && !isDashboard && (
          <>
            <Button type="button" href={`/product/${product.productId}`} className="bg-slate-800 border-slate-800 rounded-md shadow-sm">
              <GrView className="h-5 w-5" />
            </Button>
          </>
        )}
        {isShop && !isDashboard && (
          <>
            <Button type="button" href={`/product/${product.productId}`} className="bg-slate-800 border-slate-800 rounded-md shadow-sm">
              <GrView className="h-5 w-5" />
            </Button>
            <Button type="button" className="bg-slate-800 border-slate-800 rounded-md last:ml-auto">
              <GrAddCircle className="h-5 w-5" />
            </Button>
          </>
        )}

        {isDashboard && (
        <>
          <Button type="button" href={`/product/edit/${product.productId}`} className="bg-slate-800 border-slate-800 rounded-md shadow-sm">
            <GrEdit className="h-4 w-4 mt-[2px]" />
          </Button>
          <Button type="button" onClick={handleDelete} className="bg-slate-800 border-slate-800 rounded-md last:ml-auto">
            <GrFormTrash className="h-5 w-5" />
          </Button>
        </>
        )}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    productName: PropTypes.string,
    productPrice: PropTypes.number,
    productDescription: PropTypes.string,
    productImageUrl: PropTypes.string,
  }).isRequired,
};
