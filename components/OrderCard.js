import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function OrderCard({ order }) {
  return (
    <div className="rounded-sm border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col items-center gap-2 mt-3">
        <p className="font-semibold fs-6">Order Number: {order.orderId}</p>
      </div>
      <div className="flex flex-row justify-center items-baseline mb-3">
        <p className="font-semibold fs-6">Status: </p>
        <p className="font-semibold fs-6 p-2 h-10">{order.status ? (
          <span className="text-green-500 fs-5">●</span>
        ) : (
          <span className="text-red-500 fs-5">●</span>
        )}
        </p>
      </div>
      <div className="items-center pb-3 flex justify-center">
        <Button type="button" href={`/order/${order.orderId}`} className="bg-slate-800 border-slate-800 rounded-sm">
          View
        </Button>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderId: PropTypes.number,
    customerId: PropTypes.number,
    status: PropTypes.bool,
  }).isRequired,
};
