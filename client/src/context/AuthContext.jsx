import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('user_data'));
    if (storeData) {
      const { userToken, user, expiry } = storeData;
      const now = new Date();

      if (now.getTime() < expiry) {
        setToken(userToken);
        setUserData(user);
        setAuthenticated(true);
      } else {
        logout(); // Automatically log out if the token is expired
      }
    }
  }, []);

  const login = (newToken, newData, expiryTime) => {
    const expiry = new Date().getTime() + expiryTime; // expiryTime in milliseconds
    localStorage.setItem(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData, expiry })
    );
    setToken(newToken);
    setUserData(newData);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserData(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
