/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <Card className="mt-5 p-3 rounded-sm user-card">
      <Card.Body>
        <div className="flex align-items-center flex-col">
          <div className="user-information">
            <div>
              <img src={user.fbUser.photoURL} alt="Profile Image" className="object-center w-38 h-38 rounded-full" />
              <p className="fs-4 font-semibold">{user.username}</p>
            </div>
            <div className="items-center">
              <div className="flex flex-row gap-2">
                <p className="font-semibold">Username:</p>
                <p>{user.username}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-semibold">First Name:</p>
                <p>{user.firstName}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-semibold">Last Name:</p>
                <p>{user.lastName}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-semibold">Email:</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
      <div className="last:ml-auto">
        <Button type="button" href={`/profile/edit/${user.id}`} className="bg-slate-800 border-slate-800 rounded-sm">
          Edit Profile
        </Button>
      </div>
    </Card>
  );
}
