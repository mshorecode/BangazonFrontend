import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { updateRegisteredUser } from '../api/UserData';
import { registerUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function RegisterForm({ onUpdate }) {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    seller: false,
    uid: user.uid,
  });

  useEffect(() => {
    if (user.uid) setFormData(user);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateRegisteredUser(formData).then(() => router.push('/profile'));
    } else {
      registerUser(formData).then(() => onUpdate(user.uid))
        .then(router.push('/'));
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value, seller: checked,
    }));
  };

  return (
    <div className="mt-16 flex justify-center">
      <Form onSubmit={handleSubmit} className="w-96">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-none"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Seller?</Form.Label>
          <Form.Check
            type="checkbox"
            name="seller"
            checked={formData.seller}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="bg-slate-800 border-slate-800 rounded-sm">
          {user.id ? 'Update' : 'Register'}
        </Button>
      </Form>
    </div>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    seller: PropTypes.bool,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RegisterForm;
