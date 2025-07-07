import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContextBase';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Simulate auto login for development (replace with real auto-login)
    const demoUser = { uid: 'demo123', email: 'demo@example.com' };
    setUser(demoUser);
    setRole('student'); // use lowercase for consistency
  }, []);

  const register = async (email, password, role) => {
    // Replace with real registration logic
    setUser({ uid: 'demo', email });
    setRole(role?.toLowerCase() || 'student');
  };

  const login = async (email, password) => {
    // Replace with real login logic
    setUser({ uid: 'demo', email });
    setRole('student');
  };

  const logout = async () => {
    setUser(null);
    setRole(null);
  };

  const resetPassword = async (email) => {
    // Replace with real reset logic
    alert(`Password reset sent to ${email} (mocked)`);
  };

  return (
    <AuthContext.Provider value={{ user, role, register, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
