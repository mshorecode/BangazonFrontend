/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="page-layout">
      <div className="order-panel mt-5 p-3">
        <h1 className="text-center fs-3 fw-semibold">Order History</h1>
      </div>
      <div className="mt-5 p-3 rounded-sm user-card">
        <div>
          <img src={user.fbUser.photoURL} alt="Profile Image" className="object-center w-38 h-38 rounded-full" />
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold">Username:</p>
            <p>{user.username}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold">Name:</p>
            <p>{user.firstName} {user.lastName}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold">Email:</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="button" href={`/profile/edit/${user.id}`} className="bg-slate-800 border-slate-800 rounded-sm">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
