import { useContext } from 'react';
import { UserContext } from '../services/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { loading, isAuthenticated } = useContext(UserContext);

  if (loading) {
    return <p>CARGANDO...</p>;
  } else {
    return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
  }
}

export default ProtectedRoute;
