import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../../../components/RegisterForm';
import { getSingleUser } from '../../../api/UserData';

export default function UpdateRegisteredUser() {
  const [editUser, setEditUser] = useState({});
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    getSingleUser(userId).then(setEditUser);
  }, [userId]);

  return (
    <RegisterForm user={editUser} onUpdate={setEditUser} />
  );
}
