import { useContext } from 'react';
import { UserContext } from '../services/UserContext';

function Dashboard() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <h1>Bievenido</h1>
      <section>
        <p>Nombres: {user?.nombres}</p>
        <p>Apellidos: {user?.apellidos}</p>
        <p>Nombre de usuario: {user?.username}</p>
      </section>
    </>
  );
}

export default Dashboard;
