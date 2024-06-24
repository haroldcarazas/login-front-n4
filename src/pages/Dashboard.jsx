import { useContext } from 'react';
import { UserContext } from '../services/UserContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  const handleCerrarSesion = () => {
    navigate('/');
    logoutUser();
  };

  return (
    <>
      <button onClick={handleCerrarSesion}>Cerrar sesión</button>
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
