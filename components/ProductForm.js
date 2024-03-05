/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createProduct, getSingleProduct, updateProduct } from '../api/ProductData';

export default function ProductForm() {
  const { user } = useAuth();
  const router = useRouter();
  const { productId } = router.query;
  const [formData, setFormData] = useState({
    sellerId: user.id,
    categoryId: 0,
    productName: '',
    productDescription: '',
    productPrice: 0,
    productImageUrl: '',
  });

  useEffect(() => {
    if (productId) {
      getSingleProduct(productId).then((p) => {
        setFormData({
          productId: p.productId,
          sellerId: p.sellerId,
          categoryId: p.categoryId,
          productName: p.productName,
          productDescription: p.productDescription,
          productPrice: p.productPrice,
          productImageUrl: p.productImageUrl,
        });
      });
    }
  }, [router.query.productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productId) {
      updateProduct(formData).then(() => router.push('/dashboard')
        .then(window.location.reload()));
    } else {
      createProduct(formData).then(() => router.push('/dashboard'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-16 flex justify-center">
      <Form onSubmit={handleSubmit} className="w-96">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product description"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product price"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            name="productImageUrl"
            value={formData.productImageUrl}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Select
            className="rounded-sm"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option>Select a category</option>
            <option value="1">Men's Apparel</option>
            <option value="2">Women's Apparel</option>
            <option value="3">Kid's Apparel</option>
            <option value="4">Electronics</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="bg-slate-800 border-slate-800 rounded-sm">
          {productId ? 'Update' : 'Add'}
        </Button>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    sellerId: PropTypes.number,
    categoryId: PropTypes.number,
    productName: PropTypes.string,
    productDescription: PropTypes.string,
    productPrice: PropTypes.number,
    productImageUrl: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  product: {
    productId: 0,
    sellerId: 0,
    categoryId: 0,
    productName: '',
    productDescription: '',
    productPrice: 0,
    productImageUrl: '',
  },
};
