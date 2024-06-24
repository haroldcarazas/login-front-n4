/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const authenticateUser = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: token },
      });
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.error('Error al autenticar el usuario: ', error);
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (username, password) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
      });
      console.log(res);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (token) {
      authenticateUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, loading, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
