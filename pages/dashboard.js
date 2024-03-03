/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useAuth } from '../utils/context/authContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <div className="flex justify-center gap-10 mt-40">
        <div>
          <img src={user.fbUser.photoURL} alt="Profile Image" className="object-center w-38 h-38 rounded-full" />
        </div>
        <div className="p-2">
          <h1 className="fs-2 fw-semibold">{user.firstName} {user.lastName}</h1>
          <p className="fs-4 fw-semibold">{user.email}</p>
        </div>
      </div>
    </>
  );
}
