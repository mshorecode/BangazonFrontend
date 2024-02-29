import { useEffect, useState } from 'react';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';
import Shop from './shop';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    checkUser(user.uid).then((data) => {
      setAuthUser(data);
    });
  }, []);

  const onUpdate = () => {
    checkUser(user.uid).then((data) => {
      setAuthUser(data);
    });
  };

  return (
    <>
      { authUser?.uid === user?.uid ? (<Shop />) : (<RegisterForm user={user} onUpdate={onUpdate} />)}
    </>
  );
}

export default Home;
