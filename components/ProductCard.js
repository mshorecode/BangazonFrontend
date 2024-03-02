/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <div className="rounded-sm border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col items-center gap-2 p-3">
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
      <div className="items-center pb-3 flex justify-center">
        <Button type="button" className="bg-slate-800 border-slate-800 rounded-sm">
          View
        </Button>
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
