/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex items-center gap-4 p-6">
        <img
          src={product.productImageUrl}
          alt="Thumbnail"
          width="100"
          height="100"
          className="aspect-square object-cover border border-gray-200 rounded-md overflow-hidden dark:border-gray-800"
        />
        <div className="grid gap-2 text-sm">
          <h3 className="font-semibold">{product.productName}</h3>
          <p className="text-muted">{product.productDescription}</p>
          <p className="font-medium">${product.productPrice}</p>
        </div>
      </div>
      <div className="items-center p-4 flex justify-end">
        <button type="button" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          View
        </button>
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
