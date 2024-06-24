import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../services/UserContext';

function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async e => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    await loginUser(username, password);
    navigate('/dashboard');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Nombre de usuario:</label>
        <input type='text' name='username' />
        <br />
        <label>Password:</label>
        <input type='text' name='password' />
        <br />
        <button type='submit'>Ingresar</button>
      </form>
    </>
  );
}

export default Login;
